import type { Prisma } from "apps/service/src/generated/prisma/index.js";

export type OwnerProfileWithAddress = Prisma.OwnerProfileGetPayload<{
  include: {
    address: true;
  };
}>;
