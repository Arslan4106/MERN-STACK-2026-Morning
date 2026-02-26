// DOM Manipulation
// DOM: Document object Modal
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let random = document.querySelector(".secretNumber").textContent;
console.log(random);
// document.querySelector(".secretNumber").textContent = randomNumber;
let check = document.querySelector(".check");
console.log(check);
let scoreJs = 20;
document.querySelector(".check").addEventListener("click", function () {
  //   console.log("You have Clicked on Check Button");
  // let scoreJs = 20;
  let guessNumber = document.querySelector(".guess").value;
  console.log(guessNumber);
  if (!guessNumber) {
    if (scoreJs > 1) {
      document.querySelector(".heading").textContent = "No Number 😡";
      scoreJs--;
      document.querySelector(".score").textContent = scoreJs;
    } else {
      document.querySelector(".heading").textContent =
        "You Have Lost the Game 😭";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (guessNumber == randomNumber) {
    document.querySelector(".heading").textContent = "Correct Number 👉";
    document.querySelector("body").style.backgroundColor = "green";
  } else if (guessNumber > randomNumber) {
    if (scoreJs > 1) {
      document.querySelector(".heading").textContent = "Too High 📈";
      scoreJs--; // scoreJs = scoreJs - 1;
      document.querySelector(".score").textContent = scoreJs;
    } else {
      document.querySelector(".heading").textContent =
        "You Have Lost the Game 😭";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (guessNumber < randomNumber) {
    if (scoreJs > 1) {
      document.querySelector(".heading").textContent = "Too Low 📉";
      scoreJs--;
      document.querySelector(".score").textContent = scoreJs;
    } else {
      document.querySelector(".heading").textContent =
        "You Have Lost the Game 😭";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});
