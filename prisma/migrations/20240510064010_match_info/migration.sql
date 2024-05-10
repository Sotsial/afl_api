-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "firstReferee" TEXT,
ADD COLUMN     "mainReferee" TEXT,
ADD COLUMN     "secondReferee" TEXT;

-- AlterTable
ALTER TABLE "MatchApplication" ADD COLUMN     "color" TEXT;
