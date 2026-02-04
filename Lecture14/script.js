// Type Conversion
let x = Number("45");
console.log(x);
console.log(typeof x);
// prompt to take input from user
// let age = Number(prompt("Enter Your Age: "));
// console.log(age);
// console.log(typeof age);

// let, const, var
// 1. var:
// => You can Redeclare a variable with var keyword.
var y = 67;
var y;
console.log(y);
// => You can Reassign a variable with var keyword
y = 34;
console.log(y);

// => var is a global scope

// 2. => let:
// => You cannot redeclare a variable with let keyword
let a = 55;
// let a;

// => You can Reassign a variable with let keyword
a = 90;
console.log(a);
// => let is block scope

// 3. => const
// => You cannot Redeclare a variable with const keyword
const b = 89;
// const b;
// => You cannot reassign a variable with const keyword
// b = 55;
// console.log(b);
// => const is a block scope

// Operators in Js
// 1. => Arithmetic Operators: (+, -, *, /, %, ++, --)
let num1 = 22;
let num2 = 22;
console.log("num1 + num2 = ", num1 + num2);
console.log("num1 - num2 = ", num1 - num2);
console.log("num1 * num2 = ", num1 * num2);
console.log("num1 / num2 = ", num1 / num2);
console.log("num1 % num2 = ", num1 % num2);
num1++; // num1++ = num1 = num1 + 1
console.log(num1);
num1--;
console.log(num1);
num1 = num1 + 2;
num1++;
num1 = num1 + 4;
num1--;
console.log(num1);
// 2. => Assignment Operators: (=, +=, -=, *=, /=)
num2++;
num2 += 3; // num2 = num2 + 3
console.log(num2);
num2 -= 20;
num2 *= 2;
num2 /= 4;
console.log(num2);

// 3. => Comparison Operators: (==, ===, >, >=, <, <=)
let g = 44;
let h = 44;
console.log(g == h); // Loose Equality Operator
console.log(g === h); // Strict Equality Operator
console.log(g > h);
console.log(g >= h);
console.log(g < h);
console.log(g <= h);
// 4. => Logical Operators: (&&, ||, !, NAND, NOR)
