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
exports.SeederService = void 0;
const faker_1 = require("@faker-js/faker");
const common_1 = require("@nestjs/common");
const player_service_1 = require("../player/player.service");
const prisma_service_1 = require("../prisma.service");
const tournament_service_1 = require("../tournament/tournament.service");
let SeederService = class SeederService {
    constructor(prisma, playerService, tournamentService) {
        this.prisma = prisma;
        this.playerService = playerService;
        this.tournamentService = tournamentService;
        this.usedNames = new Set();
    }
    async seed() {
        const teamCount = await this.prisma.team.count();
        if (teamCount < 16) {
            for (let t = 0; t < teamsNames.length; t++) {
                const team = await this.prisma.team.create({
                    data: {
                        name: teamsNames[t],
                    },
                });
                for (let i = 0; i < 9; i++) {
                    let name = faker_1.faker.person.firstName('male');
                    while (this.usedNames.has(name)) {
                        name = faker_1.faker.person.firstName('male');
                    }
                    this.usedNames.add(name);
                    await this.playerService.create({
                        name,
                        email: `${name}@test.ru`,
                        password: 'P@ssw0rd',
                        teamId: team.id,
                    });
                }
            }
        }
        const tournamentCount = await this.prisma.tournament.count();
        if (tournamentCount < 1) {
            const league = await this.prisma.tournament.create({
                data: {
                    name: 'Astana League',
                    matchType: 'FUTSAL',
                    tournamentType: 'LEAGUE',
                },
            });
            const teams = await this.prisma.team.findMany({
                take: 16,
                select: { id: true, players: { select: { id: true } } },
            });
            for (let i = 0; i < teams.length; i++) {
                await this.tournamentService.createApplication({
                    tournamentId: league.id,
                    teamId: teams[i].id,
                    playerIds: teams[i].players.map((el) => el.id),
                });
            }
        }
    }
};
exports.SeederService = SeederService;
exports.SeederService = SeederService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        player_service_1.PlayerService,
        tournament_service_1.TournamentService])
], SeederService);
const teamsNames = [
    'Реал Мадрид',
    'Барселона',
    'Манчестер Юнайтед',
    'Бавария',
    'Ливерпуль',
    'Ювентус',
    'Пари Сен-Жермен',
    'Челси',
    'Манчестер Сити',
    'Интернационале',
    'Аякс',
    'Реал Бетис',
    'Милан',
    'Бенфика',
    'Боруссия Дортмунд',
    'Атлетико Мадрид',
    'Тоттенхэм Хотспур',
    'Наполи',
    'Лестер Сити',
    'Севилья',
];
//# sourceMappingURL=seeder.service.js.map