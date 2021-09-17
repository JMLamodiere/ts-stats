import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.createFromCsv("football.csv");
const matches = matchReader.load();

const summary = Summary.createWinsAnalysisWithHtmlAndConsoleReport(
  "Man United",
  "report.html"
);
summary.buildAndPrintReport(matches);
