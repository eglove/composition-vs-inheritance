import {dataStringToDate} from './utils';
import {MatchResult} from './MatchResult';
import {MatchData, MatchDataRows} from './MatchData';
import {CsvFileReader} from './CsvFileReader';

interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader {
    static fromCsv(filename: string): MatchReader {
        return new MatchReader(new CsvFileReader(filename));
    }

    matches: MatchData[] = [];

   constructor(public reader: DataReader) {
   }

   load(): void {
       this.reader.read();
       this.matches = this.reader.data.map((row: string[]): MatchData => {
           return [
               dataStringToDate(row[MatchDataRows['date']]),
               row[MatchDataRows['homeTeam']],
               row[MatchDataRows['awayTeam']],
               parseInt(row[MatchDataRows['homeScore']], 10),
               parseInt(row[MatchDataRows['awayScore']], 10),
               row[MatchDataRows['winningTeam']] as MatchResult,
               row[MatchDataRows['mvp']],
           ];
       });
   }
}
