export enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

export class MatchData {
  constructor(
    public readonly date: Date,
    public readonly homeTeam: string,
    public readonly awayTeam: string,
    public readonly homeGoals: number,
    public readonly awayGoals: number,
    public readonly matchResult: MatchResult,
    public readonly person: string
  ) {}

  public isWonBy(team: string): boolean {
    return (
      (this.homeTeam === team && this.matchResult === MatchResult.HomeWin) ||
      (this.awayTeam === team && this.matchResult === MatchResult.AwayWin)
    );
  }
}

export class MatchDataCollection {
  constructor(private matches: MatchData[]) {}

  teamWinsCount(team: string): number {
    return this.matches.filter((match) => {
      return match.isWonBy(team);
    }).length;
  }
}
