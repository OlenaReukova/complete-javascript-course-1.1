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

//Template Literals
description = `Portugal is in Europe, and its 11 million people speak portuguese`;
console.log(description);

//Taking Decisions: if / else Statements
let belowPopulation = 33 - population;
if (population > 33) {
  console.log(`UK's population is above average`);
} else {
  console.log(`UK's population is ${belowPopulation} million below average`);
}
// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

*/
if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's!`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's!`);
}

//Type Conversion and Coercion
//Coercion + converts into string, - converts into number
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); //23
console.log("123" > 57); //true
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143

//Equality Operators: == vs. ===
// let numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// console.log(numNeighbours);
// console.log(typeof numNeighbours);
// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

//Logical Operators

if (language || population <= 50 || !isIsland) {
  console.log("Sara has her place to live");
} else {
  console.log("Sara does not have a place to live");
}

if (country) {
  console.log("YoushouldliveinPortugal");
} else {
  console.log("Portugal does not meet your criteria");
}
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
let everageDolphins = (97 + 112 + 101) / 3;
let everageKoalas = (109 + 95 + 123) / 3;
if (everageDolphins > everageKoalas && everageDolphins >= 100) {
  console.log(
    `The winner is Dolphins! Dolphins's score is ${everageDolphins}, Koalas's score is ${everageKoalas}`
  );
} else if (everageDolphins < everageKoalas && everageKoalas >= 100) {
  console.log(
    `The winner is Koalas! Koalas's score is ${everageKoalas}, Dolphins's score is ${everageDolphins}`
  );
} else if (
  everageDolphins === everageKoalas &&
  everageDolphins >= 100 &&
  everageKoalas >= 100
) {
  console.log(`The score is ${everageDolphins}: ${everageKoalas} `);
} else {
  console.log("No winners! The score is less than 100 points.");
}
//logical operator true faulse

//The switch Statement
// Useaswitchstatementtologthefollowingstringforthegiven'language': chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

//The Conditional (Ternary) Operator
// if else statement in one line
//the conditional operator has 3 parts:
//condition, if statment,else statement or other words 3 operands
//operator is an expression (produce the value -it means we can store value in variable)

//conditional(ternary) operator is much easy understand - only one line than if-else block
const age = 18;
const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

//if-else block = we need to declair first variable outside of if-else block

let drink2;
if (age >= 18) {
  drink2 = `wine`;
} else {
  drink2 = `water`;
}
console.log(drink2);
//advantege of ternary operator
//we can use it inside template
console.log(`I would like to drink ${age >= 18 ? `wine` : `water`}`);

//exercise
//If your country's population is greater than  33 million,
//use the ternary operator to log a string like this
//to the console: 'Portugal's population is above average'.
//Otherwise, simply log 'Portugal's population is below average'.
//Notice how only one word changes between these two sentences!

population > 33
  ? console.log(`Portugal's population is above average`)
  : console.log(`Portugal's population is below average`);

//Coding Challenge #4
//Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant.
//In his country, it's usual to tip 15% if the bill value is between 50 and 300.
//If the value is different, the tip is 20 %.
//Your tasks:

//1. Calculate the tip,depending on the bill value.
//Createa variable called 'tip' for this.
//It's not allowed to use an if/else statement 😅
//(If it's easier for you, you can start with an if/else statement,
// and then try to convert it to a ternary operator!)

//2. Print a string to the console containing the bill value,
//the tip, and the final value (bill + tip).
//Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

//Test data:
// Data 1: Test for bill values 275, 40 and 430

//Hints:
//To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// Value X is between 50 and 300, if it's>= 50 && <= 300😉

let bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill is ${bill}, the tip is ${tip}, the total sum is ${bill + tip}`
);
