import { MatchDataCollection } from "./MatchData";
import { CompositeReport } from "./reportTargets/CompositeReport";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { WinsAnalysis } from "./analysers/WinsAnalysis";

export interface Analyser {
  run(matches: MatchDataCollection): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static createWinsAnalysisWithHtmlAndConsoleReport(
    team: string,
    outpoutFile: string
  ): Summary {
    const target = new CompositeReport([
      new ConsoleReport(),
      new HtmlReport(outpoutFile),
    ]);

    return new Summary(new WinsAnalysis(team), target);
  }

  constructor(private analyser: Analyser, private outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchDataCollection): void {
    const output = this.analyser.run(matches);
    this.outputTarget.print(output);
  }
}
