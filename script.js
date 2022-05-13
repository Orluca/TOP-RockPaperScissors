let computerSelection;
let playerSelection;

function computerPlay() {
  // Generate a random integer between 1 and 3
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  // Depending on the generated number, set computerSelection to rock, paper or scissor
  if (randomNumber === 1) {
    computerSelection = "rock";
  } else if (randomNumber === 2) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  // Compares the choices by computer and player and returns the outcome
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

function game() {
  // Plays 5 rounds of the game
  for (let i = 0; i < 5; i++) {
    // First, determine the choices of both players
    computerSelection = computerPlay();
    playerSelection = prompt(
      "Please enter 'Rock', 'Paper or 'Scissors'."
    ).toLowerCase();

    // Next, play a round with those choices
    if (playRound(playerSelection, computerSelection) === "It's a tie!") {
      console.log(
        `It's a tie! Both players chose ${playerSelection.toUpperCase()}.`
      );
    } else {
      console.log(
        `${playRound(
          playerSelection,
          computerSelection
        )} The computer chose ${computerSelection.toUpperCase()} and the player chose ${playerSelection.toUpperCase()}.`
      );
    }
  }
}

game();
