function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
        case 1:
            return 'rock'
        case 2:
            return 'paper'
        case 3:
            return 'scissors'
    }
}

function playRound(playerSelection, computerSelection) {
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

function getPlayerSelection(e) {
    let playerChoice = this.classList[0];
    console.log(playRound(playerChoice, getComputerChoice()));
    let roundResult = playRound(playerChoice, getComputerChoice());
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

function gameEnd(state) {
    if (state) {
        endGameTitle.textContent = "Your victory is temporary and your time finite";
    } else {
        endGameTitle.textContent = "Vanquished";
    }
    buttons.forEach(button => button.style.display = "none");


}

function newGame() {
    endGameTitle.textContent = "Choose your hand";
    playerScore.textContent = 0;
    floppaScore.textContent = 0;
}

const endGameTitle = document.querySelector('.section2-title');
const middleButton = document.querySelector('.paper');
const playerScore = document.querySelector('.score-player');
const floppaScore = document.querySelector('.score-floppa');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', getPlayerSelection));


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


