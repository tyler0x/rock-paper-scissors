
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

let computerSelection = getComputerChoice()
let playerSelection = prompt('Rock, Paper, or Scissors? Your choice please: ', '').toLowerCase()

function playRound (computerSelection, playerSelection) {
    if (computerSelection === 'rock' && playerSelection === 'rock' || computerSelection === 'paper' && playerSelection === 'paper' || computerSelection === 'scissors' && playerSelection === 'scissors') {
        return result = "It's a tie!"
    } else if (computerSelection === 'paper' && playerSelection === 'rock' || computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'scissors' && playerSelection === 'paper') {
        return result = 'The computer wins.'
    } else if (computerSelection === 'paper' && playerSelection === 'scissors' || computerSelection === 'rock' && playerSelection === 'paper' || computerSelection === 'scissors' && playerSelection === 'rock') {
        return result = 'You win!'
    } else {
        return result = 'Please enter a valid choice to play the game: "Rock", "Paper", or "Scissors".'
    }
}

/* Create a new function called game() 
    Call the playRound function
    Loop it 5 times
    Keep score of who wins
    Report a winner or loser at the end*/

function game() {
    for (i = 0; i <= 5; i++) {
        if (i <= 5) {
            getComputerChoice();
            let playerSelection = prompt('Rock, Paper, or Scissors? Your choice please: ', '').toLowerCase()
            console.log(playerSelection);
            console.log(computerSelection);
            playRound(computerSelection, playerSelection);
            console.log(result);
        } 

    }
}