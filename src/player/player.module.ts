import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { PrismaService } from 'src/prisma.service';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [PlayerController],
  providers: [PlayerService, PrismaService],
  imports: [UserModule],
})
export class PlayerModule {}
