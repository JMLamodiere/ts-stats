import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";

const csvReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvReader);
const matches = matchReader.load();

console.log(`Man United won ${matches.manUnitedWins()} games`);
