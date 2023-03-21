import animals from "./animals.json";
import { Zoo } from "./zoo";

const zoo = new Zoo(animals);
console.log("1. How many animals have hair?", zoo.getHairCount(), "\n");

console.log(
  "2. List the names of the aquatic animals?",
  "\n",
  zoo.getAquaticList(),
  "\n"
);

console.log(
  "3. What is the average number of times the letter 'a' appears in the names of aquatic animals?",
  zoo.getAvgLetterAOccurrenceForAquatic(),
  "\n"
);

console.log("4. What is the type of the data in animals.json?");
console.log(
  "\x1b[32m%s\x1b[0m",
  `
  export interface IAnimal {
    animal_name: string;
    hair: number;
    feathers: number;
    eggs: number;
    milk: number;
    airborne: number;
    aquatic: number;
    predator: number;
    toothed: number;
    backbone: number;
    breathes: number;
    venomous: number;
    fins: number;
    legs: number;
    tail: number;
    domestic: number;
    catsize: number;
    class_type: number;
  }
`
);

console.log(
  "5. Which of the answers below is not correct and why is it not correct?",
  "\x1b[32m 2. is incorrect since turtle is missing from the list. \x1b[0m"
);
