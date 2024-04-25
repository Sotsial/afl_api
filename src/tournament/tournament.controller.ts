import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import {
  CreateTournamentApplicationDto,
  createTournamentTours,
} from './dto/create-tournament-application.dto';
import { Public } from 'src/decorators/public.decorator';

@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Post()
  create(@Body() createTournamentDto: CreateTournamentDto) {
    return this.tournamentService.create(createTournamentDto);
  }

  @Get('list')
  findList(@Query() query) {
    return this.tournamentService.findList(query);
  }

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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tournamentService.remove(id);
  }

  @Post('application')
  createApplication(
    @Body() tournamentApplicationDto: CreateTournamentApplicationDto,
  ) {
    return this.tournamentService.createApplication(tournamentApplicationDto);
  }

  @Post('stage')
  createTours(@Body() { tournamentId }: createTournamentTours) {
    return this.tournamentService.createTours(tournamentId);
  }
}
