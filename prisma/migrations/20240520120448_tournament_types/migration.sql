/*
  Warnings:

  - You are about to drop the column `tournamentId` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Tournament` table. All the data in the column will be lost.
  - Added the required column `matchType` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tournamentType` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TournamentType" AS ENUM ('CUP', 'LEAGUE');

-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_tournamentId_fkey";

-- AlterTable
ALTER TABLE "Match" DROP COLUMN "tournamentId",
ADD COLUMN     "groupId" TEXT,
ADD COLUMN     "stageId" TEXT;

-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "type",
ADD COLUMN     "matchType" "MatchType" NOT NULL,
ADD COLUMN     "tournamentType" "TournamentType" NOT NULL;

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "tournamentId" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stage" (
    "id" TEXT NOT NULL,
    "tournamentId" TEXT NOT NULL,
    "step" INTEGER NOT NULL,

    CONSTRAINT "Stage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GroupToTeam" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GroupToTeam_AB_unique" ON "_GroupToTeam"("A", "B");

-- CreateIndex
CREATE INDEX "_GroupToTeam_B_index" ON "_GroupToTeam"("B");

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stage" ADD CONSTRAINT "Stage_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "Stage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupToTeam" ADD CONSTRAINT "_GroupToTeam_A_fkey" FOREIGN KEY ("A") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupToTeam" ADD CONSTRAINT "_GroupToTeam_B_fkey" FOREIGN KEY ("B") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
