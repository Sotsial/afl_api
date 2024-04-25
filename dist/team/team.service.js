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
exports.TeamService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let TeamService = class TeamService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTeamDto) {
        const team = await this.prisma.team.create({ data: createTeamDto });
        return { message: `Команда ${team.name}  создан` };
    }
    async findList(query) {
        const pageSize = Number(query.pageSize) ?? 10;
        const pageNumber = Number(query.current) ?? 10;
        const results = await this.prisma.team.findMany({
            take: pageSize,
            skip: (pageNumber - 1) * pageSize,
        });
        const totalCount = await this.prisma.team.count();
        return {
            data: results,
            page: pageNumber,
            pageSize: pageSize,
            total: totalCount,
        };
    }
    findAll() {
        return this.prisma.team.findMany();
    }
    async getDictionary() {
        const list = await this.prisma.team.findMany({
            select: {
                id: true,
                name: true,
            },
        });
        return list.map((el) => ({ label: el.name, value: el.id }));
    }
    async findOne(id) {
        const team = await this.prisma.team.findUnique({
            where: { id },
            include: { players: true, match: { where: { status: 'Completed' } } },
        });
        const mathes = await this.prisma.match.findMany({
            where: { teams: { some: { id: team.id } }, status: 'Completed' },
        });
        function countResults(matches, teamId) {
            let wins = 0;
            let draws = 0;
            let losses = 0;
            for (const match of matches) {
                if (match.winnerId === teamId) {
                    wins++;
                }
                else if (match.winnerId === null) {
                    draws++;
                }
                else {
                    losses++;
                }
            }
            return {
                matches: matches.length,
                wins: wins,
                draws: draws,
                losses: losses,
            };
        }
        const results = countResults(mathes, team.id);
        if (!team)
            throw new common_1.NotFoundException('Team not found');
        return { ...team, results };
    }
    update(id, updateTeamDto) {
        return this.prisma.team.update({
            where: {
                id,
            },
            data: updateTeamDto,
        });
    }
    remove(id) {
        return this.prisma.team.delete({
            where: { id },
        });
    }
};
exports.TeamService = TeamService;
exports.TeamService = TeamService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TeamService);
//# sourceMappingURL=team.service.js.map