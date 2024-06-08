import { Module } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { TournamentController } from './tournament.controller';
import { PrismaService } from '../prisma.service';
import { GroupModule } from 'src/group/group.module';
import { GroupEndListener } from './listeners/group-end.listener';
import { UserModule } from 'src/user/user.module';
import { MatchModule } from 'src/match/match.module';

@Module({
  controllers: [TournamentController],
  providers: [TournamentService, PrismaService, GroupEndListener],
  exports: [TournamentService],
  imports: [GroupModule, UserModule, MatchModule],
})
export class TournamentModule {}
