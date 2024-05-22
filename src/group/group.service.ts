import { BadRequestException, Injectable } from '@nestjs/common';
import { MatchStatus, MatchTimeline, Team } from '@prisma/client';
import { MatchService } from 'src/match/match.service';
import { PrismaService } from 'src/prisma.service';
import { defineWinner } from 'src/utils/utils';

@Injectable()
export class GroupService {
  constructor(
    private prisma: PrismaService,
    private matchService: MatchService,
  ) {}

  async create({
    tournamentId,
    teamIds,
  }: {
    tournamentId: string;
    teamIds: string[];
  }) {
    const tournament = await this.prisma.tournament.findUnique({
      where: { id: tournamentId },
      select: { teamIds: true, matchType: true },
    });

    if (!tournament) {
      throw new BadRequestException('Tournament not found.');
    }

    if (teamIds.length < 2) {
      throw new BadRequestException('Minimum 2 teams required for group.');
    }

    if (!!(teamIds.length % 2)) {
      throw new BadRequestException('Нечетное кол-во команд');
    }

    function generateRoundRobinSchedule(teams) {
      const numTeams = teams.length;
      const schedule = [];

      const numRounds = numTeams - 1;
      const halfNumTeams = numTeams / 2;

      for (let round = 0; round < numRounds; round++) {
        const roundSchedule = [];

        for (let i = 0; i < halfNumTeams; i++) {
          const match = [teams[i], teams[numTeams - i - 1]];
          roundSchedule.push(match);
        }

        schedule.push(roundSchedule);

        teams.splice(1, 0, teams.pop());
      }

      return schedule;
    }

    const tourList = generateRoundRobinSchedule(teamIds);

    const matchesToCreate = tourList.flatMap((roundMatches, index) =>
      roundMatches.map((match) => ({
        teamIds: [match[0], match[1]],
        round: index + 1,
      })),
    );

    try {
      const group = await this.prisma.group.create({
        data: {
          tournamentId,
          teamIds: { connect: teamIds.map((id) => ({ id })) },
        },
      });
      return await this.matchService.createMany({
        groupId: group.id,
        matches: matchesToCreate,
        tournamentId,
        type: tournament.matchType,
      });
    } catch (error) {
      throw new BadRequestException('Ошибка при создании группы');
    }
  }
}

export const groupCalculate = (group: {
  teamIds: Team[];
  match: {
    id: string;
    teams: Team[];
    status: MatchStatus;
    winnerId: string;
    matchTimeline: MatchTimeline[];
  }[];
}) => {
  const mathes = group.match.filter(
    (el) => !['NotStarted', 'Suspended', 'Preparation'].includes(el.status),
  );
  const table = group.teamIds.map((team) => {
    const myMathes = mathes.filter((match) =>
      match.teams.some((el) => el.id === team.id),
    );

    myMathes.forEach((el) => {
      if (el.status === 'Pending' || el.status === 'Break') {
        el.winnerId = defineWinner(el);
      }
    });

    const liveMatch = myMathes.find(
      (el) => el.status === 'Pending' || el.status === 'Break',
    )?.id;

    const results = countGoalsAndResultsWithPoints(myMathes, team.id);

    return { ...team, ...results, liveMatch };
  });

  table.sort((a, b) => {
    if (a.points < b.points) return 1;
    if (a.points > b.points) return -1;
    if (a.difference < b.difference) return 1;
    if (a.difference > b.difference) return -1;
    return 0;
  });

  return table;
};

const countGoalsAndResultsWithPoints = (matches, teamId) => {
  let goalsScored = 0;
  let goalsConceded = 0;
  let wins = 0;
  let draws = 0;
  let losses = 0;
  let points = 0;

  for (const match of matches) {
    for (const event of match.matchTimeline) {
      if (event.type === 'GOAL') {
        if (event.teamId === teamId) {
          goalsScored++;
        } else {
          goalsConceded++;
        }
      }
    }

    if (match.winnerId === teamId) {
      wins++;
      points += 3;
    } else if (match.winnerId === null) {
      draws++;
      points += 1;
    } else {
      losses++;
    }
  }

  return {
    scored: goalsScored,
    conceded: goalsConceded,
    difference: goalsScored - goalsConceded,
    matches: matches.length,
    wins: wins,
    draws: draws,
    losses: losses,
    points: points,
  };
};
