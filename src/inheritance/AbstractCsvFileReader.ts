import fs from "fs";

export abstract class AbstractCsvFileReader<T> {
  constructor(private filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): T[] {
    return fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
