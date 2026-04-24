//careviger

import { Prisma } from "../generated/prisma/index.js";

export type CaregiverWithAddress = Prisma.CaregiverGetPayload<{
  include: { address: true };
}>;

//owner
// prisma/types/owner.ts

export type OwnerWithAddress = Prisma.OwnerProfileGetPayload<{
  include: { address: true };
}>;
