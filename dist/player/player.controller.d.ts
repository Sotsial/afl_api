import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
export declare class PlayerController {
    private readonly playerService;
    constructor(playerService: PlayerService);
    create(createPlayerDto: CreatePlayerDto): Promise<{
        message: string;
    }>;
    findList(query: any): Promise<{
        data: ({
            team: {
                id: string;
                name: string;
            };
        } & {
            id: string;
            name: string;
            userId: string;
            teamId: string;
            isCaptain: boolean;
        })[];
        page: number;
        pageSize: number;
        total: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        userId: string;
        teamId: string;
        isCaptain: boolean;
    }[]>;
    getDictionary(teamId: any): Promise<{
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
            name: string;
        };
        id: string;
        name: string;
        userId: string;
        teamId: string;
        isCaptain: boolean;
    }>;
    update(id: string, updatePlayerDto: UpdatePlayerDto): string;
    remove(id: string): string;
}
