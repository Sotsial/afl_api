/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MatchStatus" AS ENUM ('NotStarted', 'Pending', 'Completed');

-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "date" TIMESTAMP(3),
ADD COLUMN     "status" "MatchStatus" NOT NULL DEFAULT 'NotStarted';

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "isCaptain" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
