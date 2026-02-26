/*
  Warnings:

  - You are about to drop the column `pets` on the `OwnerProfile` table. All the data in the column will be lost.
  - Added the required column `address` to the `Caregiver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `OwnerProfile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `UserAuth` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Caregiver" DROP COLUMN "address",
ADD COLUMN     "address" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "OwnerProfile" DROP COLUMN "pets",
DROP COLUMN "address",
ADD COLUMN     "address" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "UserAuth" ADD COLUMN     "name" TEXT NOT NULL;
