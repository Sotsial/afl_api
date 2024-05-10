import { Module } from '@nestjs/common';
import { TeamModule } from './team/team.module';
import { TournamentModule } from './tournament/tournament.module';
import { PlayerModule } from './player/player.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/guards/roles.guard';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { MatchModule } from './match/match.module';
import { ScheduleModule } from '@nestjs/schedule';
import { BackgroundTasksModule } from './background-tasks/background-tasks.module';

@Module({
  imports: [
    TeamModule,
    TournamentModule,
    PlayerModule,
    AuthModule,
    UserModule,
    MatchModule,
    ScheduleModule.forRoot(),
    BackgroundTasksModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
