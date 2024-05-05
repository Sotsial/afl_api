/*
  Warnings:

  - You are about to drop the column `date` on the `TournamentApplication` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[capitanId]` on the table `Team` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "capitanId" TEXT;

-- AlterTable
ALTER TABLE "TournamentApplication" DROP COLUMN "date";

-- CreateIndex
CREATE UNIQUE INDEX "Team_capitanId_key" ON "Team"("capitanId");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_capitanId_fkey" FOREIGN KEY ("capitanId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;
