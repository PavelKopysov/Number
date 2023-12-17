"use strict";

///////////////////////////////////////

/* 
ЗАДАЧА: 
Создайте игру в угадай число.


Удачи)
*/

let secretNum = Math.floor(Math.random() * (20 - 1) + 1);
console.log(secretNum);
let score = 20;
let record = 20;
let resultMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  let record = 1;
  if (score <= 1) {
    resultMessage("Вы проиграли");
    document.querySelector(".score").textContent = score;
  } else if (!guess) {
    resultMessage("Вы не ввели число");
  } else if (guess === secretNum) {
    resultMessage("Вы выиграли!");
    document.body.style.background = "green";
    document.querySelector(".number").textContent = secretNum;
    record = 20 - score + 1;
    if (record < Number(document.querySelector(".highscore").textContent)) {
      document.querySelector(".highscore").textContent = record;
    }
  } else
    guess > secretNum
      ? resultMessage("Слишком много")
      : resultMessage("Слишком мало");
  score--;
  document.querySelector(".score").textContent = score;
});

document.querySelector(".again").addEventListener("click", function () {
  secretNum = Math.floor(Math.random() * (20 - 1) + 1);
  console.log(secretNum);
  document.body.style.background = "black";
  document.querySelector(".message").textContent = "Начните угадывать...";
  document.querySelector(".score").textContent = 20;
  score = 20;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
