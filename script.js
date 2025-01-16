const rockBtn = document.querySelector("#btn-one");
const paperBtn = document.querySelector("#btn-two");
const scissorBtn = document.querySelector("#btn-three");

const resultDisplay = document.querySelector("#result");
const computerScoreDisplay = document.querySelector("#c-score");
const humanScoreDisplay = document.querySelector("#h-score");
const tieRoundsDisplay = document.querySelector("#t-rounds")

const getComputerChoice = () => {
    let options = ["Rock", "Paper", "Scissor"];
    let randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
};


let humanScore = 0;
let computerScore = 0;
let tieRounds = 0
let roundCount = 0;

const playRound = (computerChoice, humanChoice) => {
    if (computerChoice === humanChoice) {
        tieRounds++;
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

const displayFinalResult = () => {
    if (humanScore > computerScore) {
        resultDisplay.textContent = `Game Over! You Won the Game! 🏆`;
    } else if (computerScore > humanScore) {
        resultDisplay.textContent = `Game Over! Computer Won the Game! 🤖`;
    } else {
        resultDisplay.textContent = `Game Over! It's a Tie! 🤝`;
    }

    const refreshMsg = document.createElement("h4");
    refreshMsg.textContent = "Refresh the page, To play Another Series 🔄";
    document.body.appendChild(refreshMsg);
};


const getHumanChoice = (humanChoice) => {

    if (roundCount >= 5) return;

    const computerChoice = getComputerChoice();
    const result = playRound(computerChoice, humanChoice);

    resultDisplay.textContent = result;
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    tieRoundsDisplay.textContent = tieRounds;

    roundCount++;
    console.log(roundCount);

    if (roundCount === 5) {
        displayFinalResult();
    };
};

rockBtn.addEventListener("click", () => {
    getHumanChoice("Rock");
});

paperBtn.addEventListener("click", () => {
    getHumanChoice("Paper");
});

scissorBtn.addEventListener("click", () => {
    getHumanChoice("Scissor");
});
