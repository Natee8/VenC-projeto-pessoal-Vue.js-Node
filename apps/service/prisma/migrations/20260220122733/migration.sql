/*
  Warnings:

  - You are about to drop the `UserProfile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[cpf]` on the table `UserAuth` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `birthDate` to the `UserAuth` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `UserAuth` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserProfile" DROP CONSTRAINT "UserProfile_userId_fkey";

-- AlterTable
ALTER TABLE "UserAuth" ADD COLUMN     "birthDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "cpf" TEXT NOT NULL;

-- DropTable
DROP TABLE "UserProfile";

-- CreateTable
CREATE TABLE "OwnerProfile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "searchRadiusKm" DOUBLE PRECISION,
    "pets" JSONB,
    "address" TEXT,
    "phone" TEXT,

    CONSTRAINT "OwnerProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Caregiver" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "offersHosting" BOOLEAN NOT NULL,
    "serviceRadiusKm" DOUBLE PRECISION NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "address" TEXT,

    CONSTRAINT "Caregiver_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OwnerProfile_userId_key" ON "OwnerProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Caregiver_userId_key" ON "Caregiver"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserAuth_cpf_key" ON "UserAuth"("cpf");

-- AddForeignKey
ALTER TABLE "OwnerProfile" ADD CONSTRAINT "OwnerProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserAuth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caregiver" ADD CONSTRAINT "Caregiver_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserAuth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
