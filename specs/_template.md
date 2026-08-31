# NNN — Nome da feature

**Status:** Rascunho
**Data:** AAAA-MM-DD

## Contexto

Que problema isso resolve e o que motivou a feature. O que já existe no sistema hoje que é relevante — inclusive código órfão ou meio-pronto que ninguém lembra.

## Decisão

A escolha de modelagem, em poucas linhas. Se alguma alternativa óbvia foi descartada, diga qual e por quê — isso é o que evita refazer a discussão daqui a três meses.

## Modelagem

Schema (Prisma), entidades em `packages/src`, DTOs. Só o que a decisão implica.

## Regras de negócio

Quem pode fazer o quê. Uma tabela por ator costuma resolver:

| Ator | Ação A | Ação B |
|---|---|---|
| OWNER | | |
| CAREGIVER | | |

Diga também **onde** a regra mora (entidade de domínio, use case, middleware).

## Camadas

Repository → use case → controller → rotas. Aponte o padrão existente que está sendo seguido, com link pro arquivo.

| Método | Rota | Regra |
|---|---|---|

## Pendências e dependências

O que a feature assume, o que fica pra depois, e problemas adjacentes que você notou mas não vai resolver aqui.

## Ordem de execução

1.
2.

## Verificação

Como saber que funcionou — o caminho feliz **e** os casos negativos que importam.
