/*
  Warnings:

  - You are about to drop the column `stageId` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the `Stage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_stageId_fkey";

-- DropForeignKey
ALTER TABLE "Stage" DROP CONSTRAINT "Stage_tournamentId_fkey";

-- AlterTable
ALTER TABLE "Match" DROP COLUMN "stageId",
ADD COLUMN     "step" INTEGER;

-- DropTable
DROP TABLE "Stage";
