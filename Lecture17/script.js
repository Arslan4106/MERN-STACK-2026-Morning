let applesPieces = 20;
let bananaPieces = 24;
let mangoPieces = 32;
// String Cancatenation
let juice =
  "juice with" +
  " " +
  applesPieces +
  " " +
  "Pieces of Apples," +
  " " +
  bananaPieces +
  " " +
  "Pieces of Bananas, and" +
  " " +
  mangoPieces +
  " " +
  "Pieces of Mangoes";

let juiceNew = `juice with ${applesPieces} pieces of Apples, and ${bananaPieces} Pieces of Bananas, and ${mangoPieces} Pieces of Mangoes`;
console.log(juiceNew);
console.log(juice);
// Type Coercion
let a = "18";
let b = 23;
console.log(a + b);
console.log("12" + 45);
console.log("18" - 10);
console.log("12" * 2);
console.log("24" / 2);
// Loose Equality Operator
// => uses Type Coercion
// Strict Equality Operator
// => Does not Use Type Coercion
let x = "20";
let y = 20;
console.log(x == y);
console.log(x === y);
let age = prompt("Enter Yout Age");
if (age === 20) {
  console.log("You are Eligble for Driving");
} else {
  console.log("You are not Eligible for Driving");
}
