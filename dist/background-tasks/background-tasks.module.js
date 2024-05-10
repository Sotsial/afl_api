"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundTasksModule = void 0;
const common_1 = require("@nestjs/common");
const background_tasks_service_1 = require("./background-tasks.service");
const match_module_1 = require("../match/match.module");
let BackgroundTasksModule = class BackgroundTasksModule {
};
exports.BackgroundTasksModule = BackgroundTasksModule;
exports.BackgroundTasksModule = BackgroundTasksModule = __decorate([
    (0, common_1.Module)({
        providers: [background_tasks_service_1.BackgroundTasksService],
        imports: [match_module_1.MatchModule],
    })
], BackgroundTasksModule);
//# sourceMappingURL=background-tasks.module.js.map