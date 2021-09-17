import { MatchDataCollection } from "./MatchData";

export interface Analyser {
  run(matches: MatchDataCollection): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(private analyser: Analyser, private outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchDataCollection): void {
    const output = this.analyser.run(matches);
    this.outputTarget.print(output);
  }
}
