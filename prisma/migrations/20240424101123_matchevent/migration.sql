/*
  Warnings:

  - You are about to drop the column `Type` on the `MatchTimeline` table. All the data in the column will be lost.
  - Added the required column `type` to the `MatchTimeline` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MatchTimeline" DROP COLUMN "Type",
ADD COLUMN     "type" "MatchEvent" NOT NULL;
