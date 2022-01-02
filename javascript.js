//The computer selects randomly one item from rock, paper, scissors.

function computerPlay() {
    const hand = ['rock', 'paper', 'scissors'];
    const computerChoice = hand[Math.floor(Math.random()*3)];
    return computerChoice;
}

//The player is asked to input one of the items.
//The input is case insensitive.


function playerPlay() {
    playerchoice = prompt('Type in your choice:').toLowerCase();
    return playerchoice;
}


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

function playRound(computerSelection, playerSelection) {
   
    let statement;
    if (computerSelection === playerSelection) {
        statement=('It\'s a draw');
    } else switch (true) {
        case (playerSelection==='rock' && computerSelection==='scissors'):
            playerCount++;
            statement=('You win! Rock beats scissors.');
            break;
        case (playerSelection==='scissors' && computerSelection==='paper'):
            playerCount++;
            statement=('You win! Scissors beat paper.');
            break;
        case (playerSelection==='paper' && computerSelection==='rock'):
            playerCount++;
            statement=('You win! Paper beats rock.');
            break;
        case (playerSelection==='rock' && computerSelection==='paper'):
            computerCount++;
            statement=('You lose! Paper beats rock.');
            break;
        case (playerSelection==='scissors' && computerSelection==='rock'):
            computerCount++;
            statement=('You lose! Rock beats scissors.');
            break;
        case (playerSelection==='paper' && computerSelection==='scissors'):
            computerCount++;
            statement=('You lose! Scissors beat paper.');
            break;
    }

   alert (statement + '\nYour total points: ' + playerCount + '\nComputer total points: ' + computerCount);
   return (statement, playerCount, computerCount);
}
           



//A complete  game play consists of 5 single rounds.
//If all rounds have been played the overall winner will be
//returned based on the points.

function game() {
    for (let i=1; i<=5; i++) {
    playRound(computerPlay(),playerPlay());
    }
    if (playerCount>computerCount) {
        alert ('You are the overall winner!');
    } else if (playerCount<computerCount) {
        alert ('The computer is the overall winner!')
    } else {
        alert ('It\'s a draw');
    }
}

let playerCount = 0;
let computerCount = 0;
game();