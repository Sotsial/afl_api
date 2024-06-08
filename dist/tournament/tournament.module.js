"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentModule = void 0;
const common_1 = require("@nestjs/common");
const tournament_service_1 = require("./tournament.service");
const tournament_controller_1 = require("./tournament.controller");
const prisma_service_1 = require("../prisma.service");
const group_module_1 = require("../group/group.module");
const group_end_listener_1 = require("./listeners/group-end.listener");
const user_module_1 = require("../user/user.module");
const match_module_1 = require("../match/match.module");
let TournamentModule = class TournamentModule {
};
exports.TournamentModule = TournamentModule;
exports.TournamentModule = TournamentModule = __decorate([
    (0, common_1.Module)({
        controllers: [tournament_controller_1.TournamentController],
        providers: [tournament_service_1.TournamentService, prisma_service_1.PrismaService, group_end_listener_1.GroupEndListener],
        exports: [tournament_service_1.TournamentService],
        imports: [group_module_1.GroupModule, user_module_1.UserModule, match_module_1.MatchModule],
    })
], TournamentModule);
//# sourceMappingURL=tournament.module.js.map