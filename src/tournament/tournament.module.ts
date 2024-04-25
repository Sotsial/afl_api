import { Module } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { TournamentController } from './tournament.controller';
import { PrismaService } from 'src/prisma.service';
import { MatchModule } from 'src/match/match.module';

@Module({
  controllers: [TournamentController],
  providers: [TournamentService, PrismaService],
  imports: [MatchModule],
})
export class TournamentModule {}
