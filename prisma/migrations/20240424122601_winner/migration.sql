/*
  Warnings:

  - You are about to drop the `_MatchToTeam` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_MatchToTeam" DROP CONSTRAINT "_MatchToTeam_A_fkey";

-- DropForeignKey
ALTER TABLE "_MatchToTeam" DROP CONSTRAINT "_MatchToTeam_B_fkey";

-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "winnerId" TEXT;

-- DropTable
DROP TABLE "_MatchToTeam";

-- CreateTable
CREATE TABLE "_participatingTeams" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_participatingTeams_AB_unique" ON "_participatingTeams"("A", "B");

-- CreateIndex
CREATE INDEX "_participatingTeams_B_index" ON "_participatingTeams"("B");

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_winnerId_fkey" FOREIGN KEY ("winnerId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_participatingTeams" ADD CONSTRAINT "_participatingTeams_A_fkey" FOREIGN KEY ("A") REFERENCES "Match"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_participatingTeams" ADD CONSTRAINT "_participatingTeams_B_fkey" FOREIGN KEY ("B") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
