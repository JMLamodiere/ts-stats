export enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export class MatchDataCollection {
  constructor(private matches: MatchData[]) {}

  manUnitedWins(): number {
    return this.matches.filter(MatchDataCollection.isWon).length;
  }

  private static isWon(match: MatchData): boolean {
    return (
      (match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
      (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
    );
  }
}
