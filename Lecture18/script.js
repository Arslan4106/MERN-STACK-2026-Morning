// Loops in JS
// for (initilization; Condition; increment) {
//   statement;
// }
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
for (let i = 1; i <= 100; i = i + 2) {
  console.log(i);
}
for (let i = 100; i >= 1; i = i - 2) {
  console.log(i);
}
// Lecture No: 01
const country = "Pakistan";
const continent = "Asia";
let population = 344;
console.log(country);
console.log(continent);
console.log(population);

// Lecture No: 02
let island = false;
const language = "urdu";
console.log(typeof language);
console.log(typeof country);
console.log(typeof population);
console.log(typeof island);

// Lecture No: 03
// language = "Pashto";

// Lecture No: 04
let newPopulation = population / 2;
console.log(newPopulation);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
let description =
  country +
  " " +
  "is in" +
  " " +
  continent +
  " " +
  "and its" +
  " " +
  population +
  " " +
  "Million People speak" +
  " " +
  language;
console.log(description);

// Lecture: 05
let descriptionNew = `'${country} is in ${continent} and its ${population} Million people speak ${language}'`;
console.log(descriptionNew);
