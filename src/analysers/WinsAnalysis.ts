import { Analyser } from "../Summary";
import { MatchDataCollection } from "../MatchData";

export class WinsAnalysis implements Analyser {
  constructor(private team: string) {}

  run(matches: MatchDataCollection): string {
    const wins = matches.teamWinsCount(this.team);

    return `Team ${this.team} won ${wins}`;
  }
}
