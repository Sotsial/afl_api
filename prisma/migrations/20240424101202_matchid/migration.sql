/*
  Warnings:

  - You are about to drop the column `matchID` on the `MatchTimeline` table. All the data in the column will be lost.
  - You are about to drop the column `playerID` on the `MatchTimeline` table. All the data in the column will be lost.
  - Added the required column `matchId` to the `MatchTimeline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playerId` to the `MatchTimeline` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MatchTimeline" DROP CONSTRAINT "MatchTimeline_matchID_fkey";

-- DropForeignKey
ALTER TABLE "MatchTimeline" DROP CONSTRAINT "MatchTimeline_playerID_fkey";

-- AlterTable
ALTER TABLE "MatchTimeline" DROP COLUMN "matchID",
DROP COLUMN "playerID",
ADD COLUMN     "matchId" TEXT NOT NULL,
ADD COLUMN     "playerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "MatchTimeline" ADD CONSTRAINT "MatchTimeline_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchTimeline" ADD CONSTRAINT "MatchTimeline_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
