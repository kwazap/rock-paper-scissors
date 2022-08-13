function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {

    updateMoves(playerSelection, computerSelection);

    if (playerSelection.toLowerCase() == computerSelection) {
        console.log(`It's a tie!`)
        return 0;
    }
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        console.log(`You win! Rock beats scissors`)
        return 1;
    }
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        console.log(`You lose! Paper beats rock`)
        return -1;
    }
    if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        console.log(`You win! Paper beats rock`)
        return 1;
    }
    if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        console.log(`You lose! Scissors beat paper`)
        return -1;
    }
    if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        console.log(`You win! Scissors beat paper`)
        return 1;
    }
    if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        console.log(`You lose! Rock beats scissors`)
        return -1;
    }
}

function updateMoves(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            playerMove.textContent = "✊";
            break;
        case 'paper':
            playerMove.textContent = "✋";
            break;
        case 'scissors':
            playerMove.textContent = "✌️";
            break;
    }
    switch (computerSelection) {
        case 'rock':
            floppaMove.textContent = "✊";
            break;
        case 'paper':
            floppaMove.textContent = "✋";
            break;
        case 'scissors':
            floppaMove.textContent = "✌️";
            break;
    }
}

function getPlayerSelection(e) {
    let playerChoice = this.classList[0];
    //console.log(playRound(playerChoice, getComputerChoice()));
    let roundResult = playRound(playerChoice, getComputerChoice());
    updateMoveFrame(roundResult);
    if (roundResult == 1) {
        playerScore.textContent = Number(playerScore.textContent) + 1;
        if (playerScore.textContent == 5) {
            gameEnd(1);
        }
    } else if (roundResult == -1) {
        floppaScore.textContent = Number(floppaScore.textContent) + 1;
        if (floppaScore.textContent == 5) {
            gameEnd(0);
        }
    }
}

function updateMoveFrame(roundResult) {
    console.log(playerMoveFrame)
    switch (roundResult) {
        case 1:
            playerMoveFrame.className='last-move win';
            floppaMoveFrame.className='last-move lose';
            break;
        case -1:
            playerMoveFrame.className='last-move lose';
            floppaMoveFrame.className='last-move win';
            break;
        case 0:
            playerMoveFrame.className='last-move tie';
            floppaMoveFrame.className='last-move tie';
            break;
    }
}

function gameEnd(state) {
    if (state) {
        endGameTitle.textContent = "Your victory is temporary and your time finite";
    } else {
        endGameTitle.textContent = "Vanquished";
    }
    buttons.forEach(button => button.style.display = "none");
    newGameButton.style.display = "flex";



}

function newGame() {
    endGameTitle.textContent = "Choose your hand";
    playerScore.textContent = 0;
    floppaScore.textContent = 0;
    newGameButton.style.display = "none";
    buttons.forEach(button => button.style.display = "block");
    floppaMove.textContent = '';
    playerMove.textContent = '';
}

const endGameTitle = document.querySelector('.section2-title');
const middleButton = document.querySelector('.paper');
const playerScore = document.querySelector('.score-player');
const floppaScore = document.querySelector('.score-floppa');
const buttons = document.querySelectorAll('.choice');
const newGameButton = document.querySelector('.new-game');
const choiceButtonSection = document.querySelector('.button-section');
const floppaMove = document.querySelector('.last-move-floppa');
const playerMove = document.querySelector('.last-move-player');
const floppaMoveFrame = floppaMove.parentElement;
const playerMoveFrame = playerMove.parentElement;

buttons.forEach(button => button.addEventListener('click', getPlayerSelection));
newGameButton.addEventListener('click', newGame);

// function game() {
//     let wins = 0;
//     let losses = 0;
//     let i = 0;
//     while (i < 5) {
//         console.log(`start ${i}`);
//         let result = playRound(getPlayerSelection(), getComputerChoice());
//         console.log(result);
//         if (result == 1) {
//             wins++;
//             i++;
//         } else if (result == -1) {
//             losses++;
//             i++;
//         };
//     }
//     console.log(`Final score: ${wins} wins and ${losses} losses`)
// }


