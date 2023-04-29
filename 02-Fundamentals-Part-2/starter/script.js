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
