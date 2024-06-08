import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Public } from '../decorators/public.decorator';
import { PlayerService } from './player.service';
import { Prisma } from '@prisma/client';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }

  @Get('list')
  findList(
    @Query() query: { current: number; pageSize: number; teamId?: string },
  ) {
    return this.playerService.findList(query);
  }

  @Get()
  findAll(@Query() query: Prisma.UserWhereInput) {
    return this.playerService.findAll({ where: query });
  }

  @Public()
  @Get('dictionary')
  getDictionary(@Query() query: { teamId?: string; tournamentId?: string }) {
    return this.playerService.getDictionary(query);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playerService.update(id, updatePlayerDto);
  }
}
