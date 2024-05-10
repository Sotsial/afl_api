-- AlterEnum
ALTER TYPE "MatchStatus" ADD VALUE 'Suspended';

-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "halftime" BOOLEAN NOT NULL DEFAULT false;
