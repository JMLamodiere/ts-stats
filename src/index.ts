import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analysers/WinsAnalysis";

const csvReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvReader);
const matches = matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);

summary.buildAndPrintReport(matches);
