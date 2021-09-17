import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analysers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { CompositeReport } from "./reportTargets/CompositeReport";
import { ConsoleReport } from "./reportTargets/ConsoleReport";

const csvReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvReader);
const matches = matchReader.load();

const target = new CompositeReport([
  new ConsoleReport(),
  new HtmlReport("report.html"),
]);
const summary = new Summary(new WinsAnalysis("Man United"), target);

summary.buildAndPrintReport(matches);
