import {CsvFileReader} from './CsvFileReader';
import {MatchResult} from '../MatchResult';
import {MatchDataRows} from '../MatchData';
import {dataStringToDate} from '../utils';

export type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
    mapRow(row: string[]): MatchData {
        return [
            dataStringToDate(row[MatchDataRows['date']]),
            row[MatchDataRows['homeTeam']],
            row[MatchDataRows['awayTeam']],
            parseInt(row[MatchDataRows['homeScore']], 10),
            parseInt(row[MatchDataRows['awayScore']], 10),
            row[MatchDataRows['winningTeam']] as MatchResult,
            row[MatchDataRows['mvp']],
        ];
    }
}
