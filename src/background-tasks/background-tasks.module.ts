import { Module } from '@nestjs/common';
import { BackgroundTasksService } from './background-tasks.service';
import { MatchModule } from 'src/match/match.module';

@Module({
  providers: [BackgroundTasksService],
  imports: [MatchModule],
})
export class BackgroundTasksModule {}
