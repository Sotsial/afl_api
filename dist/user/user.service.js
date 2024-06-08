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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const argon2 = require("argon2");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        const password = await argon2.hash(createUserDto.password);
        return await this.prisma.user.create({
            data: { ...createUserDto, password },
        });
    }
    async findOne(email) {
        return await this.prisma.user.findUnique({
            where: { email: email.toLowerCase() },
        });
    }
    async findAll({ where }) {
        return this.prisma.user.findMany({ where });
    }
    async findList(query, where) {
        const { pageSize = 10, current = 1 } = query;
        const pageNumber = Math.max(1, current);
        const skip = (pageNumber - 1) * pageSize;
        const take = +pageSize;
        const results = await this.prisma.user.findMany({
            take,
            skip,
            where,
        });
        const totalCount = await this.prisma.user.count();
        return {
            data: results,
            page: pageNumber,
            pageSize,
            total: totalCount,
        };
    }
    async getDictionary(where) {
        const list = await this.prisma.user.findMany({
            where,
            select: {
                id: true,
                name: true,
            },
        });
        return list.map((el) => ({ label: el.name, value: el.id }));
    }
    async update(id, updateUserDto) {
        return this.prisma.user.update({
            where: {
                id,
            },
            data: updateUserDto,
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map