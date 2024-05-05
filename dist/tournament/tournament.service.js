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
exports.TournamentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const match_service_1 = require("../match/match.service");
let TournamentService = class TournamentService {
    constructor(prisma, matchService) {
        this.prisma = prisma;
        this.matchService = matchService;
    }
    async create(createTournamentDto) {
        const tour = await this.prisma.tournament.create({
            data: createTournamentDto,
        });
        return { message: `Турнир ${tour.name}  создан` };
    }
    async findList(query) {
        const { pageSize = 10, current = 1 } = query;
        const pageNumber = Math.max(1, current);
        const skip = (pageNumber - 1) * pageSize;
        const take = +pageSize;
        const results = await this.prisma.tournament.findMany({
            take,
            skip,
        });
        const totalCount = await this.prisma.tournament.count();
        return {
            data: results,
            page: pageNumber,
            pageSize: pageSize,
            total: totalCount,
        };
    }
    findAll() {
        return this.prisma.tournament.findMany();
    }
    async getDictionary() {
        const list = await this.prisma.tournament.findMany({
            where: {
                status: {
                    not: 'NotStarted',
                },
            },
            select: {
                id: true,
                name: true,
            },
        });
        return list.map((el) => ({ label: el.name, value: el.id }));
    }
    async findOne(id) {
        const tournament = await this.prisma.tournament.findUnique({
            where: { id },
            include: {
                teamIds: true,
            },
        });
        return {
            ...tournament,
            teamIds: tournament.teamIds.flatMap((el) => el.id),
        };
    }
    update(id, updateTournamentDto) {
        return this.prisma.tournament.update({
            where: {
                id,
            },
            data: {
                ...updateTournamentDto,
                teamIds: {
                    set: updateTournamentDto.teamIds?.map((team) => ({
                        id: team,
                    })),
                },
            },
        });
    }
    async getTable(id) {
        const tournament = await this.prisma.tournament.findUnique({
            where: { id },
            select: {
                match: {
                    where: {
                        status: 'Completed',
                    },
                    include: {
                        matchTimeline: {
                            where: {
                                type: 'GOAL',
                            },
                        },
                        teams: true,
                    },
                },
                teamIds: true,
            },
        });
        const table = tournament.teamIds.map((team) => {
            const myMathes = tournament.match.filter((match) => match.teams.some((el) => el.id === team.id));
            const results = countGoalsAndResultsWithPoints(myMathes, team.id);
            return { ...team, ...results };
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
    }
    async getApplications({ tournamentId, teamId, }) {
        if (teamId) {
            const res = await this.prisma.tournamentApplication.findFirst({
                where: {
                    tournamentId,
                    teamId,
                },
                include: {
                    players: true,
                    team: {
                        select: { name: true },
                    },
                },
            });
            return res ? [res] : [];
        }
        else {
            return await this.prisma.tournamentApplication.findMany({
                where: {
                    tournamentId,
                    teamId,
                },
                include: {
                    players: true,
                    team: {
                        select: { name: true },
                    },
                },
            });
        }
    }
    async createApplication({ playerIds, teamId, tournamentId, }) {
        if (!tournamentId || !playerIds || !teamId) {
            throw new common_1.BadRequestException('Необходимые поля не заполнены');
        }
        const [tournament, players, team] = await Promise.all([
            this.prisma.tournament.findUnique({
                where: { id: tournamentId },
            }),
            this.prisma.player.findMany({
                where: { id: { in: playerIds } },
            }),
            this.prisma.team.findUnique({
                where: { id: teamId },
            }),
        ]);
        if (!tournament) {
            throw new common_1.BadRequestException('Турнир не найден');
        }
        else if (tournament.status !== 'NotStarted') {
            throw new common_1.BadRequestException('Прием заявок завершен');
        }
        if (players.length !== playerIds.length) {
            throw new common_1.BadRequestException('Не все указанные игроки найдены');
        }
        if (!team)
            throw new common_1.BadRequestException('Команда не найдена');
        try {
            await this.prisma.tournamentApplication.create({
                data: {
                    players: { connect: players.map((player) => ({ id: player.id })) },
                    team: { connect: { id: team.id } },
                    tournament: { connect: { id: tournament.id } },
                },
            });
            return { message: 'Заявка успешно подана' };
        }
        catch (error) {
            throw new common_1.BadRequestException('Ошибка при создании заявки');
        }
    }
    async updateApplication({ playerIds, id, }) {
        const players = await this.prisma.player.findMany({
            where: { id: { in: playerIds } },
        });
        await this.prisma.tournamentApplication.update({
            where: {
                id,
            },
            data: {
                players: {
                    set: players,
                },
            },
        });
        return { message: 'Заявка успешно подана' };
    }
    async createTours(tournamentId) {
        const existingMatch = await this.prisma.match.findFirst({
            where: { tournamentId },
        });
        if (existingMatch) {
            throw new common_1.BadRequestException('Tournament draw has already been generated.');
        }
        const tournament = await this.prisma.tournament.findUnique({
            where: { id: tournamentId },
            select: { teamIds: true },
        });
        if (!tournament) {
            throw new common_1.BadRequestException('Tournament not found.');
        }
        const teamIds = tournament.teamIds.flatMap((team) => team.id);
        if (teamIds.length < 2) {
            throw new common_1.BadRequestException('Minimum 2 teams required for tournament.');
        }
        if (!!(teamIds.length % 2)) {
            throw new common_1.BadRequestException('Нечетное кол-во команд');
        }
        function generateRoundRobinSchedule(teams) {
            const numTeams = teams.length;
            const schedule = [];
            if (numTeams % 2 !== 0) {
                teams.push('Dummy');
            }
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
            teams: [match[0], match[1]],
            round: index + 1,
        })));
        try {
            await this.matchService.createMany({
                tournamentId,
                matches: matchesToCreate,
            });
            await this.prisma.tournament.update({
                where: { id: tournamentId },
                data: { status: { set: 'Pending' } },
            });
            return { message: 'Жеребьевка турнира успешно создана' };
        }
        catch (error) {
            return error;
        }
    }
};
exports.TournamentService = TournamentService;
exports.TournamentService = TournamentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        match_service_1.MatchService])
], TournamentService);
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
//# sourceMappingURL=tournament.service.js.map