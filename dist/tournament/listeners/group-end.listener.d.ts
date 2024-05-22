import { TournamentService } from '../tournament.service';
export declare class GroupEndListener {
    private tournamentService;
    constructor(tournamentService: TournamentService);
    checkGroupMatches(tournamentId: any): void;
}
