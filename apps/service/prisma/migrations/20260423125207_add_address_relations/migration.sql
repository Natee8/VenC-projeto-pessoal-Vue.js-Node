-- DropForeignKey
ALTER TABLE "Caregiver" DROP CONSTRAINT "Caregiver_addressId_fkey";

-- DropForeignKey
ALTER TABLE "OwnerProfile" DROP CONSTRAINT "OwnerProfile_addressId_fkey";

-- AlterTable
ALTER TABLE "Caregiver" ALTER COLUMN "addressId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "OwnerProfile" ALTER COLUMN "addressId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "OwnerProfile" ADD CONSTRAINT "OwnerProfile_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caregiver" ADD CONSTRAINT "Caregiver_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;
