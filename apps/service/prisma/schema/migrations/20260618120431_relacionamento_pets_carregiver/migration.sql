/*
  Warnings:

  - The `minSize` column on the `CaregiverPetPreference` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `maxSize` column on the `CaregiverPetPreference` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PetSize" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- AlterTable
ALTER TABLE "CaregiverPetPreference" DROP COLUMN "minSize",
ADD COLUMN     "minSize" "PetSize",
DROP COLUMN "maxSize",
ADD COLUMN     "maxSize" "PetSize";

-- AddForeignKey
ALTER TABLE "CaregiverPetPreference" ADD CONSTRAINT "CaregiverPetPreference_caregiverId_fkey" FOREIGN KEY ("caregiverId") REFERENCES "Caregiver"("id") ON DELETE CASCADE ON UPDATE CASCADE;
