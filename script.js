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
  if (computerSelection === playerSelection) {
    return "It's a tie!";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return "The Computer wins!";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return "The Computer wins!";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    return "The Computer wins!";
  } else {
    return "The Player wins!";
  }
}

computerSelection = computerPlay();
playerSelection = prompt(
  "Please enter 'Rock', 'Paper or 'Scissors'."
).toLowerCase();

console.log(`Computer chooses ${computerSelection}`);
console.log(`Player chooses ${playerSelection}`);

console.log(playRound(playerSelection, computerSelection));
