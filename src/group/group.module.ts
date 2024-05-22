import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { MatchModule } from 'src/match/match.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [GroupService, PrismaService],
  exports: [GroupService],
  imports: [MatchModule],
})
export class GroupModule {}
