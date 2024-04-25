import { Module } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { TournamentController } from './tournament.controller';
import { PrismaService } from '../prisma.service';
import { MatchModule } from '../match/match.module';

@Module({
  controllers: [TournamentController],
  providers: [TournamentService, PrismaService],
  imports: [MatchModule],
})
export class TournamentModule {}
