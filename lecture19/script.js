// Functions in Js
// user Defined Function
function developer() {
  console.log("I am a MERN Stack Developer");
}
developer(); // calling the function, returning the fuction, invoking the Function
developer();
developer();
function average(a, b, c) {
  // Parameters
  let sum = a + b + c;
  let avg = sum / 3;
  console.log(avg);
}
// Arguments
// average(23, 45, 55);
// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console
function describeCountry(country, population, capitalCity) {
  //   let countryDetail =
  //     // country +
  //     // " " +
  //     // "has" +
  //     // " " +
  //     // population +
  //     // " " +
  //     // "Million People and its Capital City is" +
  //     // " " +
  //     // capitalCity;
  //   Template Literals
  let countryExplain = `${country} has ${population} Million People and its Capital City is ${capitalCity}`;
  //   console.log(countryDetail);
  console.log(countryExplain);
}
describeCountry("Pakistan", 245, "Islamabad");
describeCountry("Finland", 6, "Helsinki");
// Builtin Function:
// e.g console.log(), prompt()

//  Ternary Operator
// condition ? statement : statement;
let num1 = 450;
let num2 = 78;
let greaterNumber =
  num1 > num2 ? "num1 is greater than num2" : "num2 is greater than num1";
console.log(greaterNumber);
console.log(greaterNumber);
console.log(greaterNumber);
console.log(greaterNumber);
