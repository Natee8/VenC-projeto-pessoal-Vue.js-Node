/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Service` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[caregiverId,serviceId]` on the table `ServiceOffer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "description" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Service_name_key" ON "Service"("name");

-- CreateIndex
CREATE INDEX "ServiceOffer_serviceId_idx" ON "ServiceOffer"("serviceId");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceOffer_caregiverId_serviceId_key" ON "ServiceOffer"("caregiverId", "serviceId");
