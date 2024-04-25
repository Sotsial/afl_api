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
let PlayerService = class PlayerService {
    constructor(prisma, userService) {
        this.prisma = prisma;
        this.userService = userService;
    }
    async create({ name, teamId, email, password }) {
        const team = await this.prisma.team.findUnique({
            where: { id: teamId },
        });
        const user = await this.userService.create({ email, name, password });
        await this.prisma.player.create({
            data: {
                name,
                user: {
                    connect: user,
                },
                team: {
                    connect: team,
                },
            },
        });
        return { message: 'Игрок создан' };
    }
    async findList(query) {
        const pageSize = Number(query.pageSize) ?? 10;
        const pageNumber = Number(query.current) ?? 10;
        const results = await this.prisma.player.findMany({
            take: pageSize,
            skip: (pageNumber - 1) * pageSize,
            include: {
                team: true,
            },
        });
        const totalCount = await this.prisma.player.count();
        return {
            data: results,
            page: pageNumber,
            pageSize: pageSize,
            total: totalCount,
        };
    }
    async getDictionary(teamId) {
        const list = await this.prisma.player.findMany({
            where: {
                teamId,
            },
            select: {
                id: true,
                name: true,
            },
        });
        return list.map((el) => ({ label: el.name, value: el.id }));
    }
    findAll() {
        return this.prisma.player.findMany();
    }
    async findOne(id) {
        const player = await this.prisma.player.findUnique({
            where: {
                id,
            },
            include: {
                team: true,
            },
        });
        const matches = await this.prisma.match.findMany({
            where: {
                matchApplications: {
                    some: {
                        players: {
                            some: {
                                id: player.id,
                            },
                        },
                    },
                },
            },
            include: {
                matchTimeline: {
                    where: {
                        playerId: player.id,
                        type: 'GOAL',
                    },
                },
            },
        });
        const goals = matches.reduce((accumulator, currentMatch) => accumulator + currentMatch.matchTimeline.length, 0);
        const results = { matches: matches.length, goals };
        return { ...player, results };
    }
    update(id, updatePlayerDto) {
        return `This action updates a #${id} player`;
    }
    remove(id) {
        return `This action removes a #${id} player`;
    }
};
exports.PlayerService = PlayerService;
exports.PlayerService = PlayerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        user_service_1.UserService])
], PlayerService);
//# sourceMappingURL=player.service.js.map