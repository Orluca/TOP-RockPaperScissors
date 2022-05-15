let computerSelection;
let playerSelection;

let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  // THIS FUNCTION RANDOMLY DETERMINES A CHOICE BETWEEN "ROCK", "PAPER" OR "SCISSOR" FOR THE COMPUTER

  // Generate a random integer between 1 and 3
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  // Depending on the generated number, set computerSelection to rock, paper or scissor. Also update the icon in the HTML accordingly.
  if (randomNumber === 1) {
    computerSelection = "rock";
    document.getElementById("computer-weapon").innerHTML = "🗻";
  } else if (randomNumber === 2) {
    computerSelection = "paper";
    document.getElementById("computer-weapon").innerHTML = "📃";
  } else {
    computerSelection = "scissors";
    document.getElementById("computer-weapon").innerHTML = "✂";
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
  const sign = document.getElementById("winner-sign");

  // First, determine the choices of both players
  computerSelection = computerPlay();
  playerSelection = userChoice;

  // Next, play a round with those choices
  if (playRound(playerSelection, computerSelection) === "IT'S A TIE!") {
    sign.textContent = "It's a tie!";
    sign.style.color = "antiquewhite";
  } else if (playRound(playerSelection, computerSelection) === "THE COMPUTER WINS!") {
    sign.textContent = "THE COMPUTER WINS!";
    sign.style.color = "rgb(255, 135, 135)";
    computerScore += 1;
    document.getElementById("computer-score").textContent = computerScore;
    playAnimation("computer-score", "wiggle-animation", 250);
  } else {
    sign.textContent = "YOU WIN!";
    sign.style.color = "rgb(159, 255, 85)";
    playerScore += 1;
    document.getElementById("player-score").textContent = playerScore;
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
    document.getElementById("player-score-final").textContent = playerScore;
    document.getElementById("computer-score-final").textContent = computerScore;
    document.getElementById("popup-window-background").style.backgroundColor = "rgb(255, 179, 179)";
    document.getElementById("popup-text").textContent = "THE COMPUTER WON!";
    document.getElementById("popup-window").style.display = "block";
    playAnimation("popup-window-background", "modal-window-animation", 1000);
  } else if (playerScore === 5) {
    document.getElementById("player-score-final").textContent = playerScore;
    document.getElementById("computer-score-final").textContent = computerScore;
    document.getElementById("popup-window-background").style.backgroundColor = "rgb(213, 255, 161)";
    document.getElementById("popup-text").textContent = "YOU WON!";
    document.getElementById("popup-window").style.display = "block";
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
  document.getElementById("player-weapon").textContent = "🗻";
  game("rock");
};

document.getElementById("btn-paper").onclick = function () {
  document.getElementById("player-weapon").textContent = "📃";
  game("paper");
};

document.getElementById("btn-scissors").onclick = function () {
  document.getElementById("player-weapon").textContent = "✂";
  game("scissors");
};

// RESTART GAME BUTTON
document.getElementById("btn-restart").onclick = function () {
  // Close the popup window
  document.getElementById("popup-window").style.display = "none";

  // Reset the weapon symbols and the winner sign
  document.getElementById("player-weapon").textContent = "";
  document.getElementById("computer-weapon").textContent = "";
  document.getElementById("winner-sign").textContent = "";

  // Reset the score and update the scoreboard accordingly
  computerScore = 0;
  playerScore = 0;
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
};

/*-------------------- TESTING AREA --------------------*/
const testButton = document.getElementById("test-button");

testButton.onclick = function () {
  playAnimation("player-weapon", "grow-animation");
};
