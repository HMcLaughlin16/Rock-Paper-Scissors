const prompt = require("prompt-sync")();

const getComputerChoice = [/"Paper"/i, /"Scissors"/i, /"Rock"/i];
    const randGetComputerChoice = getComputerChoice[Math.round(Math.random() * getComputerChoice.length)];
    console.log(randGetComputerChoice, getComputerChoice[randGetComputerChoice]);

function round(playerSelection, computerSelection) {
    const choice1 = [/"Paper"/i || /"Scissors"/i || /"Rock"/i];
    const choice2 = [/"Paper"/i || /"Scissors"/i || /"Rock"/i];
    if (choice1 === /"Paper"/i) {
        if (choice2 === /"Rock"/i) {
            return "Paper wins!";
        } else {
            if (choice2 === /"Scissors"/i) {
                return "Scissors win!";
            } else {
                if (choice2 === /"Paper"/i) {
                return "It's a tie!";
                }
            }
        }
    }
    if (choice1 === /"Rock"/i) {
        if (choice2 === /"Paper"/i) {
            return "Paper wins!";
        } else {
            if (choice2 === /"Scissors"/i) {
                return "Rock wins!";
            } else {
                if (choice2 === /"Rock"/i) {
                    return "It's a tie!";
                }
            }
        }
    }
    if (choice1 === /"Scissors"/i) {
        if (choice2 === /"Rock"/i) {
            return "Rock wins!";
        } else {
            if (choice2 === /"Paper"/i) {
                return "Scissors win!";
            } else {
                if (choice2 === /"Scissors"/i) {
                    return "It's a tie!";
                }
            }
        }
    }
    return;
}

function game() {
    function round() {
        for (i = 0; i < 6; i++) {
            console.log(round(playerSelection, computerSelection));
        }
    }
}

let answer = prompt("Select one, please.");
console.log(answer);