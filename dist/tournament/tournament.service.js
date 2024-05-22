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
const group_service_1 = require("../group/group.service");
const match_service_1 = require("../match/match.service");
let TournamentService = class TournamentService {
    constructor(prisma, groupService, matchService) {
        this.prisma = prisma;
        this.groupService = groupService;
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
                tournamentType: true,
            },
        });
        return list.map((el) => ({
            label: el.name,
            value: el.id,
            type: el.tournamentType,
        }));
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
                groups: {
                    select: {
                        match: {
                            where: {
                                status: { notIn: ['NotStarted', 'Suspended', 'Preparation'] },
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
                },
                teamIds: true,
                tournamentType: true,
            },
        });
        if (tournament.tournamentType === 'LEAGUE') {
            const matches = tournament.groups.flatMap((el) => el.match);
            return [(0, group_service_1.groupCalculate)({ match: matches, teamIds: tournament.teamIds })];
        }
        else {
            const group = tournament.groups.map((el) => {
                return (0, group_service_1.groupCalculate)({ match: el.match, teamIds: el.teamIds });
            });
            return group;
        }
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
        const tournament = await this.prisma.tournament.findUnique({
            where: { id: tournamentId },
            select: { teamIds: true, status: true, tournamentType: true },
        });
        if (!tournament) {
            throw new common_1.BadRequestException('Tournament not found.');
        }
        if (tournament.status !== 'NotStarted') {
            throw new common_1.BadRequestException('Tournament pending.');
        }
        const teamIds = tournament.teamIds.map((team) => team.id);
        if (teamIds.length < 2) {
            throw new common_1.BadRequestException('Minimum 2 teams required for tournament.');
        }
        if (!!(teamIds.length % 2)) {
            throw new common_1.BadRequestException('Нечетное кол-во команд');
        }
        try {
            if (tournament.tournamentType === 'LEAGUE') {
                await this.groupService.create({
                    teamIds,
                    tournamentId,
                });
            }
            else if (tournament.tournamentType === 'CUP') {
                if (teamIds.length !== 16) {
                    throw new common_1.BadRequestException('Команд должно быть 16');
                }
                const teams = Array.from({ length: teamIds.length / 4 }, (_, index) => teamIds.slice(index * 4, index * 4 + 4));
                for (let i = 0; i < 4; i++) {
                    await this.groupService.create({
                        teamIds: teams[i],
                        tournamentId,
                    });
                }
            }
            await this.prisma.tournament.update({
                where: { id: tournamentId },
                data: { status: { set: 'Pending' } },
            });
            return { message: 'Жеребьевка турнира успешно создана' };
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async updateStage(id) {
        const tournament = await this.prisma.tournament.findUnique({
            where: {
                id,
            },
            select: {
                status: true,
                tournamentType: true,
                matchType: true,
                groups: {
                    select: {
                        match: {
                            where: {
                                status: { notIn: ['NotStarted', 'Suspended', 'Preparation'] },
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
                },
            },
        });
        const matches = tournament.groups.flatMap((el) => el.match);
        if (tournament.status === 'Completed' &&
            matches.length <= 0 &&
            matches.some((el) => el.status !== 'Completed'))
            return;
        if (tournament.tournamentType === 'LEAGUE') {
            await this.tournamentEnd(id, (0, group_service_1.groupCalculate)(tournament.groups[0])[0].id);
            return;
        }
        else if (tournament.tournamentType === 'CUP') {
            const isPlayOff = matches.some((el) => !el.groupId);
            let teams = [];
            const minStepItem = matches.reduce((min, item) => {
                return item.step && item.step < min ? item.step : min;
            }, 4);
            if (!isPlayOff) {
                teams = tournament.groups.flatMap((el) => (0, group_service_1.groupCalculate)(el)
                    .slice(0, 2)
                    .map((team) => team.id));
            }
            else {
                teams = await this.prisma.match
                    .findMany({
                    where: { tournamentId: id, step: minStepItem },
                    orderBy: [{ round: 'asc' }],
                    select: {
                        winnerId: true,
                    },
                })
                    .then((el) => el.map((t) => t.winnerId));
            }
            const mathesStep = [];
            for (let i = 0; i < teams.length; i += 2) {
                mathesStep.push({
                    teamIds: [teams[i], teams[i + 1]],
                    round: i / 2 + 1,
                    step: minStepItem - 1,
                });
            }
        }
    }
    async tournamentEnd(id, winnerId) {
        await this.prisma.tournament.update({
            where: {
                id,
            },
            data: {
                status: 'Completed',
                winner: {
                    connect: { id: winnerId },
                },
            },
        });
    }
};
exports.TournamentService = TournamentService;
exports.TournamentService = TournamentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        group_service_1.GroupService,
        match_service_1.MatchService])
], TournamentService);
//# sourceMappingURL=tournament.service.js.map