const country = "India";
const continent = "Asia";
let population = 4;
// population++;
const finlandPopulation = 6;
const averagePopulation = 33;
let countryFirstHalf = 2;
let countrySecondHalf = 2;
const isIsland = false;
let language;
language = "Hindi";

const description = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;

// console.log(typeof country);
// console.log(typeof population);
// console.log(typeof isIsland);
// console.log(typeof language);
// console.log(country, continent, population);
// console.log(population > finlandPopulation);
// console.log(population < averagePopulation);
// console.log(description);

// if (population > 33) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is  ${33 - population} million below average`
//   );
// }

// "9" - "5"; // 4
// "19" - "13" + "17"; //617
// "19" - "13" + 17; //23
// "123" < 57; //false
// 5 + 6 + "4" + 9 - 4 - 2; //1149

const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
if (numNeighbours == 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
