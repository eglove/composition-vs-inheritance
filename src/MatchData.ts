import {MatchResult} from './MatchResult';

export type MatchData = [Date, string, string, number, number, MatchResult, string];

export enum MatchDataRows {
    'date' = 0,
    'homeTeam' = 1,
    'awayTeam' = 2,
    'homeScore' = 3,
    'awayScore' = 4,
    'winningTeam' = 5,
    'mvp' = 6,
}
