//activation of strick mode
//Important!!! this line should be first
`use strict`;

//strict mode help us to avoid bugs
// we recieve a msg about mistakes in code and shows reserved words we can't use

//Functions
function describeCountry(country, population, capitalCity) {
  const countryInfo = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return countryInfo;
  //return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const countryInformation = describeCountry("France", 67.7, "Paris");
console.log(countryInformation);
const countryInformation2 = describeCountry("UK", 67, "London");
console.log(countryInformation2);
const countryInformation3 = describeCountry("USA", 331, "Washington");
console.log(countryInformation3);

//Function Declarations vs. Expressions
//Function Declaration
//we can call declared function before

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//Function Expression
// function is a value
//The main difference between a function expression and a function declaration is
//the function name, which can be omitted in function expressions
//to create anonymous functions.
//we can not call function expression before
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};
const age2 = calcAge2(1992);
console.log(age2);

/*
The world population is 7900 million people.
Create a function declaration called 'percentageOfWorld1'
 which receives a 'population' value, and returns the
  percentage of the world population that the given
   population represents. For example,
    China has 1441 million people, 
    so it's about 18.2% of the world population
2. To calculate the percentage,divide the given
'population'value by 7900 and then multiply by 100
3. Call'percentageOfWorld1'for 3 populations of countries of your 
choice, store the results into variables,  
and log them to the console
4. Create a function expression which does the 
exact samething, called 'percentageOfWorld2',
 and also call it with 3 country populations
  (can be the same populations)
*/
//declaration

const worldPopulation = 7900;
function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}
const percentage = percentageOfWorld1(1441);
console.log(percentage);
const percentage2 = percentageOfWorld1(1200);
console.log(percentage2);
const percentage3 = percentageOfWorld1(900);
console.log(percentage3);

//expression
const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};
const percentage4 = percentageOfWorld2(1441);
console.log(percentage4);
const percentage5 = percentageOfWorld2(1200);
console.log(percentage5);
const percentage6 = percentageOfWorld2(900);
console.log(percentage6);

//Arrow function
const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
console.log(yearsUntilRetirement(1991));

//more parameters
/*
const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));

*/

/*
Exercise
1. Recreate the last assignment, but this time create an arrow function called
   'percentageOfWorld3'
*/
const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;
const percentage7 = percentageOfWorld3(1441);
console.log(percentageOfWorld3(1441));
const percentage8 = percentageOfWorld3(1200);
console.log(percentage8);
const percentage9 = percentageOfWorld3(900);
console.log(percentage9);

//Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

/*
1. Create a function called 'describePopulation'. Use the function type you like the most. 
This function takes in two arguments: 'country' and 'population', and returns a string 
like this: 'China has 1441 million people, which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier
3. Call 'describePopulation' wit hdata for 3countries of your choice

*/
function describePopulation(country, population) {
  const describePopulation = percentageOfWorld1(population);
  const answer = `${country} has ${population} million people, which is about ${Math.round(
    describePopulation
  )} % of the world.`;
  return answer;
}
console.log(describePopulation("UK", 67));

//Coding Challenge #1
const calcAverageDolphin = (par1,par2,par3)=>(par1+par2+par3) / 3;
const calcAvarageKoalas = (par1, par2, par3) => (par1 + par2 + par3) / 3;

function checkWinner ();
console.log (calcAverageDolphin);
//to look for edditional information
//continue
//kkkk