/*
  Warnings:

  - The primary key for the `Team` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tournament` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `TournamentApplication` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `teamId` on table `TournamentApplication` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tournamentId` on table `TournamentApplication` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "TournamentApplication" DROP CONSTRAINT "TournamentApplication_teamId_fkey";

-- DropForeignKey
ALTER TABLE "TournamentApplication" DROP CONSTRAINT "TournamentApplication_tournamentId_fkey";

-- AlterTable
ALTER TABLE "Team" DROP CONSTRAINT "Team_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Team_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Team_id_seq";

-- AlterTable
ALTER TABLE "Tournament" DROP CONSTRAINT "Tournament_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Tournament_id_seq";

-- AlterTable
ALTER TABLE "TournamentApplication" DROP CONSTRAINT "TournamentApplication_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "teamId" SET NOT NULL,
ALTER COLUMN "teamId" SET DATA TYPE TEXT,
ALTER COLUMN "tournamentId" SET NOT NULL,
ALTER COLUMN "tournamentId" SET DATA TYPE TEXT,
ADD CONSTRAINT "TournamentApplication_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "TournamentApplication_id_seq";

-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PlayerToTournamentApplication" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PlayerToTournamentApplication_AB_unique" ON "_PlayerToTournamentApplication"("A", "B");

-- CreateIndex
CREATE INDEX "_PlayerToTournamentApplication_B_index" ON "_PlayerToTournamentApplication"("B");

-- AddForeignKey
ALTER TABLE "TournamentApplication" ADD CONSTRAINT "TournamentApplication_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentApplication" ADD CONSTRAINT "TournamentApplication_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlayerToTournamentApplication" ADD CONSTRAINT "_PlayerToTournamentApplication_A_fkey" FOREIGN KEY ("A") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlayerToTournamentApplication" ADD CONSTRAINT "_PlayerToTournamentApplication_B_fkey" FOREIGN KEY ("B") REFERENCES "TournamentApplication"("id") ON DELETE CASCADE ON UPDATE CASCADE;
