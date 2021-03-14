import {Analyzer} from '../Summary';
import {MatchData} from '../MatchData';
import {MatchResult} from '../MatchResult';

export class WinsAnalysis implements Analyzer {
    constructor(public team: string) {
    }

    run(matches: MatchData[]): string {
        const team1 = 1;
        const team2 = 2;
        const winningTeam = 5;

        let wins = 0;

        matches.forEach((match: MatchData) => {
            if (match[team1] === 'Man United' && match[winningTeam] === MatchResult.HomeWin) {
                wins++;
            } else if (match[team2] === 'Man United' && match[winningTeam] === MatchResult.AwayWin) {
                wins++;
            } else {
                // Do nothing
            }
        });

        return `Team ${this.team} won ${wins} games.`;
    }
}
