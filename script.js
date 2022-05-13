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

function formatInput(string) {
  // This function formats the user input, so that it doesn't matter if you write "rock", "Rock" or "ROcK"
  return string.toLowerCase();
}

computerSelection = computerPlay();
playerSelection = prompt();

console.log(`Computer chooses ${computerSelection}`);
console.log(`Player chooses ${playerSelection}`);
