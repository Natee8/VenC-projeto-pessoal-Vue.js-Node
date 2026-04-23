/*
  Warnings:

  - You are about to drop the column `addressId` on the `Caregiver` table. All the data in the column will be lost.
  - You are about to drop the column `addressId` on the `OwnerProfile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ownerProfileId]` on the table `Address` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[caregiverId]` on the table `Address` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Caregiver" DROP CONSTRAINT "Caregiver_addressId_fkey";

-- DropForeignKey
ALTER TABLE "OwnerProfile" DROP CONSTRAINT "OwnerProfile_addressId_fkey";

-- DropIndex
DROP INDEX "Caregiver_addressId_key";

-- DropIndex
DROP INDEX "OwnerProfile_addressId_key";

-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "caregiverId" INTEGER,
ADD COLUMN     "ownerProfileId" INTEGER;

-- AlterTable
ALTER TABLE "Caregiver" DROP COLUMN "addressId";

-- AlterTable
ALTER TABLE "OwnerProfile" DROP COLUMN "addressId";

-- CreateIndex
CREATE UNIQUE INDEX "Address_ownerProfileId_key" ON "Address"("ownerProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "Address_caregiverId_key" ON "Address"("caregiverId");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_ownerProfileId_fkey" FOREIGN KEY ("ownerProfileId") REFERENCES "OwnerProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_caregiverId_fkey" FOREIGN KEY ("caregiverId") REFERENCES "Caregiver"("id") ON DELETE SET NULL ON UPDATE CASCADE;
