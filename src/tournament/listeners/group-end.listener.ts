import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { TournamentService } from '../tournament.service';

@Injectable()
export class GroupEndListener {
  constructor(private tournamentService: TournamentService) {}

  @OnEvent('group.end')
  checkGroupMatches(tournamentId) {
    this.tournamentService.updateStage(tournamentId);
  }
}
