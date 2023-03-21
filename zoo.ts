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

export class Zoo {
  private animals: IAnimal[];

  constructor(animals: IAnimal[]) {
    this.animals = animals;
  }

  getHairCount() {
    return this.animals.reduce((accumulator: number, animal: IAnimal) => {
      if (animal.hair === 1) {
        accumulator++;
      }
      return accumulator;
    }, 0);
  }

  getAquaticList() {
    return this.animals
      .reduce((accumulator: string[], animal: IAnimal) => {
        if (animal.aquatic === 1) {
          accumulator.push(animal.animal_name);
        }
        return accumulator;
      }, [])
      .sort();
  }

  getAvgLetterAOccurrenceForAquatic() {
    const regex = new RegExp("a", "ig");
    const { count, occurrence } = this.animals.reduce(
      (accumulator, animal: IAnimal) => {
        if (animal.aquatic === 1) {
          accumulator.count++;
          accumulator.occurrence += (
            animal.animal_name.match(regex) || []
          ).length;
        }
        return accumulator;
      },
      { count: 0, occurrence: 0 }
    );
    const avg = occurrence / count;

    return isNaN(avg) ? 0 : avg;
  }
}
