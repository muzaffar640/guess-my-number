"use strict";

//generate random number between 1-20

let randomNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

//On Clicking Check button
document.querySelector(".check").addEventListener("click", function () {
  const guessedNumber = Number(document.querySelector("input").value);
  if (!guessedNumber) {
    displayMessage("🙏 Please provide a number");
  } else if (guessedNumber === randomNumber) {
    displayMessage("💐💐 You are correct. 🚀🚀");
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#38E54D";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guessedNumber !== randomNumber) {
    if (score > 1) {
      /* The condition is if the difference is more than 5 then it should be 
    Too Much or Too Low and if it is less than 5 then it should be 
    Little Low or Little High */
      if (guessedNumber > randomNumber) {
        if (randomNumber - guessedNumber < -5) {
          displayMessage("🔭 Too high 🔭");
        } else {
          displayMessage("🔬 Little high 🔬");
        }
      } else {
        if (randomNumber - guessedNumber > 5) {
          displayMessage("🔭 Too low 🔭");
        } else {
          displayMessage("🔬 Little low 🔬");
        }
      }
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game! 🙈🙈🙈👎👎👎");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Resetting the game onClicking Again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.floor(Math.random() * 20 + 1);
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
