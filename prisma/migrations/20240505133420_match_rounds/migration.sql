/*
  Warnings:

  - Added the required column `round` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "round" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Tournament" ADD COLUMN     "startDate" TIMESTAMP(3);
