import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PlayerService } from './player.service';
import { Prisma } from '@prisma/client';
export declare class PlayerController {
    private readonly playerService;
    constructor(playerService: PlayerService);
    create(createPlayerDto: CreatePlayerDto): Promise<void>;
    findList(query: {
        current: number;
        pageSize: number;
        teamId?: string;
    }): Promise<{
        data: ({
            team: {
                name: string;
            };
            matchTimeline: {
                type: import(".prisma/client").$Enums.MatchEvent;
            }[];
        } & {
            id: string;
            email: string;
            name: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
            teamId: string;
        })[];
        page: number;
        pageSize: number;
        total: number;
    }>;
    findAll(query: Prisma.UserWhereInput): Promise<{
        id: string;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        teamId: string;
    }[]>;
    getDictionary(query: {
        teamId?: string;
        tournamentId?: string;
    }): Promise<{
        label: string;
        value: string;
    }[]>;
    findOne(id: string): Promise<{
        results: {
            matches: number;
            goals: number;
        };
        team: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            capitanId: string;
        };
        captainedTeam: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            capitanId: string;
        };
        id: string;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        teamId: string;
    }>;
    update(id: string, updatePlayerDto: UpdatePlayerDto): Promise<{
        id: string;
        email: string;
        name: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        teamId: string;
    }>;
}
