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
exports.MatchController = void 0;
const common_1 = require("@nestjs/common");
const match_service_1 = require("./match.service");
const create_match_dto_1 = require("./dto/create-match.dto");
const update_match_dto_1 = require("./dto/update-match.dto");
const update_match_application_dto_1 = require("./dto/update-match-application.dto");
const public_decorator_1 = require("../decorators/public.decorator");
const create_match_event_dto_1 = require("./dto/create-match-event-dto");
let MatchController = class MatchController {
    constructor(matchService) {
        this.matchService = matchService;
    }
    create(createMatchDto) {
        return this.matchService.create(createMatchDto);
    }
    findList(req, query) {
        return this.matchService.findList({
            ...query,
            userId: req.user.id,
        });
    }
    findOne(id) {
        return this.matchService.findOne(id);
    }
    findAll(dto) {
        return this.matchService.findAll(dto);
    }
    updateApplication(updateMatchApplicationDto) {
        return this.matchService.updateApplication(updateMatchApplicationDto);
    }
    updateStage(id) {
        return this.matchService.updateStage(id);
    }
    createMatchEvent(createMatchEventDto) {
        return this.matchService.createMatchEvent(createMatchEventDto);
    }
    findMatchEvents(matchId) {
        return this.matchService.findMatchEvents(matchId);
    }
    update(id, updateMatchDto) {
        return this.matchService.update(id, updateMatchDto);
    }
    changeTime(id, time) {
        return this.matchService.changeTime(id, time);
    }
};
exports.MatchController = MatchController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_match_dto_1.CreateMatchDto]),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('list'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "findList", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "findOne", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('application'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_match_application_dto_1.UpdateMatchApplicationDto]),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "updateApplication", null);
__decorate([
    (0, common_1.Post)('stage'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "updateStage", null);
__decorate([
    (0, common_1.Post)('event'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_match_event_dto_1.CreateMatchEventDto]),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "createMatchEvent", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('event/:matchId'),
    __param(0, (0, common_1.Param)('matchId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "findMatchEvents", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_match_dto_1.UpdateMatchDto]),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('time/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('time')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "changeTime", null);
exports.MatchController = MatchController = __decorate([
    (0, common_1.Controller)('match'),
    __metadata("design:paramtypes", [match_service_1.MatchService])
], MatchController);
//# sourceMappingURL=match.controller.js.map