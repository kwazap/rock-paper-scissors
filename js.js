

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

function getPlayerSelection() {
    return prompt('Rock paper scissors!')
}

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


