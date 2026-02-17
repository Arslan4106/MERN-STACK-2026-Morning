// Function Declaration
let age = 34;
console.log("Function Declaration");
console.log(calcAge(1999, 2026));
function calcAge(birthYear, currentYear) {
  let age = currentYear - birthYear;
  console.log(age);
  return age;
}

// Function Expression
console.log("Function Expression");
const calcAgeNew = function (birthYear, currentYear) {
  let age = currentYear - birthYear;
  console.log(age);
  return age;
};
console.log(calcAgeNew(2000, 2026));

// Arrow Function
console.log("Arrow Function");
const calcAge1 = (birthYear, currentYear) => {
  let age = currentYear - birthYear;
  console.log(age);
  return age;
};
console.log(calcAge1(1998, 2026));

// Arrays in Js
const students = [
  "Shoaib",
  34,
  "Ali",
  "Ahmad",
  true,
  "Ikram",
  56 + 90,
  "Hasan",
];
// Array Name:
// Index: Always start from zero, 0, 1, 2, 3, 4
// Length: number of elements, length: 5
// types of Data:
// Elements:
console.log(students);
console.log(students.length);
console.log(students[(0, 1, 2)]);
for (let i = 0; i < students.length; i++) {
  console.log(students[i]); // studetns[0]
}
