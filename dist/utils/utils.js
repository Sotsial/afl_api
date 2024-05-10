"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineWinner = exports.countTeamGoals = void 0;
const countTeamGoals = (match) => {
    const goals = match.matchTimeline.filter((el) => el.type === 'GOAL');
    const teamGoals = {
        [match.teams[0].id]: 0,
        [match.teams[1].id]: 0,
    };
    for (const event of goals) {
        if (event.type === 'GOAL') {
            const teamId = event.teamId;
            teamGoals[teamId] = (teamGoals[teamId] || 0) + 1;
        }
    }
    return teamGoals;
};
exports.countTeamGoals = countTeamGoals;
const defineWinner = (match) => {
    const teamGoals = (0, exports.countTeamGoals)(match);
    const [firstTeam, secondTeam] = match.teams;
    let winningTeamId = null;
    if (teamGoals[firstTeam.id] > teamGoals[secondTeam.id]) {
        winningTeamId = firstTeam.id;
    }
    else if (teamGoals[firstTeam.id] < teamGoals[secondTeam.id]) {
        winningTeamId = secondTeam.id;
    }
    return winningTeamId;
};
exports.defineWinner = defineWinner;
//# sourceMappingURL=utils.js.map