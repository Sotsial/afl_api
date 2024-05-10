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
exports.MatchService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const utils_1 = require("../utils/utils");
let MatchService = class MatchService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createMatchDto) {
        const tournament = await this.prisma.tournament.findUniqueOrThrow({
            where: { id: createMatchDto.tournamentId },
        });
        const teamIds = createMatchDto.teams;
        const teams = await this.prisma.team.findMany({
            where: { id: { in: teamIds } },
        });
        if (teams.length !== teamIds.length) {
            throw new common_1.BadRequestException('Указаны неверные идентификаторы команды. Все команды должны существовать');
        }
        const match = await this.prisma.match.create({
            data: {
                teams: { connect: teams },
                tournament: { connect: tournament },
                matchApplications: {
                    createMany: { data: teams.map((team) => ({ teamId: team.id })) },
                },
                round: createMatchDto.round,
            },
        });
        return match;
    }
    async createMany({ matches, tournamentId, }) {
        const matchesData = await Promise.all(matches.map(async (el) => {
            return {
                ...el,
                teamIds: el.teams,
                tournamentId,
                round: el.round,
            };
        }));
        try {
            await this.prisma.$transaction(async (tx) => {
                for (const match of matchesData) {
                    await tx.match.create({
                        data: {
                            teams: { connect: match.teamIds.flatMap((el) => ({ id: el })) },
                            tournament: { connect: { id: tournamentId } },
                            matchApplications: {
                                createMany: {
                                    data: match.teams.map((team) => ({ teamId: team })),
                                },
                            },
                            round: match.round,
                        },
                    });
                }
                return { message: 'Жеребьевка турнира успешно создана' };
            });
        }
        catch {
            throw new common_1.BadRequestException('Ошибка при жеребьевки турнира');
        }
    }
    async findList(query) {
        const { pageSize = 10, current = 1, userId } = query;
        const pageNumber = Math.max(1, current);
        const skip = (pageNumber - 1) * pageSize;
        const take = +pageSize;
        let user;
        if (userId) {
            user = await this.prisma.user.findUnique({
                where: {
                    id: query.userId,
                },
                select: {
                    player: {
                        select: {
                            teamId: true,
                        },
                    },
                },
            });
        }
        const results = await this.prisma.match.findMany({
            where: {
                teams: {
                    some: {
                        id: user?.player?.teamId,
                    },
                },
            },
            take,
            skip,
            include: {
                teams: true,
                tournament: true,
            },
            orderBy: [{ status: 'desc' }, { date: 'asc' }],
        });
        const totalCount = await this.prisma.match.count();
        return {
            data: results,
            page: pageNumber,
            pageSize: pageSize,
            total: totalCount,
        };
    }
    async findAll({ limit = 100, status, teamId, playerId, }) {
        const where = {};
        if (status) {
            where.status = { in: status.split(',') };
        }
        if (teamId) {
            where.teams = { some: { id: teamId } };
        }
        if (playerId) {
            where.matchApplications = {
                some: { players: { some: { id: playerId } } },
            };
        }
        const matches = await this.prisma.match.findMany({
            include: {
                teams: {
                    select: { id: true, name: true },
                },
                matchTimeline: {
                    where: { type: 'GOAL' },
                    select: { teamId: true },
                },
            },
            where,
            orderBy: [{ status: 'desc' }, { date: 'asc' }],
            take: +limit,
        });
        matches.forEach((match) => {
            match.teams.forEach((team) => {
                team['goals'] = match.matchTimeline.reduce((acc, el) => (el.teamId === team.id ? acc + 1 : acc), 0);
            });
        });
        return matches;
    }
    async findOne(id) {
        const match = await this.prisma.match.findUnique({
            where: { id },
            include: {
                teams: {
                    select: { id: true, name: true },
                },
                matchApplications: {
                    include: {
                        players: true,
                        team: { select: { id: true, name: true } },
                    },
                },
                matchTimeline: {
                    where: { type: 'GOAL' },
                    select: { teamId: true },
                },
            },
        });
        if (match && match.teams) {
            match.teams.forEach((team) => {
                team['goals'] = match.matchTimeline.reduce((acc, el) => (el.teamId === team.id ? acc + 1 : acc), 0);
            });
        }
        return match;
    }
    async update(id, updateMatchDto) {
        const { date, place, firstReferee, mainReferee, secondReferee } = updateMatchDto;
        await this.prisma.match.update({
            where: {
                id,
            },
            data: {
                date,
                place,
                mainReferee,
                firstReferee,
                secondReferee,
            },
        });
        return { message: 'Матч сохранен' };
    }
    async updateApplication(UpdateMatchApplicationDto) {
        const { match } = await this.prisma.matchApplication.findUnique({
            where: {
                id: UpdateMatchApplicationDto.id,
            },
            select: {
                match: true,
            },
        });
        if (match.status !== 'NotStarted') {
            throw new common_1.BadRequestException('Прием заявок завершен');
        }
        const players = await this.prisma.player.findMany({
            where: {
                id: {
                    in: UpdateMatchApplicationDto.playerIds,
                },
            },
        });
        await this.prisma.matchApplication.update({
            where: { id: UpdateMatchApplicationDto.id },
            data: {
                players: {
                    set: players.map((player) => ({ id: player.id })),
                },
                color: UpdateMatchApplicationDto.color,
            },
        });
        return { message: 'Заявка создана' };
    }
    async updateStage(id) {
        const { status, half } = await this.prisma.match.findUnique({
            where: {
                id,
            },
        });
        if (status === 'NotStarted')
            return this.preparingMatch(id);
        else if (status === 'Preparation')
            return this.startMatch(id);
        else if (status === 'Pending' && half === 1)
            return this.halfTimeMatch(id, 'start');
        else if (status === 'Break')
            return this.halfTimeMatch(id, 'end');
        else if (status === 'Pending' && half === 2)
            return this.endMatch(id);
    }
    async preparingMatch(id) {
        const match = await this.prisma.match.findUnique({
            where: {
                id,
            },
            include: {
                matchApplications: {
                    include: {
                        players: true,
                    },
                },
            },
        });
        const isInadequatePlayers = match.matchApplications.some((application) => application.players.length < 5);
        if (isInadequatePlayers)
            throw new common_1.BadRequestException('В заявке не хватает игроков');
        await this.prisma.match.update({
            where: { id },
            data: {
                status: { set: 'Preparation' },
            },
        });
    }
    async halfTimeMatch(id, status) {
        if (status === 'start') {
            await this.prisma.match.update({
                where: {
                    id,
                },
                data: {
                    half: 2,
                    status: 'Break',
                    time: 20,
                },
            });
            return { message: 'Перерыв' };
        }
        else if (status === 'end') {
            await this.prisma.match.update({
                where: {
                    id,
                },
                data: {
                    half: 2,
                    status: 'Pending',
                },
            });
            return { message: 'Второй тайм' };
        }
    }
    async startMatch(id) {
        const match = await this.prisma.match.findUnique({
            where: {
                id,
            },
            include: {
                matchApplications: {
                    include: {
                        players: true,
                    },
                },
            },
        });
        if (match.status === 'Pending' || match.status === 'Completed') {
            throw new common_1.BadRequestException('Матч стартовал');
        }
        await this.prisma.match.update({
            where: { id },
            data: {
                status: { set: 'Pending' },
            },
        });
        return { message: 'Матч стартовал' };
    }
    async updateTime() {
        return this.prisma.match.updateMany({
            where: { status: 'Pending' },
            data: {
                time: {
                    increment: 1,
                },
            },
        });
    }
    async changeTime(id, time) {
        return this.prisma.match.update({
            where: { id },
            data: {
                time,
            },
        });
    }
    async endMatch(id) {
        const match = await this.prisma.match.findUnique({
            where: {
                id,
            },
            include: {
                matchApplications: {
                    include: {
                        players: true,
                    },
                },
                matchTimeline: true,
                teams: true,
            },
        });
        const winningTeamId = (0, utils_1.defineWinner)(match);
        await this.prisma.match.update({
            where: { id },
            data: {
                status: { set: 'Completed' },
                winnerId: winningTeamId,
            },
        });
        return { message: 'Матч окончен' };
    }
    async createMatchEvent({ teamId, matchId, playerId, half, time, type, }) {
        return this.prisma.matchTimeline.create({
            data: {
                team: { connect: { id: teamId } },
                match: { connect: { id: matchId } },
                player: { connect: { id: playerId } },
                half,
                time,
                type,
            },
        });
    }
    async findMatchEvents(id) {
        return this.prisma.matchTimeline.findMany({
            where: {
                matchId: id,
            },
            include: {
                player: {
                    select: {
                        user: { select: { name: true } },
                    },
                },
            },
        });
    }
};
exports.MatchService = MatchService;
exports.MatchService = MatchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MatchService);
//# sourceMappingURL=match.service.js.map