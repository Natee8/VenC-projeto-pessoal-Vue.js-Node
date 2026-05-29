/*
  Warnings:

  - You are about to drop the column `createdAt` on the `ServiceOffer` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `ServiceOffer` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ServiceOffer` table. All the data in the column will be lost.
  - Added the required column `serviceId` to the `ServiceOffer` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ReviewTargetRole" AS ENUM ('OWNER', 'CAREGIVER');

-- AlterTable
ALTER TABLE "ServiceOffer" DROP COLUMN "createdAt",
DROP COLUMN "type",
DROP COLUMN "updatedAt",
ADD COLUMN     "serviceId" INTEGER NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "serviceOfferId" INTEGER,
    "reviewerUserId" INTEGER NOT NULL,
    "targetUserId" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Review_targetUserId_createdAt_idx" ON "Review"("targetUserId", "createdAt");

-- CreateIndex
CREATE INDEX "Review_reviewerUserId_idx" ON "Review"("reviewerUserId");

-- CreateIndex
CREATE UNIQUE INDEX "Review_reviewerUserId_targetUserId_serviceOfferId_key" ON "Review"("reviewerUserId", "targetUserId", "serviceOfferId");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_serviceOfferId_fkey" FOREIGN KEY ("serviceOfferId") REFERENCES "ServiceOffer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_reviewerUserId_fkey" FOREIGN KEY ("reviewerUserId") REFERENCES "UserAuth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_targetUserId_fkey" FOREIGN KEY ("targetUserId") REFERENCES "UserAuth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceOffer" ADD CONSTRAINT "ServiceOffer_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
