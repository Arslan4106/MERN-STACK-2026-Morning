// DOM Manipulation
// DOM: Document object Modal
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let random = document.querySelector(".secretNumber").textContent;
console.log(random);
document.querySelector(".secretNumber").textContent = randomNumber;
let check = document.querySelector(".check");
console.log(check);

document.querySelector(".check").addEventListener("click", function () {
  //   console.log("You have Clicked on Check Button");
  let guessNumber = document.querySelector(".guess").value;
  console.log(guessNumber);
});
