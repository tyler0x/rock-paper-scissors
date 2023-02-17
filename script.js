
/* Function for the computer to randomly return rock, paper, or scissors.

    Create a function called "getComputerChoice"
    Randomly return rock or paper or scissors */

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

/* Function to play a single round of Rock Paper Scissors

    Create a playerSelection variable that prompts the player for a selection
    The playerSelection parameter should be case-insensitive
    Create a function that takes two parameters: playerSelection and computerSelection
    Return a string that declares the winner of the round*/

function playerSelection () {
    let playerSelection = prompt('Rock, Paper, or Scissors? Your choice please: ', '').toLowerCase()
    if (playerSelection === 'rock') {
        return 1;
    } else if (playerSelection === 'paper') {
        return 2;
    } else if (playerSelection === 'scissors') {
        return 3;
    } else {
        return 'Please type in "Rock, Paper" or "Scissors" to play the game.'
    }
}


