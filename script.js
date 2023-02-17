
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
        return "It's a tie!"
    } else if (computerSelection === 'paper' && playerSelection === 'rock' || computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'scissors' && playerSelection === 'paper') {
        return 'The computer wins.'
    } else if (computerSelection === 'paper' && playerSelection === 'scissors' || computerSelection === 'rock' && playerSelection === 'paper' || computerSelection === 'scissors' && playerSelection === 'rock') {
        return 'You win!'
    } else {
        return 'Please enter a valid choice to play the game: "Rock", "Paper", or "Scissors".'
    }
}

console.log(`The computer chose ${computerSelection}`);
console.log(`You chose ${playerSelection}`);
console.log (playRound(computerSelection, playerSelection));
