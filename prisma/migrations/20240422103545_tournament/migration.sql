-- CreateTable
CREATE TABLE "Tournament" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TournamentApplication" (
    "id" SERIAL NOT NULL,
    "teamId" INTEGER,
    "tournamentId" INTEGER,

    CONSTRAINT "TournamentApplication_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TournamentApplication" ADD CONSTRAINT "TournamentApplication_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentApplication" ADD CONSTRAINT "TournamentApplication_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE SET NULL ON UPDATE CASCADE;
