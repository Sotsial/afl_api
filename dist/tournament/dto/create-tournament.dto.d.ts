import { MatchType, TournamentType } from '@prisma/client';
export declare class CreateTournamentDto {
    date: Date;
    name: string;
    matchType: MatchType;
    tournamentType: TournamentType;
}
