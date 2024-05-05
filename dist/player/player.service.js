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
exports.PlayerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const user_service_1 = require("../user/user.service");
const argon2 = require("argon2");
let PlayerService = class PlayerService {
    constructor(prisma, userService) {
        this.prisma = prisma;
        this.userService = userService;
    }
    async create({ name, teamId, email, password }) {
        try {
            await this.prisma.$transaction(async (tx) => {
                const team = await tx.team.findUnique({
                    where: { id: teamId },
                    select: {
                        capitanId: true,
                        id: true,
                    },
                });
                if (!team) {
                    throw new common_1.BadRequestException('Команда не найдена');
                }
                const pass = await argon2.hash(password);
                const user = await tx.user.create({
                    data: { email, name, password: pass },
                });
                const player = await tx.player.create({
                    data: {
                        userId: user.id,
                        teamId: team.id,
                    },
                });
                if (!team.capitanId) {
                    await tx.team.update({
                        where: {
                            id: teamId,
                        },
                        data: {
                            capitan: { connect: player },
                        },
                    });
                }
                return { message: 'Игрок создан' };
            });
        }
        catch {
            throw new common_1.BadRequestException('Ошибка при создании игрока');
        }
    }
    async findList(query) {
        const { pageSize = 10, current = 1, teamId } = query;
        const pageNumber = Math.max(1, current);
        const skip = (pageNumber - 1) * pageSize;
        const take = +pageSize;
        const results = await this.prisma.player.findMany({
            take,
            skip,
            where: {
                teamId,
            },
            include: {
                team: { select: { name: true } },
                user: { select: { name: true } },
                matchTimeline: {
                    select: {
                        type: true,
                    },
                },
            },
        });
        const totalCount = await this.prisma.player.count();
        results.forEach((player) => {
            const statistic = player.matchTimeline.reduce((acc, event) => {
                switch (event.type) {
                    case 'GOAL':
                        acc.goals++;
                        break;
                    case 'YELLOW':
                        acc.yellow++;
                        break;
                    case 'RED':
                        acc.red++;
                        break;
                }
                return acc;
            }, { goals: 0, yellow: 0, red: 0 });
            player['score'] = statistic;
            delete player.matchTimeline;
        });
        return {
            data: results,
            page: pageNumber,
            pageSize,
            total: totalCount,
        };
    }
    findAll() {
        return this.prisma.player.findMany();
    }
    async getDictionary(teamId) {
        const list = await this.prisma.player.findMany({
            where: {
                teamId,
            },
            select: {
                id: true,
                user: true,
            },
        });
        return list.map((el) => ({ label: el.user.name, value: el.id }));
    }
    async findOne(id) {
        const player = await this.prisma.player.findUnique({
            where: { id },
            include: { team: true, user: true, captainedTeam: true },
        });
        if (!player) {
            throw new common_1.BadRequestException('Игрок не найден');
        }
        const [matches, goals] = await Promise.all([
            this.prisma.match.findMany({
                where: {
                    status: 'Completed',
                    matchApplications: {
                        some: {
                            players: { some: { id: player.id } },
                        },
                    },
                },
                include: {
                    matchTimeline: { where: { playerId: player.id, type: 'GOAL' } },
                },
            }),
            this.prisma.matchTimeline.count({
                where: { playerId: player.id, type: 'GOAL' },
            }),
        ]);
        const results = { matches: matches.length, goals };
        return { ...player, results };
    }
    async update(id, updatePlayerDto) {
        const player = await this.prisma.player.findUnique({
            where: { id },
            select: { userId: true },
        });
        await this.userService.update(player.userId, updatePlayerDto);
        if (updatePlayerDto.teamId) {
            await this.prisma.player.update({
                where: {
                    id,
                },
                data: updatePlayerDto,
            });
        }
        return { message: 'Игрок сохранен' };
    }
};
exports.PlayerService = PlayerService;
exports.PlayerService = PlayerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        user_service_1.UserService])
], PlayerService);
//# sourceMappingURL=player.service.js.map