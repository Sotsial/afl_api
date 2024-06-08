"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupCalculate = exports.GroupService = void 0;
const common_1 = require("@nestjs/common");
const match_service_1 = require("../match/match.service");
const prisma_service_1 = require("../prisma.service");
const utils_1 = require("../utils/utils");
let GroupService = class GroupService {
    constructor(prisma, matchService) {
        this.prisma = prisma;
        this.matchService = matchService;
    }
    async create({ tournamentId, teamIds, winnerCount, }) {
        const tournament = await this.prisma.tournament.findUnique({
            where: { id: tournamentId },
            select: { teams: true, matchType: true },
        });
        if (!tournament) {
            throw new common_1.BadRequestException('Tournament not found.');
        }
        if (teamIds.length < 2) {
            throw new common_1.BadRequestException('Minimum 2 teams required for group.');
        }
        if (!!(teamIds.length % 2)) {
            throw new common_1.BadRequestException('Нечетное кол-во команд');
        }
        function generateRoundRobinSchedule(teams) {
            const numTeams = teams.length;
            const schedule = [];
            const numRounds = numTeams - 1;
            const halfNumTeams = numTeams / 2;
            for (let round = 0; round < numRounds; round++) {
                const roundSchedule = [];
                for (let i = 0; i < halfNumTeams; i++) {
                    const match = [teams[i], teams[numTeams - i - 1]];
                    roundSchedule.push(match);
                }
                schedule.push(roundSchedule);
                teams.splice(1, 0, teams.pop());
            }
            return schedule;
        }
        const tourList = generateRoundRobinSchedule(teamIds);
        const matchesToCreate = tourList.flatMap((roundMatches, index) => roundMatches.map((match) => ({
            teamIds: [match[0], match[1]],
            round: index + 1,
        })));
        try {
            const group = await this.prisma.group.create({
                data: {
                    tournamentId,
                    teams: { connect: teamIds.map((id) => ({ id })) },
                    winnerCount,
                },
            });
            return await this.matchService.createMany({
                groupId: group.id,
                matches: matchesToCreate,
                tournamentId,
                type: tournament.matchType,
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Ошибка при создании группы');
        }
    }
};
exports.GroupService = GroupService;
exports.GroupService = GroupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        match_service_1.MatchService])
], GroupService);
const groupCalculate = (group) => {
    const mathes = group.match.filter((el) => !['NotStarted', 'Suspended', 'Preparation'].includes(el.status));
    const table = group.teams.map((team) => {
        const myMathes = mathes.filter((match) => match.teams.some((el) => el.id === team.id));
        myMathes.forEach((el) => {
            if (el.status === 'Pending' || el.status === 'Break') {
                el.winnerId = (0, utils_1.defineWinner)(el);
            }
        });
        const liveMatch = myMathes.find((el) => el.status === 'Pending' || el.status === 'Break')?.id;
        const results = countGoalsAndResultsWithPoints(myMathes, team.id);
        return { ...team, ...results, liveMatch };
    });
    table.sort((a, b) => {
        if (a.points < b.points)
            return 1;
        if (a.points > b.points)
            return -1;
        if (a.difference < b.difference)
            return 1;
        if (a.difference > b.difference)
            return -1;
        return 0;
    });
    return table;
};
exports.groupCalculate = groupCalculate;
const countGoalsAndResultsWithPoints = (matches, teamId) => {
    let goalsScored = 0;
    let goalsConceded = 0;
    let wins = 0;
    let draws = 0;
    let losses = 0;
    let points = 0;
    for (const match of matches) {
        for (const event of match.matchTimeline) {
            if (event.type === 'GOAL') {
                if (event.teamId === teamId) {
                    goalsScored++;
                }
                else {
                    goalsConceded++;
                }
            }
        }
        if (match.winnerId === teamId) {
            wins++;
            points += 3;
        }
        else if (match.winnerId === null) {
            draws++;
            points += 1;
        }
        else {
            losses++;
        }
    }
    return {
        scored: goalsScored,
        conceded: goalsConceded,
        difference: goalsScored - goalsConceded,
        matches: matches.length,
        wins: wins,
        draws: draws,
        losses: losses,
        points: points,
    };
};
//# sourceMappingURL=group.service.js.map