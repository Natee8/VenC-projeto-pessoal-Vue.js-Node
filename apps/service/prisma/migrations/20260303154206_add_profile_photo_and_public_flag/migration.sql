-- AlterTable
ALTER TABLE "Caregiver" ADD COLUMN     "isPublicProfile" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "UserAuth" ADD COLUMN     "profilePhotoUrl" TEXT DEFAULT '';
