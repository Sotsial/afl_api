/*
  Warnings:

  - You are about to drop the column `halftime` on the `Match` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Match" DROP COLUMN "halftime",
ADD COLUMN     "half" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "MatchTimeline" ADD COLUMN     "half" INTEGER NOT NULL DEFAULT 1;
