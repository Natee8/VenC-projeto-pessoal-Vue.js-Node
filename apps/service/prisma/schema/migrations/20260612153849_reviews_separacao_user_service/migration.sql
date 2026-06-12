/*
  Warnings:

  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_reviewerUserId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_serviceOfferId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_targetUserId_fkey";

-- AlterTable
ALTER TABLE "Caregiver" ADD COLUMN     "averageRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "reviewsCount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "OwnerProfile" ADD COLUMN     "averageRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "reviewsCount" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "Review";

-- DropEnum
DROP TYPE "ReviewTargetRole";

-- CreateTable
CREATE TABLE "ServiceReview" (
    "id" SERIAL NOT NULL,
    "serviceOfferId" INTEGER NOT NULL,
    "reviewerUserId" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ServiceReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserReview" (
    "id" SERIAL NOT NULL,
    "reviewerUserId" INTEGER NOT NULL,
    "targetUserId" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserReview_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ServiceReview_reviewerUserId_serviceOfferId_key" ON "ServiceReview"("reviewerUserId", "serviceOfferId");

-- CreateIndex
CREATE UNIQUE INDEX "UserReview_reviewerUserId_targetUserId_key" ON "UserReview"("reviewerUserId", "targetUserId");

-- CreateIndex
CREATE INDEX "Caregiver_averageRating_idx" ON "Caregiver"("averageRating");

-- CreateIndex
CREATE INDEX "OwnerProfile_averageRating_idx" ON "OwnerProfile"("averageRating");

-- AddForeignKey
ALTER TABLE "ServiceReview" ADD CONSTRAINT "ServiceReview_serviceOfferId_fkey" FOREIGN KEY ("serviceOfferId") REFERENCES "ServiceOffer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceReview" ADD CONSTRAINT "ServiceReview_reviewerUserId_fkey" FOREIGN KEY ("reviewerUserId") REFERENCES "UserAuth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserReview" ADD CONSTRAINT "UserReview_reviewerUserId_fkey" FOREIGN KEY ("reviewerUserId") REFERENCES "UserAuth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserReview" ADD CONSTRAINT "UserReview_targetUserId_fkey" FOREIGN KEY ("targetUserId") REFERENCES "UserAuth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
