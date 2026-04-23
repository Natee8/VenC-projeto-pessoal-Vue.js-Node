/*
  Warnings:

  - Made the column `addressId` on table `Caregiver` required. This step will fail if there are existing NULL values in that column.
  - Made the column `addressId` on table `OwnerProfile` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Caregiver" DROP CONSTRAINT "Caregiver_addressId_fkey";

-- DropForeignKey
ALTER TABLE "OwnerProfile" DROP CONSTRAINT "OwnerProfile_addressId_fkey";

-- AlterTable
ALTER TABLE "Caregiver" ALTER COLUMN "addressId" SET NOT NULL;

-- AlterTable
ALTER TABLE "OwnerProfile" ALTER COLUMN "addressId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "OwnerProfile" ADD CONSTRAINT "OwnerProfile_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caregiver" ADD CONSTRAINT "Caregiver_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
