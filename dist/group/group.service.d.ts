import { MatchStatus, MatchTimeline, Team } from '@prisma/client';
import { MatchService } from 'src/match/match.service';
import { PrismaService } from 'src/prisma.service';
export declare class GroupService {
    private prisma;
    private matchService;
    constructor(prisma: PrismaService, matchService: MatchService);
    create({ tournamentId, teamIds, winnerCount, }: {
        tournamentId: string;
        teamIds: string[];
        winnerCount?: number;
    }): Promise<void>;
}
export declare const groupCalculate: (group: {
    teams: Team[];
    match: {
        id: string;
        teams: Team[];
        status: MatchStatus;
        winnerId: string;
        matchTimeline: MatchTimeline[];
    }[];
}) => {
    liveMatch: string;
    scored: number;
    conceded: number;
    difference: number;
    matches: any;
    wins: number;
    draws: number;
    losses: number;
    points: number;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    capitanId: string;
}[];
