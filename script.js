
/* Function for the computer to randomly return rock, paper, or scissors.

    Create a function called "getComputerChoice"
    Randomly return rock or paper or scissors */

function getComputerChoice () {
    let choice = Math.floor((Math.random() * 3) +1);
        if (choice === 1) {
            return 'rock';
        } else if (choice === 2) {
            return 'paper';
        } else {
            return 'scissors';
        }
    console.log(choice)    
}