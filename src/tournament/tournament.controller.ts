import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import {
  CreateTournamentApplicationDto,
  createTournamentTours,
} from './dto/create-tournament-application.dto';
import { Public } from '../decorators/public.decorator';

@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Post()
  create(@Body() createTournamentDto: CreateTournamentDto) {
    return this.tournamentService.create(createTournamentDto);
  }

  @Post('application')
  createApplication(
    @Body() tournamentApplicationDto: CreateTournamentApplicationDto,
  ) {
    return this.tournamentService.createApplication(tournamentApplicationDto);
  }

  @Patch('application/:id')
  updateApplication(@Param('id') id: string, @Body() { playerIds }) {
    return this.tournamentService.updateApplication({ id, playerIds });
  }

  @Get('application')
  getApplications(@Query() query) {
    return this.tournamentService.getApplications(query);
  }

  @Post('stage')
  createTours(@Body() { tournamentId }: createTournamentTours) {
    return this.tournamentService.createTours(tournamentId);
  }

  @Get('list')
  findList(@Query() query) {
    return this.tournamentService.findList(query);
  }
  @Public()
  @Get()
  findAll() {
    return this.tournamentService.findAll();
  }

  @Public()
  @Get('dictionary')
  getDictionary() {
    return this.tournamentService.getDictionary();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tournamentService.findOne(id);
  }

  @Public()
  @Get('table/:id')
  getTable(@Param('id') id: string) {
    return this.tournamentService.getTable(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTournamentDto: UpdateTournamentDto,
  ) {
    return this.tournamentService.update(id, updateTournamentDto);
  }
}
