import { PlayerService } from 'src/player/player.service';
import { PrismaService } from 'src/prisma.service';
import { TournamentService } from 'src/tournament/tournament.service';
export declare class SeederService {
    private prisma;
    private playerService;
    private tournamentService;
    private usedNames;
    constructor(prisma: PrismaService, playerService: PlayerService, tournamentService: TournamentService);
    seed(): Promise<void>;
}
