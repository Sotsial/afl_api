import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
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
            user: {
                name: string;
            };
            team: {
                name: string;
            };
            matchTimeline: {
                type: import(".prisma/client").$Enums.MatchEvent;
            }[];
        } & {
            id: string;
            userId: string;
            teamId: string;
        })[];
        page: number;
        pageSize: number;
        total: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        userId: string;
        teamId: string;
    }[]>;
    getDictionary(query: any): Promise<{
        label: string;
        value: string;
    }[]>;
    findOne(id: string): Promise<{
        results: {
            matches: number;
            goals: number;
        };
        user: {
            id: string;
            email: string;
            name: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
        };
        team: {
            id: string;
            name: string;
            capitanId: string;
        };
        captainedTeam: {
            id: string;
            name: string;
            capitanId: string;
        };
        id: string;
        userId: string;
        teamId: string;
    }>;
    update(id: string, updatePlayerDto: UpdatePlayerDto): Promise<{
        message: string;
    }>;
}
