import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Request,
} from '@nestjs/common';
import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UpdateMatchApplicationDto } from './dto/update-match-application.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateMatchEventDto } from './dto/create-match-event-dto';
import { Public } from '../decorators/public.decorator';

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
    @Body() UpdateMatchApplicationDto: UpdateMatchApplicationDto,
  ) {
    return this.matchService.updateApplication(UpdateMatchApplicationDto);
  }

  @Post('stage')
  updateStage(@Body('id') id) {
    return this.matchService.updateStage(id);
  }

  @Post('event')
  createMatchEvent(@Body() CreateMatchEventDto: CreateMatchEventDto) {
    return this.matchService.createMatchEvent(CreateMatchEventDto);
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchService.remove(id);
  }
}
