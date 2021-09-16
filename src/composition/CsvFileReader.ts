import fs from "fs";
import { DataReader } from "./MatchReader";

export class CsvFileReader implements DataReader {
  constructor(private filename: string) {}

  read(): string[][] {
    return fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
