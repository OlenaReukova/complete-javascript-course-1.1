let country = "UK";
let continent = "Europe";
let population = 67.33;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = true;
let language = "English";

console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

//let, const and var

language = "french";
console.log(language);

//Basic Operators
let halfPopulation = population / 2;
console.log(halfPopulation);

let increasedPopulation = population + 1;
console.log(increasedPopulation);

//or population ++;

//Finland has a population of 6 million.Does your country have more people than
//Finland?
let populationFinland = 6;
let result = population - populationFinland;
console.log(result);

let averagePopulation = 33;
let resultAverage = population - averagePopulation;
console.log(resultAverage);

let description =
  "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description);

// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

let bmiMark = massMark / heightMark ** 2;
console.log(bmiMark);
let bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);
let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);
console.log(bmiMark, bmiJohn, markHigherBMI);
