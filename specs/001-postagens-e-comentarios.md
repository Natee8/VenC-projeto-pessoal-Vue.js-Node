# 001 — Postagens e comentários

**Status:** Aprovado
**Data:** 2026-08-31

## Contexto

O tutor (`OWNER`) publica um anúncio/post de serviço — passeio, alimentação, cuidado especial. Cuidadores (`CAREGIVER`) comentam tirando dúvidas, e o autor do post responde. Outros tutores enxergam o post no feed, mas **não comentam** em post de tutor.

Hoje isso não existe no banco. Os models Prisma são apenas `UserAuth`, `RefreshToken`, `OwnerProfile`, `Caregiver`, `Address`, `Service`, `ServiceOffer`, `UserReview`, `Notification`, `CaregiverPetPreference`, `VerificationCode`.

**Mas a entidade de postagem já existe e está órfã.** [`serviceRequestEntity.ts`](../packages/src/domain/entities/serviceRequestEntity.ts) modela exatamente o anúncio do tutor — `ownerId`, `petId`, `type`, `description`, `status`, `location`, `urgency`, `scheduledAt`, com `accept()`/`cancel()`/`complete()`. Ela não está exportada no [`index.ts`](../packages/src/index.ts), não tem tabela, repository nem use case. E [`schedulingEntity.ts`](../packages/src/domain/entities/schedulingEntity.ts) já depende dela.

## Decisão

**1. Não criar entidade `Post`.** A postagem é o `ServiceRequest` que já existe — o trabalho é materializá-lo (export + tabela + repository + use case), não escrever um agregado novo.

> Alternativa descartada: criar `Post` do zero e deixar `ServiceRequest` como está. Duplicaria o agregado do anúncio e quebraria `Scheduling`, que já aponta pra `ServiceRequest`.

**2. Criar entidade `Comment`.** Não há nada reaproveitável. `UserReview.comment` ([`review.prisma`](../apps/service/prisma/schema/review.prisma)) é avaliação de usuário: tem `rating` obrigatório e `@@unique([reviewerUserId, targetUserId])`, ou seja, um único registro por par de usuários. Comentário precisa ser N por post, com respostas em thread.

**Nomenclatura:** o domínio continua `ServiceRequest` — alinhado ao README, ao `ServiceRequestStatus` e ao `Scheduling`. A API e o front expõem como `/posts` e "post", que é o vocabulário do usuário.

## Modelagem

### `apps/service/prisma/schema/serviceRequest.prisma` (novo)

```prisma
model ServiceRequest {
  id          Int                  @id @default(autoincrement())
  ownerId     Int                                  // OwnerProfile.id
  petId       Int?                                 // sem model Pet ainda — ver Pendências
  type        ServiceRequestType
  description String
  status      ServiceRequestStatus @default(OPEN)
  urgency     UrgencyType
  scheduledAt DateTime?

  commentsCount Int @default(0)                    // desnormalizado, igual reviewsCount

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  owner    OwnerProfile @relation(fields: [ownerId], references: [id], onDelete: Cascade)
  address  Address?
  comments Comment[]

  @@index([status, createdAt])   // feed
  @@index([ownerId])
}

enum ServiceRequestType   { WALK FEEDING SPECIAL_CARE }
enum UrgencyType          { NOW SCHEDULED }
enum ServiceRequestStatus { OPEN ACCEPTED CANCELLED COMPLETED }
```

Os enums espelham os union types de [`serviceType.ts`](../packages/src/types/serviceType.ts) — manter os dois em sincronia.

### `apps/service/prisma/schema/comment.prisma` (novo)

```prisma
model Comment {
  id               Int      @id @default(autoincrement())
  serviceRequestId Int
  authorUserId     Int                    // UserAuth.id — quem escreveu
  parentId         Int?                   // resposta a outro comentário
  content          String
  isEdited         Boolean  @default(false)
  deletedAt        DateTime?              // soft delete: preserva a thread
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt

  serviceRequest ServiceRequest @relation(fields: [serviceRequestId], references: [id], onDelete: Cascade)
  author         UserAuth       @relation("CommentAuthor", fields: [authorUserId], references: [id])
  parent         Comment?       @relation("CommentReplies", fields: [parentId], references: [id])
  replies        Comment[]      @relation("CommentReplies")

  @@index([serviceRequestId, createdAt])
  @@index([parentId])
}
```

`authorUserId` aponta para `UserAuth`, **não** para `Caregiver`/`OwnerProfile` — os dois papéis comentam. O papel é resolvido no use case.

O delete é lógico (`deletedAt`) porque apagar um comentário-pai fisicamente derrubaria as respostas em cascata.

### Models existentes a alterar

| Arquivo | Mudança |
|---|---|
| [`user.prisma`](../apps/service/prisma/schema/user.prisma) | `comments Comment[] @relation("CommentAuthor")` em `UserAuth` |
| [`owner.prisma`](../apps/service/prisma/schema/owner.prisma) | `serviceRequests ServiceRequest[]` em `OwnerProfile` |
| [`address.prisma`](../apps/service/prisma/schema/address.prisma) | `serviceRequestId Int? @unique` + relação — mesmo padrão de `ownerProfileId`/`caregiverId` |

### Entidades em `packages/src`

**`ServiceRequest`** — ajustar a existente:

- `id`/`ownerId`/`petId` são `string`; o banco usa `Int` autoincrement. Trocar para `number` (`petId: number | null`), como `UserReview` já faz.
- Adicionar `ownerUserId: number` ao construtor — o agregado precisa do `UserAuth.id` do dono, não só do `OwnerProfile.id`, pra saber se quem comenta é o autor.
- Adicionar as regras de permissão como métodos, no padrão de `Notification.canBeSeenBy()`:

```ts
isAuthor(userId: number) { return this.ownerUserId === userId; }

canBeCommentedBy(user: { userId: number; role: Role }): boolean {
  if (this.status === 'CANCELLED' || this.status === 'COMPLETED') return false;
  if (user.role === 'CAREGIVER') return true;   // qualquer cuidador
  return this.isAuthor(user.userId);            // OWNER: só no próprio post
}
```

**`Comment`** — nova, em `packages/src/domain/entities/commentEntity.ts`, no estilo de [`userReviewEntity.ts`](../packages/src/domain/entities/userReviewEntity.ts) (validação no construtor, campos privados, getters):

```ts
export class Comment {
  constructor(
    public readonly id: number,
    public readonly serviceRequestId: number,
    public readonly authorUserId: number,
    public readonly parentId: number | null,
    private content: string,
    private isEdited: boolean,
    private deletedAt: Date | null,
    public readonly createdAt: Date,
    private updatedAt: Date,
  ) { this.validate(); }

  private validate() {
    if (!this.content?.trim()) throw new Error("O comentário não pode ser vazio");
    if (this.content.length > 1000) throw new Error("Comentário muito grande"); // mesmo limite do UserReview
  }

  edit(newContent: string, byUserId: number) { /* exige isAuthor; seta isEdited + touch() */ }
  softDelete(byUserId: number) { /* exige isAuthor; seta deletedAt */ }
  isDeleted() { return this.deletedAt !== null; }
  isAuthor(userId: number) { return this.authorUserId === userId; }
  getContent() { return this.isDeleted() ? null : this.content; }
}
```

**DTOs** — novo `packages/src/domain/dtos/IServiceRequest.dto.ts` com `ServiceRequestDTO`, `CreateServiceRequestDTO`, `CommentDTO`, `CreateCommentDTO`, no formato plano de [`IService.dto.ts`](../packages/src/domain/dtos/IService.dto.ts). `CommentDTO` carrega `author: { id, name, profilePhotoUrl, role }`, `replies: CommentDTO[]` e as flags calculadas `canEdit`/`canDelete`, pro front não reimplementar a regra.

**Exports faltando em [`index.ts`](../packages/src/index.ts):** `serviceRequestEntity.js`, `commentEntity.js`, `notificationEntity.js` (também órfã hoje), `IServiceRequest.dto.js`, `types/INotificationType.js`.

## Regras de negócio

| Ator | Ver feed | Criar post | Comentar | Responder | Editar/apagar comentário |
|---|---|---|---|---|---|
| OWNER autor do post | ✅ | ✅ | ✅ no próprio | ✅ | só os seus |
| OWNER (outro) | ✅ | ✅ (no dele) | ❌ | ❌ | — |
| CAREGIVER | ✅ | ❌ | ✅ | ✅ | só os seus |

A decisão mora em `ServiceRequest.canBeCommentedBy()` — **domínio**, não controller. O use case só traduz o `false` em `left(new Error(...))` → HTTP 403.

**Como resolver o papel:** o [`authMiddleware`](../apps/service/src/core/http/middlewares/auth.middlewares.ts) coloca apenas `req.user.sub`. Não há `role` no token nem coluna `role` em `UserAuth` — o papel é derivado da presença de `ownerProfile` vs `caregiver`, lógica que já existe em [`getMe.usecase.ts`](../apps/service/src/application/usecases/profiles/getMe.usecase.ts).

Extrair essa derivação para um helper reutilizável (`apps/service/src/utils/resolveUserRole.ts`), usado por `GetMeUseCase` e pelos use cases de post/comentário, resolvendo via `usersRepo.findWithProfilesById(userId)`.

> Não colocar `role` no JWT agora: invalidaria os tokens em circulação e obrigaria a mexer em login e refresh.

## Camadas

Seguir a fatia vertical de [`serviceOffer.repository.ts`](../apps/service/src/infrastructure/repositories/services/serviceOffer.repository.ts) → [`serviceOffer.usecase.ts`](../apps/service/src/application/usecases/services/serviceOffer.usecase.ts) → [`serviceOffer.controller.ts`](../apps/service/src/presentation-controllers/serviceOffer.controller.ts).

**Repositories** em `infrastructure/repositories/serviceRequest/`: `serviceRequest.repository.ts` e `comment.repository.ts`, ambos recebendo `PrismaClient` no construtor e com `toDTO` privado, igual `ServiceOfferRepository`.

**Use cases** em `application/usecases/serviceRequest/`, todos retornando `Either<Error, T>` de [`IEighter.ts`](../apps/service/src/core/interface/IEighter.ts):

- `serviceRequest.usecase.ts` — `create` (só OWNER), `listFeed` (paginado), `findById`, `cancel`, `complete`
- `comment.usecase.ts` — `create` (chama `canBeCommentedBy`; se vier `parentId`, valida que o pai é do mesmo post), `listByPost`, `edit`, `remove`

O `create` de comentário roda em `prisma.$transaction` incrementando `commentsCount`, no espírito de [`userReview.usecase.ts`](../apps/service/src/application/usecases/review/userReview.usecase.ts). Paginação do feed e dos comentários reusa `pagingResponse` de [`paginate.ts`](../apps/service/src/utils/paginate.ts).

**Controller** `presentation-controllers/serviceRequest.controller.ts`, usando `success`/`failure` de [`core/http`](../apps/service/src/core/http/success.ts) — o padrão bom é o de [`profile.controller.ts`](../apps/service/src/presentation-controllers/profile.controller.ts), não o de `serviceOffer.controller.ts`, que ainda usa `res.status().json()` cru.

| Método | Rota | Regra |
|---|---|---|
| POST | `/posts` | só OWNER |
| GET | `/posts` | feed paginado, filtros `type`/`urgency`/`status` |
| GET | `/posts/:id` | post + comentários em thread |
| PATCH | `/posts/:id/cancel` \| `/complete` | só autor |
| POST | `/posts/:id/comments` | `canBeCommentedBy` |
| GET | `/posts/:id/comments` | paginado |
| PATCH / DELETE | `/comments/:id` | só autor do comentário |

Registrar em [`index.ts`](../apps/service/src/index.ts): `app.use("/posts", serviceRequest)`.

## Pendências e dependências

- **Não existe model `Pet`**, apesar de `Pet` existir como entidade em packages. Por isso `petId` nasce `Int?` **sem FK**; a relação entra numa migration depois. Não bloqueia postagens.
- **Endereço do post:** se o payload não trouxer endereço, o use case copia o do `OwnerProfile` (via [`userOwner.repository.ts`](../apps/service/src/infrastructure/repositories/user/userOwner.repository.ts)) para o `Address` do `ServiceRequest`.
- **Notificação de comentário fica pra fase 2.** A tabela `Notification` existe, mas há dois descompassos com a entidade: `NotificationType` ([`INotificationType.ts`](../packages/src/types/INotificationType.ts)) não tem `"COMMENT"`, e `notificationEntity` tem `fromUserId` que **não existe** na tabela ([`notifications.prisma`](../apps/service/prisma/schema/notifications.prisma)).
- Fora de escopo, mas anotado: [`userReview.usecase.ts`](../apps/service/src/application/usecases/review/userReview.usecase.ts) importa de `@prisma/client/extension` e `generated/prisma/edge.js` em vez do client gerado, e atualiza `caregiver` usando `targetUserId` como `Caregiver.id` — provável bug.

## Ordem de execução

1. Entidades + DTOs em `packages/src` e exports no `index.ts`
2. `pnpm --filter @venC/packages build` — o alias `@packages` aponta pra `packages/dist`, então **nada compila no back sem esse build**
3. Schemas Prisma + `pnpm prisma migrate dev --name postagens_e_comentarios`
4. Repositories → use cases → controller → registro no `index.ts`

## Verificação

```bash
pnpm --filter @venC/packages build && pnpm --filter service build
```

Com a API no ar:

1. Login como OWNER → `POST /posts` → 201.
2. Login como CAREGIVER → `POST /posts/:id/comments` → 201; `GET /posts/:id` mostra o comentário e `commentsCount = 1`.
3. OWNER autor → comenta no próprio post e responde o cuidador com `parentId` → 201.
4. **Negativo:** OWNER **não autor** → `POST /posts/:id/comments` → 403.
5. **Negativo:** usuário qualquer → `PATCH /comments/:id` de comentário alheio → 403.
6. `npx prisma studio` pra conferir a auto-relação `parentId` e o `commentsCount`.
