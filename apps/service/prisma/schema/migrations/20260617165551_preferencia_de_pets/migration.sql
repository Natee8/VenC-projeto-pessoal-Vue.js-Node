-- CreateTable
CREATE TABLE "CaregiverPetPreference" (
    "id" SERIAL NOT NULL,
    "caregiverId" INTEGER NOT NULL,
    "animalType" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "minSize" TEXT,
    "maxSize" TEXT,
    "accepted" BOOLEAN NOT NULL,
    "notes" TEXT,

    CONSTRAINT "CaregiverPetPreference_pkey" PRIMARY KEY ("id")
);
