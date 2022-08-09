

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
    }
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        console.log(`You win! Rock beats scissors`)
    }
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        console.log(`You lose! Paper beats rock`)
    }
    if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        console.log(`You win! Paper beats rock`)
    }
    if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        console.log(`You lose! Scissors beat paper`)
    }
    if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        console.log(`You win! Scissors beat paper`)
    }
    if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        console.log(`You lose! Rock beats scissors`)
    }
    console.log(playerSelection, computerSelection);
}

function getPlayerSelection() {
    return prompt('Rock paper scissors!')
}

playRound(getPlayerSelection(), getComputerChoice());

