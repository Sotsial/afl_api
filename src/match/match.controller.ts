import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Request,
} from '@nestjs/common';
import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { UpdateMatchApplicationDto } from './dto/update-match-application.dto';
import { Public } from '../decorators/public.decorator';
import { CreateMatchEventDto } from './dto/create-match-event-dto';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Post()
  create(@Body() createMatchDto: CreateMatchDto) {
    return this.matchService.create(createMatchDto);
  }

  @Get('list')
  findList(@Request() req, @Query() query) {
    return this.matchService.findList({
      ...query,
      userId: req.user.id,
    });
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchService.findOne(id);
  }

  @Public()
  @Get()
  findAll(@Query() dto) {
    return this.matchService.findAll(dto);
  }

  @Post('application')
  updateApplication(
    @Body() updateMatchApplicationDto: UpdateMatchApplicationDto,
  ) {
    return this.matchService.updateApplication(updateMatchApplicationDto);
  }

  @Post('stage')
  updateStage(@Body('id') id) {
    return this.matchService.updateStage(id);
  }

  @Post('event')
  createMatchEvent(@Body() createMatchEventDto: CreateMatchEventDto) {
    return this.matchService.createMatchEvent(createMatchEventDto);
  }

  @Public()
  @Get('event/:matchId')
  findMatchEvents(@Param('matchId') matchId: string) {
    return this.matchService.findMatchEvents(matchId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatchDto: UpdateMatchDto) {
    return this.matchService.update(id, updateMatchDto);
  }

  @Patch('time/:id')
  changeTime(@Param('id') id: string, @Body('time') time) {
    return this.matchService.changeTime(id, time);
  }

  @Post('autoplay/:id')
  autoPlay(@Param('id') id: string) {
    return this.matchService.autoPlayMatch(id);
  }
}
