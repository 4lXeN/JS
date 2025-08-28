let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  tie: 0,
};

updateScoreElement();

let isAutoPlay = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlay) {
    intervalId = setInterval(function () {
      const playerMove = pickcomputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlay = true;
  } else {
    clearInterval(intervalId);
    isAutoPlay = false;
  }
}
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Win:${score.wins}, Losses:${score.losses}, Ties: ${score.tie}`;
}
// const autoPlay = () => {

// }
document.querySelector(".js-rock-button").addEventListener("click", () => {
  playGame("rock");
});
document.querySelector(".js-paper-button").addEventListener("click", () => {
  playGame("paper");
});
document.querySelector(".js-scissors-button").addEventListener("click", () => {
  playGame("scissors");
});
function playGame(playerMove) {
  const computerMove = pickcomputerMove();
  // let computerMove;
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "Rock") {
      result = "You win.";
    } else if (computerMove === "Paper") {
      result = "Tie.";
    } else {
      result = "You lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "Rock") {
      result = "Tie.";
    } else if (computerMove === "Paper") {
      result = "You lose.";
    } else {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins++;
  } else if (result === "You lose.") {
    score.losses++;
  } else if (result === "Tie.") {
    score.tie++;
  }

  localStorage.setItem("score", JSON.stringify(score)); // score stringe çevirip depolar.

  updateScoreElement();
  document.querySelector(
    ".js-choose"
  ).innerHTML = `You <img class="move-icon" src="img/${playerMove}-emoji.png" alt="">
    <img class="move-icon" src="img/${computerMove}-emoji.png" alt="">Computer`;
  document.querySelector(".js-result").innerHTML = `${result}`;
  //         alert(
  //           `You picked ${playerMove}. Computer picked ${computerMove}. ${result}
  // Win:${score.wins}, Losses:${score.losses}, Ties: ${score.tie}`
  //         );
}
function pickcomputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors";
  }
  console.log(computerMove);

  return computerMove;
}
