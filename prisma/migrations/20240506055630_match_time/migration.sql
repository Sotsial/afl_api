-- AlterEnum
ALTER TYPE "MatchStatus" ADD VALUE 'Break';

-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "time" INTEGER NOT NULL DEFAULT 0;
