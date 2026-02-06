// Logical Operators: (&&, ||, !, NAND, NOR)
// if (condition) {
//   Statement;
// } else {
//   Statement;
// }
let age = 25;
if (age >= 18) {
  console.log("You can Drive, You are above 18");
} else {
  console.log("You cannot Drive, You are below 18");
}
if (age >= 20) {
  console.log("You can Vote for a party");
} else {
  console.log("You cannot vote for a party");
}

// write a program to find the greater number between two numbers
let num1 = 90;
let num2 = 67;
if (num1 > num2) {
  console.log("num1 is greater than num2: ", num1, "vs", num2);
} else {
  console.log("num2 is greater than num1: ", num1, "vs", num2);
}

// Nested if Statement
// write a program to find the greater number between three numbers using nested if statement
let a = 566;
let b = 891;
let c = 4422;
if (a > b) {
  if (a > c) {
    console.log(
      "a is greater between three random numbers:",
      a,
      "vs",
      b,
      "vs",
      c,
    );
  } else {
    console.log(
      "c is greater between three random numbers:",
      a,
      "Vs",
      b,
      "Vs",
      c,
    );
  }
} else {
  if (b > c) {
    console.log(
      "b is greater between three random numbers: ",
      a,
      "vs",
      b,
      "vs",
      c,
    );
  } else {
    console.log(
      "c is greater between three random numbers: ",
      a,
      "vs",
      b,
      "vs",
      c,
    );
  }
}
// if-else and else-if statement
// if (condition) {
//   statement;
// } else if (condition) {
//   statemnt;
// } else if (condition) {
//   statement;
// } else if (condition) {
//   statement;
// } else if (condition) {
//   statement;
// } else {
//   statement;
// }

let marks = 30;
if (marks >= 90 && marks <= 100) {
  console.log("Your Grade is A+");
} else if (marks >= 80 && marks < 90) {
  console.log("Your grade is A");
} else if (marks >= 70 && marks < 80) {
  console.log("Your grade is B+");
} else if (marks >= 60 && marks < 70) {
  console.log("Your grade is B");
} else if (marks >= 50 && marks < 60) {
  console.log("Your grade is C");
} else {
  console.log("You are Fail");
}

// The Switch Statement
let day = 8;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Please Enter the Correct Number");
}

//
if (day == 1) {
  console.log("Monday");
} else if (day == 2) {
  console.log("Tuesday");
} else if (day == 3) {
  console.log("Wednesday");
} else if (day == 4) {
  console.log("Thursday");
} else if (day == 5) {
  console.log("Friday");
} else if (day == 6) {
  console.log("Saturday");
} else if (day == 7) {
  console.log("Sunday");
} else {
  console.log("Please Enter the Correct Number");
}
