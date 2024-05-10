"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const team_module_1 = require("./team/team.module");
const tournament_module_1 = require("./tournament/tournament.module");
const player_module_1 = require("./player/player.module");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const core_1 = require("@nestjs/core");
const roles_guard_1 = require("./auth/guards/roles.guard");
const jwt_auth_guard_1 = require("./auth/guards/jwt-auth.guard");
const match_module_1 = require("./match/match.module");
const schedule_1 = require("@nestjs/schedule");
const background_tasks_module_1 = require("./background-tasks/background-tasks.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            team_module_1.TeamModule,
            tournament_module_1.TournamentModule,
            player_module_1.PlayerModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            match_module_1.MatchModule,
            schedule_1.ScheduleModule.forRoot(),
            background_tasks_module_1.BackgroundTasksModule,
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map