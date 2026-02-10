// Functions in JS
function logger() {
  console.log("I am a MERN STACK Developer");
  return "I am Web Trainer";
  console.log("MERN STACK");
}
console.log(logger()); // Calling the Function, Returning the Function, Invoking the Function
logger();
logger();
logger();

// Write a Program to find the Average of 5 numbers
function average() {
  let num1 = 56;
  let num2 = 67;
  let num3 = 88;
  let num4 = 99;
  let num5 = 77;
  let sum = num1 + num2 + num3 + num4 + num5;
  let avg = sum / 5;
  //   let avg = (num1 + num2 + num3 + num4 + num5) / 5;
  console.log(avg);
}
average();
average();
average();

// write a program to find the average marks of multiple students
function avgMarks(studentName, phy, chem, com, mth, isl, urd) {
  // Arguments
  let marksSum = phy + chem + com + mth + isl + urd;
  let avg = marksSum / 6;
  console.log(" The Average of ", studentName, "is: ", avg);
}
avgMarks("Danish", 66, 77, 70, 88, 65, 45); // Parameters
avgMarks("Azeem", 99, 87, 76, 86, 45, 50);
// Write a program to find the mark's Percentage of multiple students using functions
function cutFruits(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, bananas, oranges) {
  let applePieces = cutFruits(apples); // cutFruits(4)
  let bananaPieces = cutFruits(bananas);
  let orangePieces = cutFruits(oranges);
  //  String Cancatenation
  let juice =
    "Juice with" +
    " " +
    applePieces +
    " " +
    "Pieces of Apples" +
    " " +
    bananaPieces +
    " " +
    "Pieces of Bananas and" +
    " " +
    orangePieces +
    " " +
    "Pieces of Oranges";
  console.log(juice);
  console.log(
    "Juice with",
    applePieces,
    "Pieces of Apples",
    bananaPieces,
    "Pieces of Bananas",
    "and",
    orangePieces,
    "pieces of Oranges",
  );

  //   "Juice with",
  //   apples,
  //   "Apples, ",
  //   bananas,
  //   "Bananas and,",
  //   oranges,
  //   "Oranges",
  // );
}
fruitProcessor(4, 6, 8);
