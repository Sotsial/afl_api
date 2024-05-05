/*
  Warnings:

  - You are about to drop the column `matchID` on the `MatchApplication` table. All the data in the column will be lost.
  - You are about to drop the column `isCaptain` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Player` table. All the data in the column will be lost.
  - Added the required column `matchId` to the `MatchApplication` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MatchApplication" DROP CONSTRAINT "MatchApplication_matchID_fkey";

-- AlterTable
ALTER TABLE "MatchApplication" DROP COLUMN "matchID",
ADD COLUMN     "matchId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "isCaptain",
DROP COLUMN "name";

-- AddForeignKey
ALTER TABLE "MatchApplication" ADD CONSTRAINT "MatchApplication_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
