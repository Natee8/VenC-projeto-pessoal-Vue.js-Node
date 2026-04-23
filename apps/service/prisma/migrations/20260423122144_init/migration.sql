-- CreateEnum
CREATE TYPE "State" AS ENUM ('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO');

-- CreateTable
CREATE TABLE "UserAuth" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "profilePhotoUrl" TEXT DEFAULT '',
    "birthDate" TIMESTAMP(3) NOT NULL,
    "cpf" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAuth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" "State" NOT NULL,
    "zipCode" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OwnerProfile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "searchRadiusKm" DOUBLE PRECISION,
    "addressId" INTEGER NOT NULL,
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
    "isPublicProfile" BOOLEAN NOT NULL DEFAULT true,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "addressId" INTEGER NOT NULL,

    CONSTRAINT "Caregiver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RefreshToken" (
    "token" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RefreshToken_pkey" PRIMARY KEY ("token")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAuth_email_key" ON "UserAuth"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserAuth_cpf_key" ON "UserAuth"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "OwnerProfile_userId_key" ON "OwnerProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "OwnerProfile_addressId_key" ON "OwnerProfile"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "Caregiver_userId_key" ON "Caregiver"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Caregiver_addressId_key" ON "Caregiver"("addressId");

-- AddForeignKey
ALTER TABLE "OwnerProfile" ADD CONSTRAINT "OwnerProfile_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OwnerProfile" ADD CONSTRAINT "OwnerProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserAuth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caregiver" ADD CONSTRAINT "Caregiver_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caregiver" ADD CONSTRAINT "Caregiver_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserAuth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserAuth"("id") ON DELETE CASCADE ON UPDATE CASCADE;
