import { Zoo } from "./zoo";

describe("Zoo", () => {
  describe("getAnimalsHairCount", () => {
    it("should return zero if no animals are passed in", () => {
      const animals = new Zoo([]);
      expect(animals.getHairCount()).toBe(0);
    });

    it("should return zero if there are no animals with hair", () => {
      const animals = new Zoo([
        {
          animal_name: "pikachu",
          hair: 0,
          feathers: 0,
          eggs: 1,
          milk: 0,
          airborne: 0,
          aquatic: 1,
          predator: 0,
          toothed: 0,
          backbone: 1,
          breathes: 1,
          venomous: 0,
          fins: 0,
          legs: 4,
          tail: 1,
          domestic: 1,
          catsize: 1,
          class_type: 3,
        },
      ]);
      expect(animals.getHairCount()).toBe(0);
    });

    it("should return two animals with hair", () => {
      const animals = new Zoo([
        {
          animal_name: "pikachu",
          hair: 0,
          feathers: 0,
          eggs: 1,
          milk: 0,
          airborne: 0,
          aquatic: 1,
          predator: 0,
          toothed: 0,
          backbone: 1,
          breathes: 1,
          venomous: 0,
          fins: 0,
          legs: 4,
          tail: 1,
          domestic: 1,
          catsize: 1,
          class_type: 3,
        },
        {
          animal_name: "arcanine",
          hair: 1,
          feathers: 0,
          eggs: 1,
          milk: 0,
          airborne: 0,
          aquatic: 1,
          predator: 0,
          toothed: 0,
          backbone: 1,
          breathes: 1,
          venomous: 0,
          fins: 0,
          legs: 4,
          tail: 1,
          domestic: 1,
          catsize: 1,
          class_type: 3,
        },
      ]);
      expect(animals.getHairCount()).toBe(1);
    });
  });

  describe("getAquatics", () => {
    it("should return empty array if no animals are passed in", () => {
      const animals = new Zoo([]);
      expect(animals.getAquaticList()).toEqual([]);
    });

    it("should return empty array if there are no aquatic animals", () => {
      const animals = new Zoo([
        {
          animal_name: "pikachu",
          hair: 0,
          feathers: 0,
          eggs: 1,
          milk: 0,
          airborne: 0,
          aquatic: 0,
          predator: 0,
          toothed: 0,
          backbone: 1,
          breathes: 1,
          venomous: 0,
          fins: 0,
          legs: 4,
          tail: 1,
          domestic: 1,
          catsize: 1,
          class_type: 3,
        },
      ]);
      expect(animals.getAquaticList()).toEqual([]);
    });

    it("should return two animals with hair", () => {
      const animals = new Zoo([
        {
          animal_name: "pikachu",
          hair: 0,
          feathers: 0,
          eggs: 1,
          milk: 0,
          airborne: 0,
          aquatic: 0,
          predator: 0,
          toothed: 0,
          backbone: 1,
          breathes: 1,
          venomous: 0,
          fins: 0,
          legs: 4,
          tail: 1,
          domestic: 1,
          catsize: 1,
          class_type: 3,
        },
        {
          animal_name: "tentacool",
          hair: 1,
          feathers: 0,
          eggs: 1,
          milk: 0,
          airborne: 0,
          aquatic: 1,
          predator: 0,
          toothed: 0,
          backbone: 1,
          breathes: 1,
          venomous: 0,
          fins: 0,
          legs: 4,
          tail: 1,
          domestic: 1,
          catsize: 1,
          class_type: 3,
        },
        {
          animal_name: "squirtle",
          hair: 1,
          feathers: 0,
          eggs: 1,
          milk: 0,
          airborne: 0,
          aquatic: 1,
          predator: 0,
          toothed: 0,
          backbone: 1,
          breathes: 1,
          venomous: 0,
          fins: 0,
          legs: 4,
          tail: 1,
          domestic: 1,
          catsize: 1,
          class_type: 3,
        },
      ]);
      expect(animals.getAquaticList()).toEqual(["squirtle", "tentacool"]);
    });
  });

  describe("getAvgLetterOccurrence", () => {
    it("should return zero if no animals are passed in", () => {
      const animals = new Zoo([]);
      expect(animals.getAvgLetterAOccurrenceForAquatic()).toBe(0);
    });

    it("should return zero if there are no letter A in any of the aquatic animals", () => {
      const animals = new Zoo([
        {
          animal_name: "squirtle",
          hair: 0,
          feathers: 0,
          eggs: 1,
          milk: 0,
          airborne: 0,
          aquatic: 1,
          predator: 0,
          toothed: 0,
          backbone: 1,
          breathes: 1,
          venomous: 0,
          fins: 0,
          legs: 4,
          tail: 1,
          domestic: 1,
          catsize: 1,
          class_type: 3,
        },
      ]);
      expect(animals.getAvgLetterAOccurrenceForAquatic()).toBe(0);
    });

    it("should return 0.5 for two aquatics with 1 letter A in their names", () => {
      const animals = new Zoo([
        {
          animal_name: "pikachu",
          hair: 0,
          feathers: 0,
          eggs: 1,
          milk: 0,
          airborne: 0,
          aquatic: 0,
          predator: 0,
          toothed: 0,
          backbone: 1,
          breathes: 1,
          venomous: 0,
          fins: 0,
          legs: 4,
          tail: 1,
          domestic: 1,
          catsize: 1,
          class_type: 3,
        },
        {
          animal_name: "squirtle",
          hair: 1,
          feathers: 0,
          eggs: 1,
          milk: 0,
          airborne: 0,
          aquatic: 1,
          predator: 0,
          toothed: 0,
          backbone: 1,
          breathes: 1,
          venomous: 0,
          fins: 0,
          legs: 4,
          tail: 1,
          domestic: 1,
          catsize: 1,
          class_type: 3,
        },
        {
          animal_name: "tentAcool",
          hair: 1,
          feathers: 0,
          eggs: 1,
          milk: 0,
          airborne: 0,
          aquatic: 1,
          predator: 0,
          toothed: 0,
          backbone: 1,
          breathes: 1,
          venomous: 0,
          fins: 0,
          legs: 4,
          tail: 1,
          domestic: 1,
          catsize: 1,
          class_type: 3,
        },
      ]);
      expect(animals.getAvgLetterAOccurrenceForAquatic()).toBe(0.5);
    });
  });
});
