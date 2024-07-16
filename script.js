let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScoreCount = document.querySelector("#your-score-count");
const compScoreCount = document.querySelector("#comp-score-count");
const msg = document.querySelector("#msg");

//Draw Action
const drawGame = (userChoice) => {
  msg.innerText = `It's a Draw, Both selected ${userChoice}`;
  msg.style.backgroundColor = "#eb5e28";
};
//Check Winner
const checkWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `Congratulations! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userScoreCount.innerText = userScore;
  } else {
    msg.innerText = `Oops! You lost, ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    compScoreCount.innerText = compScore;
  }

  if (userScore > compScore) {
    userScoreCount.style.color = "green";
    compScoreCount.style.color = "red";
  } else if (compScore > userScore) {
    userScoreCount.style.color = "red";
    compScoreCount.style.color = "green";
  } else {
    userScoreCount.style.color = "black";
    compScoreCount.style.color = "black";
  }
};

//Game Logic
const gameLogic = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame(userChoice);
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else if (userChoice === "scissor") {
      userWin = compChoice === "rock" ? false : true;
    }
    checkWinner(userWin, userChoice, compChoice);
  }
};

//Get user input
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    gameLogic(userChoice);
  });
});

//Generate Computer Choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};
