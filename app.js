let userscore = 0;
let computerscore = 0;

// Fixed selector ID from #user-score to #player-score
const userscore_span = document.querySelector("#player-score");
const computerscore_span = document.querySelector("#computer-score");
const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");

const generatecomputerChoice = () => {
    // Fixed "scissors" to "scissor"
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const showresult = (userwin, userChoice, computerChoice) => {
    if (userwin) {
        userscore++;
        userscore_span.innerText = userscore;
        console.log("you win!");
        message.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        message.style.backgroundColor = "green";
    } else {
        computerscore++;
        computerscore_span.innerText = computerscore;
        console.log("you lose!");
        message.innerText = `You lose! Your ${computerChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
    }
};

const drawgame = () => {
    console.log("It's a draw!");
    message.innerText = "It's a draw! play again!";
    message.style.backgroundColor = "yellow";
};

const playgame = (userChoice) => {
    console.log("User choice =", userChoice);
    // generate computer choice
    const computerChoice = generatecomputerChoice();
    console.log("Computer choice =", computerChoice);

    if (userChoice === computerChoice) {
        drawgame();
    } else {
        let userwin = true;

        if (userChoice === "rock") {
            userwin = computerChoice === "scissor" ? true : false;
        } else if (userChoice === "paper") {
            userwin = computerChoice === "rock" ? true : false;
        } else {
            userwin = computerChoice === "paper" ? true : false;
        }

        showresult(userwin, userChoice, computerChoice);
    }
};

choices.forEach(choice => choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playgame(userChoice);
}));