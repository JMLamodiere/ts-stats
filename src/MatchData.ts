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
  constructor(public matches: MatchData[]) {}

  manUnitedWins(): number {
    let manUnitedWins = 0;
    for (let match of this.matches) {
      if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
      } else if (
        match[2] === "Man United" &&
        match[5] === MatchResult.AwayWin
      ) {
        manUnitedWins++;
      }
    }

    return manUnitedWins;
  }
}
