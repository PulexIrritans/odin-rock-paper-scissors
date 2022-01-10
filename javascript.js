const resultDiv = document.querySelector(".results");
const gameoverDiv = document.querySelector(".gameover")
const startButton = document.querySelector("h2")
const buttons = document.querySelectorAll("li");
const gameBoard = document.querySelector(".gameboard")
let computerCount;
let playerCount;

//The computer selects randomly one item from rock, paper, scissors.

function computerPlay() {
  const hand = ["rock", "paper", "scissors"];
  const computerChoice = hand[Math.floor(Math.random() * 3)];
  return computerChoice;
}




//The following function  checks  if one player reached 5 points. In this case this player is the
//overall winner which will be shown below the game board then.


function checkEndOfGame() {
    if (playerCount === 5) {
        gameoverDiv.firstElementChild.innerText = "You are the overall winner!";
        gameoverDiv.style.display = 'flex'
        gameBoard.style.visibility = "hidden";
        playerCount = 0;
        computerCount = 0;
        } else if (computerCount === 5) {
        gameoverDiv.firstElementChild.innerText = "The Computer is the overall winner!"
        gameoverDiv.style.display = 'flex'
        gameBoard.style.visibility = "hidden";
        playerCount = 0;
        computerCount = 0;
    }
  };


//Each single round of the game will compare the computer selection and
//the player selection.
//It will return the information who of the two won the point for the current round.
//If the computer won it will get one more point.
//If the player won it will get on more point.

//The rules are:
//Rock wins over scissors.
//Scissors win over paper.
//Paper wins over rock.
//In case the selection is the same it is a draw.

//The following function manages a single play round based on the above rules.
//It also displays the round results to the player.

function playRound(computerSelection, playerSelection) {
  let statement;
  if (computerSelection === playerSelection) {
    statement = "It's a draw";
  } else
    switch (true) {
      case playerSelection === "rock" && computerSelection === "scissors":
        playerCount++;
        statement = "You win! Rock beats scissors.";
        break;
      case playerSelection === "scissors" && computerSelection === "paper":
        playerCount++;
        statement = "You win! Scissors beat paper.";
        break;
      case playerSelection === "paper" && computerSelection === "rock":
        playerCount++;
        statement = "You win! Paper beats rock.";
        break;
      case playerSelection === "rock" && computerSelection === "paper":
        computerCount++;
        statement = "You lose! Paper beats rock.";
        break;
      case playerSelection === "scissors" && computerSelection === "rock":
        computerCount++;
        statement = "You lose! Rock beats scissors.";
        break;
      case playerSelection === "paper" && computerSelection === "scissors":
        computerCount++;
        statement = "You lose! Scissors beat paper.";
        break;
    }

    resultDiv.innerText =
      statement +
      "\nYour total points: " +
      playerCount +
      "\nComputer total points: " +
      computerCount;

}

// The function playGame is holding two parts. The first one calls the function to manage a single play round.
// The second part checks if the game has ended after each player action.

function playGame(computerSelection, playerSelection) {
    playRound(computerSelection, playerSelection);
    checkEndOfGame(playerCount, computerCount);

};
    
 // The function startgame displays the game board and resets all counters and informational texts to zero/ empty. 

function startgame() {
    gameBoard.style.visibility="visible";
    gameoverDiv.style.display = "none"
    playerCount = 0;
    computerCount = 0;
    resultDiv.innerText = "";
};

// The game board consists of three buttons which will all perform the playGame function when clicked.



buttons.forEach((button) => {
    button.addEventListener("click", () => {
    playGame(computerPlay(), button.id);
    })
});


// click Start New Game starts a game by setting all counters to zero and displaying the game board

startButton.addEventListener("click", startgame);


