let computerSelection;
let playerSelection;

let computerScore = 0;
let playerScore = 0;

// Variables for HTML objects
const ElWeaponIconComputer = document.getElementById("computer-weapon");
const ElWeaponIconPlayer = document.getElementById("player-weapon");
const ElScoreComputer = document.getElementById("computer-score");
const ElScorePlayer = document.getElementById("player-score");
const ElFinalScorePlayer = document.getElementById("player-score-final");
const ElFinalScoreComputer = document.getElementById("computer-score-final");
const ElPopupWindow = document.getElementById("popup-window-background");
const ElPopupWindowText = document.getElementById("popup-text");
const ElPopupOverlay = document.getElementById("popup-overlay");
const ElWinnerSign = document.getElementById("winner-sign");

function computerPlay() {
  // THIS FUNCTION RANDOMLY DETERMINES A CHOICE BETWEEN "ROCK", "PAPER" OR "SCISSOR" FOR THE COMPUTER

  // Generate a random integer between 1 and 3
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  // Depending on the generated number, set computerSelection to rock, paper or scissor. Also update the icon in the HTML accordingly.
  if (randomNumber === 1) {
    computerSelection = "rock";
    ElWeaponIconComputer.innerHTML = "🗻";
  } else if (randomNumber === 2) {
    computerSelection = "paper";
    ElWeaponIconComputer.innerHTML = "📃";
  } else {
    computerSelection = "scissors";
    ElWeaponIconComputer.innerHTML = "✂";
  }
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  // THIS FUNCTION PLAYS A SINGLE ROUND OF "ROCK PAPER SCISSOR"

  // Compares the choices by computer and player and determines if there is a winner, and if yes, who the winner is
  if (computerSelection === playerSelection) {
    return "IT'S A TIE!";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return "THE COMPUTER WINS!";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return "THE COMPUTER WINS!";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    return "THE COMPUTER WINS!";
  } else {
    return "THE PLAYER WINS!";
  }
}

function game(userChoice) {
  // First, determine the choices of both players
  computerSelection = computerPlay();
  playerSelection = userChoice;

  // Next, play a round with those choices
  if (playRound(playerSelection, computerSelection) === "IT'S A TIE!") {
    ElWinnerSign.textContent = "It's a tie!";
    ElWinnerSign.style.color = "antiquewhite";
  } else if (playRound(playerSelection, computerSelection) === "THE COMPUTER WINS!") {
    ElWinnerSign.textContent = "THE COMPUTER WINS!";
    ElWinnerSign.style.color = "rgb(255, 135, 135)";
    computerScore += 1;
    ElScoreComputer.textContent = computerScore;
    playAnimation("computer-score", "wiggle-animation", 250);
  } else {
    ElWinnerSign.textContent = "YOU WIN!";
    ElWinnerSign.style.color = "rgb(159, 255, 85)";
    playerScore += 1;
    ElScorePlayer.textContent = playerScore;
    playAnimation("player-score", "wiggle-animation", 250);
  }
  playAnimation("player-weapon", "grow-animation", 200);
  playAnimation("computer-weapon", "grow-animation", 200);
  playAnimation("winner-sign", "falling-animation", 300);
  checkTotalScore();
}

function checkTotalScore() {
  // THIS FUNCTION CHECKS THE CURRENT TOTAL SCORES AND ENDS THE GAME IF SOMEONE REACHES 5 POINTS
  if (computerScore === 5) {
    ElFinalScorePlayer.textContent = playerScore;
    ElFinalScoreComputer.textContent = computerScore;
    ElPopupWindow.style.backgroundColor = "rgb(255, 179, 179)";
    ElPopupWindowText.textContent = "THE COMPUTER WON!";
    ElPopupOverlay.style.display = "block";
    playAnimation("popup-window-background", "modal-window-animation", 1000);
  } else if (playerScore === 5) {
    ElFinalScorePlayer.textContent = playerScore;
    ElFinalScoreComputer.textContent = computerScore;
    ElPopupWindow.style.backgroundColor = "rgb(213, 255, 161)";
    ElPopupWindowText.textContent = "YOU WON!";
    ElPopupOverlay.style.display = "block";
    playAnimation("popup-window-background", "modal-window-animation", 1000);
  }
}

function playAnimation(id, name, time) {
  startAnimation(id, name);
  setTimeout(() => {
    endAnimation(id, name);
  }, time);
}

function startAnimation(id, name) {
  document.getElementById(id).classList.add(name);
}

function endAnimation(id, name) {
  document.getElementById(id).classList.remove(name);
}

// LISTEN FOR BUTTON PRESSES
document.getElementById("btn-rock").onclick = function () {
  ElWeaponIconPlayer.textContent = "🗻";
  game("rock");
};

document.getElementById("btn-paper").onclick = function () {
  ElWeaponIconPlayer.textContent = "📃";
  game("paper");
};

document.getElementById("btn-scissors").onclick = function () {
  ElWeaponIconPlayer.textContent = "✂";
  game("scissors");
};

// RESTART GAME BUTTON
document.getElementById("btn-restart").onclick = function () {
  // Close the popup window
  ElPopupOverlay.style.display = "none";

  // Reset the weapon symbols and the winner sign
  ElWeaponIconPlayer.textContent = "";
  ElWeaponIconComputer.textContent = "";
  ElWinnerSign.textContent = "";

  // Reset the score and update the scoreboard accordingly
  computerScore = 0;
  playerScore = 0;
  ElScorePlayer.textContent = playerScore;
  ElScoreComputer.textContent = computerScore;
};
