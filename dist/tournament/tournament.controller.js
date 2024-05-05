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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentController = void 0;
const common_1 = require("@nestjs/common");
const tournament_service_1 = require("./tournament.service");
const create_tournament_dto_1 = require("./dto/create-tournament.dto");
const update_tournament_dto_1 = require("./dto/update-tournament.dto");
const create_tournament_application_dto_1 = require("./dto/create-tournament-application.dto");
const public_decorator_1 = require("../decorators/public.decorator");
let TournamentController = class TournamentController {
    constructor(tournamentService) {
        this.tournamentService = tournamentService;
    }
    create(createTournamentDto) {
        return this.tournamentService.create(createTournamentDto);
    }
    createApplication(tournamentApplicationDto) {
        return this.tournamentService.createApplication(tournamentApplicationDto);
    }
    updateApplication(id, { playerIds }) {
        return this.tournamentService.updateApplication({ id, playerIds });
    }
    getApplications(query) {
        return this.tournamentService.getApplications(query);
    }
    createTours({ tournamentId }) {
        return this.tournamentService.createTours(tournamentId);
    }
    findList(query) {
        return this.tournamentService.findList(query);
    }
    findAll() {
        return this.tournamentService.findAll();
    }
    getDictionary() {
        return this.tournamentService.getDictionary();
    }
    findOne(id) {
        return this.tournamentService.findOne(id);
    }
    getTable(id) {
        return this.tournamentService.getTable(id);
    }
    update(id, updateTournamentDto) {
        return this.tournamentService.update(id, updateTournamentDto);
    }
};
exports.TournamentController = TournamentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tournament_dto_1.CreateTournamentDto]),
    __metadata("design:returntype", void 0)
], TournamentController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('application'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tournament_application_dto_1.CreateTournamentApplicationDto]),
    __metadata("design:returntype", void 0)
], TournamentController.prototype, "createApplication", null);
__decorate([
    (0, common_1.Patch)('application/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TournamentController.prototype, "updateApplication", null);
__decorate([
    (0, common_1.Get)('application'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TournamentController.prototype, "getApplications", null);
__decorate([
    (0, common_1.Post)('stage'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tournament_application_dto_1.createTournamentTours]),
    __metadata("design:returntype", void 0)
], TournamentController.prototype, "createTours", null);
__decorate([
    (0, common_1.Get)('list'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TournamentController.prototype, "findList", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TournamentController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('dictionary'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TournamentController.prototype, "getDictionary", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TournamentController.prototype, "findOne", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('table/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TournamentController.prototype, "getTable", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tournament_dto_1.UpdateTournamentDto]),
    __metadata("design:returntype", void 0)
], TournamentController.prototype, "update", null);
exports.TournamentController = TournamentController = __decorate([
    (0, common_1.Controller)('tournament'),
    __metadata("design:paramtypes", [tournament_service_1.TournamentService])
], TournamentController);
//# sourceMappingURL=tournament.controller.js.map