import { AbstractCsvFileReader } from "./AbstractCsvFileReader";
import { dateStringToDate } from "../Utils";
import { MatchData, MatchResult } from "../MatchData";

export class ConcreteMatchReader extends AbstractCsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
