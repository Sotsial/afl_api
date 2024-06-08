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
    async create(createUserDto) {
        const password = await argon2.hash(createUserDto.password);
        const teamId = createUserDto.teamId;
        await this.prisma.$transaction(async (tx) => {
            const user = await this.userService.create({
                ...createUserDto,
                password,
                role: 'PLAYER',
            });
            const team = await tx.team.findUnique({
                where: { id: teamId },
                select: { capitanId: true },
            });
            if (team && !team.capitanId) {
                await tx.team.update({
                    where: { id: teamId },
                    data: { capitan: { connect: { id: user.id } } },
                });
            }
        });
    }
    async findList(query) {
        const { pageSize = 10, current = 1, teamId } = query;
        const pageNumber = Math.max(1, current);
        const skip = (pageNumber - 1) * pageSize;
        const take = +pageSize;
        const results = await this.prisma.user.findMany({
            take,
            skip,
            where: {
                teamId,
                role: 'PLAYER',
            },
            include: {
                team: { select: { name: true } },
                matchTimeline: {
                    select: {
                        type: true,
                    },
                },
            },
        });
        const totalCount = await this.prisma.user.count({ where: { teamId } });
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
    async findAll({ where }) {
        return this.userService.findAll({ where: { ...where, role: 'PLAYER' } });
    }
    async getDictionary({ teamId, tournamentId, }) {
        const whereCondition = { role: 'PLAYER' };
        if (tournamentId) {
            whereCondition.tournamentApplications = {
                some: { tournamentId },
            };
        }
        if (teamId) {
            whereCondition.teamId = teamId;
        }
        const list = await this.prisma.user.findMany({
            where: whereCondition,
            select: {
                id: true,
                name: true,
            },
        });
        return list.map((el) => ({ label: el.name, value: el.id }));
    }
    async findOne(id) {
        const player = await this.prisma.user.findUnique({
            where: { id },
            include: { team: true, captainedTeam: true },
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
        return await this.userService.update(id, updatePlayerDto);
    }
};
exports.PlayerService = PlayerService;
exports.PlayerService = PlayerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        user_service_1.UserService])
], PlayerService);
//# sourceMappingURL=player.service.js.map