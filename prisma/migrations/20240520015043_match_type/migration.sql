/*
  Warnings:

  - Added the required column `type` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MatchType" AS ENUM ('FUTSAL', 'MINI');

-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "type" "MatchType" NOT NULL;

-- AlterTable
ALTER TABLE "Tournament" ADD COLUMN     "type" "MatchType" NOT NULL;
