import { PrismaClient } from "../../../generated/prisma/index.js";

/**
 * Cliente Prisma único da aplicação.
 *
 * Cada `new PrismaClient()` abre o seu próprio pool de conexões. Antes disso
 * existir, controllers e repositories instanciavam o cliente por conta própria
 * — eram 12 pools concorrendo pelo limite de conexões do Postgres.
 *
 * Controllers importam daqui e injetam nos repositories; nenhum repository
 * instancia o cliente sozinho.
 */
export const prisma = new PrismaClient();
