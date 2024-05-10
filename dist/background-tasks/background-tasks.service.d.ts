import { MatchService } from 'src/match/match.service';
export declare class BackgroundTasksService {
    private matchService;
    constructor(matchService: MatchService);
    handleCron(): Promise<void>;
}
