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
const event_emitter_1 = require("@nestjs/event-emitter");
let MatchService = class MatchService {
    constructor(prisma, eventEmitter) {
        this.prisma = prisma;
        this.eventEmitter = eventEmitter;
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
                type: tournament.matchType,
                tournament: { connect: { id: createMatchDto.tournamentId } },
                matchApplications: {
                    createMany: { data: teams.map((team) => ({ teamId: team.id })) },
                },
                round: createMatchDto.round,
            },
        });
        return match;
    }
    async createMany({ matches, groupId, tournamentId, type, }) {
        try {
            await this.prisma.$transaction(async (tx) => {
                const createMatchPromises = matches.map((match) => {
                    const matchData = {
                        teams: { connect: match.teamIds.map((id) => ({ id })) },
                        tournament: { connect: { id: tournamentId } },
                        type,
                        matchApplications: {
                            createMany: {
                                data: match.teamIds.map((teamId) => ({ teamId })),
                            },
                        },
                        round: match.round,
                        step: match.step,
                    };
                    if (groupId) {
                        matchData['group'] = { connect: { id: groupId } };
                    }
                    return tx.match.create({
                        data: matchData,
                    });
                });
                await Promise.all(createMatchPromises);
                if (groupId) {
                    const group = await tx.group.findUnique({ where: { id: groupId } });
                    return group;
                }
            }, {
                maxWait: 10000,
                timeout: 20000,
            });
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException('Ошибка при создании матчей');
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
                    teamId: true,
                },
            });
        }
        const teamId = user?.teamId ?? undefined;
        const results = await this.prisma.match.findMany({
            where: {
                teams: {
                    some: {
                        id: teamId,
                    },
                },
            },
            take,
            skip,
            include: {
                teams: true,
                group: {
                    select: {
                        tournament: true,
                    },
                },
                tournament: {
                    select: { name: true },
                },
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
        const players = await this.prisma.user.findMany({
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
        const minPlayer = match.type === 'FUTSAL' ? 5 : 6;
        const isInadequatePlayers = match.matchApplications.some((application) => application.players.length < minPlayer);
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
        this.eventEmitter.emit('group.end', match.tournamentId);
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
                player: { select: { name: true } },
            },
        });
    }
    async autoPlayMatch(id) {
        const match = await this.prisma.match.findUnique({
            where: { id },
            select: { id: true, matchApplications: true, teams: true, step: true },
        });
        const matchId = match.id;
        for (const { id, teamId } of match.matchApplications) {
            const players = await this.prisma.user.findMany({
                where: { teamId },
                select: { id: true },
            });
            await this.updateApplication({
                id,
                color: 'red',
                playerIds: players.map((el) => el.id),
            });
        }
        await this.update(matchId, {
            date: new Date(),
            place: 'Сауран',
            firstReferee: 'firstReferee',
            mainReferee: 'mainReferee',
            secondReferee: 'secondReferee',
        });
        await this.preparingMatch(matchId);
        await this.startMatch(matchId);
        let randomTimes;
        if (match.step) {
            randomTimes = Math.floor(Math.random() * 3) * 2 + 1;
        }
        else {
            randomTimes = Math.floor(Math.random() * 6);
        }
        for (let i = 0; i < randomTimes; i++) {
            const randomIndex = Math.floor(Math.random() * 2);
            const randomTeam = match.teams[randomIndex];
            const players = await this.prisma.user.findMany({
                where: {
                    teamId: randomTeam.id,
                    matchApplications: {
                        some: { id: { in: match.matchApplications.map((el) => el.id) } },
                    },
                },
                select: { id: true },
            });
            const randomPlayer = players[Math.floor(Math.random() * players.length)];
            await this.createMatchEvent({
                half: 1,
                matchId,
                type: 'GOAL',
                time: Math.floor(Math.random() * 20),
                teamId: randomTeam.id,
                playerId: randomPlayer.id,
            });
        }
        await this.halfTimeMatch(id, 'end');
        await this.endMatch(id);
    }
};
exports.MatchService = MatchService;
exports.MatchService = MatchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        event_emitter_1.EventEmitter2])
], MatchService);
//# sourceMappingURL=match.service.js.map