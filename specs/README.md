# Specs

Planos de feature do VenCá. Cada arquivo descreve **uma** feature: o problema, a decisão de modelagem e o caminho de implementação — antes do código existir.

Fica na raiz porque uma feature normalmente atravessa `packages/` (domínio), `apps/service` (API) e `apps/web` (UI). Não pertence a nenhum workspace sozinho.

## Convenção

Um arquivo por feature, numerado e em kebab-case:

```
specs/001-postagens-e-comentarios.md
specs/002-chat-tempo-real.md
```

O número é sequencial e nunca é reaproveitado — se uma spec for descartada, ela vira `Status: Descartado` e o número morre com ela. Assim dá pra referenciar "spec 001" numa PR ou commit sem ambiguidade.

Comece de [`_template.md`](_template.md).

## Status

Toda spec abre com um `Status:` no cabeçalho:

| Status | Significado |
|---|---|
| `Rascunho` | Ainda em discussão, pode mudar inteira |
| `Aprovado` | Decidido, pronto pra implementar |
| `Em andamento` | Código sendo escrito |
| `Implementado` | Entregue — a spec vira registro histórico da decisão |
| `Descartado` | Não vamos fazer. Mantém o arquivo com o motivo |

Uma spec `Implementado` **não é atualizada** para refletir mudanças posteriores no código. Ela registra o que foi decidido naquele momento e por quê. Mudança de rumo depois vira spec nova.

## O que entra numa spec

O que **não** dá pra ler direto do código:

- por que a feature existe e que problema resolve;
- as decisões de modelagem e as alternativas descartadas (com o motivo);
- as regras de negócio — quem pode fazer o quê;
- dependências e pendências que a feature assume.

O que **não** entra: implementação linha a linha, tutorial de API, ou qualquer coisa que o próprio código já diga melhor.

## Índice

| # | Feature | Status |
|---|---|---|
| [001](001-postagens-e-comentarios.md) | Postagens e comentários | Aprovado |
