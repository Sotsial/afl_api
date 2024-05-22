import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { PlayerService } from 'src/player/player.service';
import { PrismaService } from 'src/prisma.service';
import { TournamentService } from 'src/tournament/tournament.service';

@Injectable()
export class SeederService {
  private usedNames: Set<string> = new Set<string>();

  constructor(
    private prisma: PrismaService,
    private playerService: PlayerService,
    private tournamentService: TournamentService,
  ) {}

  async seed() {
    const teamCount = await this.prisma.team.count();
    if (teamCount < 16) {
      for (let t = 0; t < teamsNames.length; t++) {
        const team = await this.prisma.team.create({
          data: {
            name: teamsNames[t],
          },
        });

        for (let i = 0; i < 9; i++) {
          let name = faker.person.firstName('male');
          while (this.usedNames.has(name)) {
            // Если имя уже использовалось, генерируем новое
            name = faker.person.firstName('male');
          }
          this.usedNames.add(name); // Добавляем новое имя в хранилище использованных имен

          await this.playerService.create({
            name,
            email: `${name}@test.ru`,
            password: 'P@ssw0rd',
            teamId: team.id,
          });
        }
      }
    }
    const tournamentCount = await this.prisma.tournament.count();
    if (tournamentCount < 1) {
      const league = await this.prisma.tournament.create({
        data: {
          name: 'Astana League',
          matchType: 'FUTSAL',
          tournamentType: 'LEAGUE',
        },
      });

      const teams = await this.prisma.team.findMany({
        take: 16,
        select: { id: true, players: { select: { id: true } } },
      });

      for (let i = 0; i < teams.length; i++) {
        await this.tournamentService.createApplication({
          tournamentId: league.id,
          teamId: teams[i].id,
          playerIds: teams[i].players.map((el) => el.id),
        });
      }
    }
  }
}

const teamsNames = [
  'Реал Мадрид',
  'Барселона',
  'Манчестер Юнайтед',
  'Бавария',
  'Ливерпуль',
  'Ювентус',
  'Пари Сен-Жермен',
  'Челси',
  'Манчестер Сити',
  'Интернационале',
  'Аякс',
  'Реал Бетис',
  'Милан',
  'Бенфика',
  'Боруссия Дортмунд',
  'Атлетико Мадрид',
  'Тоттенхэм Хотспур',
  'Наполи',
  'Лестер Сити',
  'Севилья',
];
