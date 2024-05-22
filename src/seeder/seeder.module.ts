import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { PrismaService } from 'src/prisma.service';
import { PlayerModule } from 'src/player/player.module';
import { TournamentModule } from 'src/tournament/tournament.module';

@Module({
  providers: [PrismaService, SeederService],
  exports: [SeederService],
  imports: [PlayerModule, TournamentModule],
})
export class SeederModule {}
