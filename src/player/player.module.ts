import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { PrismaService } from '../prisma.service';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [PlayerController],
  providers: [PlayerService, PrismaService],
  exports: [PlayerService],
  imports: [UserModule],
})
export class PlayerModule {}
