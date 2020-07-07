let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => { // generates a random number between 0 and 9
    return Math.floor(Math.random() * 10);
};
const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
};
const compareGuesses = (humanGuess, computerGuess, target) => { // compares human vs. computer guess to determine who was closer
    if (humanGuess > 9) {
        return error;
    } else if (humanGuess <= 9) {
        return humanGuess;
    }
    if (getAbsoluteDistance(humanGuess, target) < getAbsoluteDistance(computerGuess, target)) {
        return true;
    } else if (getAbsoluteDistance(humanGuess, target) > getAbsoluteDistance(computerGuess, target)) {
        return false;
    }
};
const updateScore = winner => { // updates the scoreboard based on compareGuesses
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};
const advanceRound = () => { // advances the current round
    currentRoundNumber++;
};

