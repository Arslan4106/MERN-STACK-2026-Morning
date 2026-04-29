"use strict";
const firstName = "Steven";
function calcAge(birthYear) {
  const age = 2026 - birthYear;
  console.log(firstName);
  //   console.log(myAge);
  function printAge() {
    // const firstName = "Bob";
    const myAge = 27;
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1997 && birthYear <= 2007) {
      const firstName = "Jonas";
      var myStr = "I am GenZ";
      const str = `${firstName}, You are GenZ, Your age is ${age}, born in ${birthYear}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      console.log(add(4, 5));
    }
    // console.log(add(4, 5));
    console.log(myStr);
  }
  //   console.log(myStr);
  printAge();
  return age;
}
console.log(calcAge(1999));
// printAge();
