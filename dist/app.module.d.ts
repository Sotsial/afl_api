import { OnModuleInit } from '@nestjs/common';
import { SeederService } from './seeder/seeder.service';
export declare class AppModule implements OnModuleInit {
    private readonly seederService;
    constructor(seederService: SeederService);
    onModuleInit(): Promise<void>;
}
