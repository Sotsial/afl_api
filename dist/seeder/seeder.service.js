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
    }
};
exports.SeederService = SeederService;
exports.SeederService = SeederService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        player_service_1.PlayerService,
        tournament_service_1.TournamentService])
], SeederService);
//# sourceMappingURL=seeder.service.js.map