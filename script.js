
/* Function for the computer to randomly return rock, paper, or scissors.*/

function getComputerChoice () {
    let computerSelection = Math.floor((Math.random() * 3) +1);
        if (computerSelection === 1) {
            return 'rock';
        } else if (computerSelection === 2) {
            return 'paper';
        } else {
            return 'scissors';
        }  
}

/* Function to play a single round of Rock Paper Scissors */

function playRound (computerSelection, playerSelection) {
    if (computerSelection === 'rock' && playerSelection === 'rock' || computerSelection === 'paper' && playerSelection === 'paper' || computerSelection === 'scissors' && playerSelection === 'scissors') {
        return result = "It's a tie!"
    } else if (computerSelection === 'paper' && playerSelection === 'rock' || computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'scissors' && playerSelection === 'paper') {
        return result = 'The computer wins.'
    } else if (computerSelection === 'paper' && playerSelection === 'scissors' || computerSelection === 'rock' && playerSelection === 'paper' || computerSelection === 'scissors' && playerSelection === 'rock') {
        return result = 'You win!'
    } else {
        return result = 'Did you spell that right? Type in "Rock", "Paper", or "Scissors" to play.'
    }
}

/* Function to loop the round 5 times into a "game" and keep score while doing it.
    Then present the winner once the loop is complete. */

function game() {
    let playerScore = 0;
        computerScore = 0;

    for (i = 1; i <= 5; i++) {
        if (i <= 5) {
            getComputerChoice();
            let computerSelection = getComputerChoice()
            let playerSelection = prompt('Rock, Paper, or Scissors? Your choice please: ', '').toLowerCase()
            console.log(`You chose ${playerSelection}`);
            console.log(`The computer chose ${computerSelection}`);
            playRound(computerSelection, playerSelection);
            console.log(result);
                if (result === "You win!") {
                    playerScore++;
                } else if (result === "The computer wins.") {
                    computerScore++;
                }
            console.log (`Your score is ${playerScore}`);
            console.log (`The computer's score is ${computerScore}`);    
        }
    }
    if (playerScore > computerScore) {
        return 'GG! You won the game!';
    } else if (computerScore > playerScore) {
        return 'The computer won. Womp womp.';
    } else {
        return 'The game is a tie!';
    }
}
