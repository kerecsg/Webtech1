const choices = ["kő", "papír", "olló" ];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice)
{
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  // console.log(computerChoice);
  let result = "";

  if(playerChoice === computerChoice)
  {
    result = "DÖNTETLEN!";
  }
  else
  {
    switch(playerChoice)
    {
      case "kő":
      result = (computerChoice === "olló") ? "NYERTÉL!" : "VESZTETTÉL!";
      break;

      case "papír":
      result = (computerChoice === "kő") ? "NYERTÉL!" : "VESZTETTÉL!";
      break;

      case "olló":
      result = (computerChoice === "papír") ? "NYERTÉL!" : "VESZTETTÉL!";
      break;
    }
  }
  playerDisplay.textContent = `JÁTÉKOS: ${playerChoice}`;
  computerDisplay.textContent = `GÉP: ${computerChoice}`;
  resultDisplay.textContent = result;

  switch(result) {
    case "NYERTÉL!":
        resultDisplay.classList.remove("redText");
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        break;

    case "VESZTETTÉL!":
        resultDisplay.classList.remove("greenText");
        resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        break;

    default:
        resultDisplay.classList.remove("greenText");
        resultDisplay.classList.remove("redText");
        break;
}


}