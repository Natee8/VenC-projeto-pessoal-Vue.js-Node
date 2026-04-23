import { Prisma } from "apps/service/src/generated/prisma/index.js";

export type CaregiverWithAddress = Prisma.CaregiverGetPayload<{
  include: { address: true };
}>;
