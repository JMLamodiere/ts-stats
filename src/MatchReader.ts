import { dateStringToDate } from "./Utils";
import { MatchData, MatchDataCollection, MatchResult } from "./MatchData";
import { CsvFileReader } from "./CsvFileReader";

export interface DataReader {
  read(): string[][];
}

export class MatchReader {
  constructor(private reader: DataReader) {}

  static createFromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  load(): MatchDataCollection {
    const rows = this.reader.read().map((row: string[]): MatchData => {
      return new MatchData(
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6]
      );
    });

    return new MatchDataCollection(rows);
  }
}
