-- CreateEnum
CREATE TYPE "TournamentStatus" AS ENUM ('NotStarted', 'Pending', 'Completed');

-- AlterTable
ALTER TABLE "Tournament" ADD COLUMN     "status" "TournamentStatus" NOT NULL DEFAULT 'NotStarted';
