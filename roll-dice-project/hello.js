const rectangleImage1 = document.getElementById("rectangle1");
const btn = document.getElementById("btn");
const rectangleImage2 = document.getElementById("rectangle2");
const text = document.getElementById("text");

let humanNumber = "1";
let computerNumber = "1";

btn.addEventListener("click", () => {
  humanNumber = generateRamdomNumber();
  computerNumber = generateRamdomNumber();
  const result = checkWinner(humanNumber, computerNumber);
  text.innerHTML = result;
  rectangleImage1.src = `images/Rectangle0${humanNumber.toString()}.png`;
  rectangleImage2.src = `images/Rectangle0${computerNumber.toString()}.png`;
});

function checkWinner(dice1, dice2) {
  if (dice1 > dice2) {
    return "Human wins.";
  } else if (dice1 === dice2) {
    return "Human and computer draw.";
  } else {
    return "Computer wins.";
  }
}

function generateRamdomNumber() {
  const randomNumber = 1 + Math.random() * 6;
  const result = Math.floor(randomNumber);
  return result;
}
