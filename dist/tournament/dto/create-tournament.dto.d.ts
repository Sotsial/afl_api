import { MatchType, TournamentType } from '@prisma/client';
export declare class CreateTournamentDto {
    name: string;
    matchType: MatchType;
    tournamentType: TournamentType;
}
