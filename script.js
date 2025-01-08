const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log("Random:", randomNumber);
  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
    return "Paper";
  } else if (randomNumber === 3) {
    return "Scissor";
  }
};

const getHumanChoice = () => {
  let userChoice = parseInt(
    prompt("Enter your Choice:\n1-For Rock \n2-For Paper \n3-For Scissor")
  );
  if (userChoice === 1) {
    return "Rock";
  } else if (userChoice === 2) {
    return "Paper";
  } else if (userChoice === 3) {
    return "Scissor";
  } else {
    return "Wrong Input!";
  }
};

let humanScore = 0;
let computerScore = 0;

const playRound = (computerChoice, humanChoice) => {
  if (computerChoice === humanChoice) {
    return `Match Tie!, \nComputer Select: ${computerChoice} \nYou Select: ${humanChoice}`;
  } else if (
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Rock" && computerChoice === "Scissor") ||
    (humanChoice === "Scissor" && computerChoice === "Paper")
  ) {
    humanScore++;
    return `Congratulation, You Won. \nComputer Select: ${computerChoice} \nYou Select: ${humanChoice}`;
  } else if (
    (computerChoice === "Paper" && humanChoice === "Rock") ||
    (computerChoice === "Rock" && humanChoice === "Scissor") ||
    (computerChoice === "Scissor" && humanChoice === "Paper")
  ) {
    computerScore++;
    return `Computer Win!, \nComputer Select: ${computerChoice} \nYou Select: ${humanChoice}`;
  } else {
    return `Wrong Selection, \nComputer Select:${computerChoice} \nYou Select: ${humanChoice}`;
  }
};

const playGame = () => {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getComputerChoice(), getHumanChoice()));
  }

  if (humanScore > computerScore) {
    return `You Won, \nYour Score: ${humanScore} \nComputer Score: ${computerScore}`;
  } else if (computerScore > humanScore) {
    return `Computer Won, \nYour Score: ${humanScore} \nComputer Score: ${computerScore}`;
  } else {
    return `Match Tie! Both Score ${humanScore} - ${computerScore}`;
  }
};

console.log(playGame());
