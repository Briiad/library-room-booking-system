-- CreateTable
CREATE TABLE "History" (
    "id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_nim" TEXT NOT NULL,
    "user_mail" TEXT NOT NULL,
    "room_name" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);
