import { ConcreteMatchReader } from "./inheritance/ConcreteMatchReader";
import { CsvFileReader } from "./composition/CsvFileReader";
import { MatchReader } from "./composition/MatchReader";
import { MatchDataCollection } from "./MatchData";

//inheritance
const reader = new ConcreteMatchReader("football.csv");
reader.read();

const inheritanceMatches = new MatchDataCollection(reader.data);

console.log(
  `Man United won ${inheritanceMatches.manUnitedWins()} games using inheritance`
);

//composition
const csvReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvReader);
const matches = matchReader.load();

console.log(
  `Man United won ${matches.manUnitedWins()} games using composition`
);
