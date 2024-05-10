import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { MatchService } from 'src/match/match.service';

@Injectable()
export class BackgroundTasksService {
  constructor(private matchService: MatchService) {}

  @Cron('30 * * * * *')
  async handleCron() {
    await this.matchService.updateTime();
  }
}
