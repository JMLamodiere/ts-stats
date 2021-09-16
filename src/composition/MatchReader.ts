import { dateStringToDate } from "../Utils";
import { MatchData, MatchDataCollection, MatchResult } from "../MatchData";

export interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  constructor(public reader: DataReader) {}

  load(): MatchDataCollection {
    this.reader.read();
    const rows = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });

    return new MatchDataCollection(rows);
  }
}
