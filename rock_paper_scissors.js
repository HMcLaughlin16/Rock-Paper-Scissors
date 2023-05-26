const getComputerChoice = ["Paper", "Scissors", "Rock"];
    const randGetComputerChoice = getComputerChoice[Math.round(Math.random() * getComputerChoice.length)];
    console.log(randGetComputerChoice, getComputerChoice[randGetComputerChoice]);

function round(playerSelection, computerSelection) {
    if (choice1 === "Paper") {
        if (choice2 === "Rock") {
            return "Paper wins!";
        } else {
            if (choice2 === "Scissors") {
                return "Scissors win!";
            } else {
                if (choice2 === "Paper") {
                return "It's a tie!";
                }
            }
        }
    }
    if (choice1 === "Rock") {
        if (choice2 === "Paper") {
            return "Paper wins!";
        } else {
            if (choice2 === "Scissors") {
                return "Rock wins!";
            } else {
                if (choice2 === "Rock") {
                    return "It's a tie!";
                }
            }
        }
    }
    if (choice1 === "Scissors") {
        if (choice2 === "Rock") {
            return "Rock wins!";
        } else {
            if (choice2 === "Paper") {
                return "Scissors win!";
            } else {
                if (choice2 === "Scissors") {
                    return "It's a tie!";
                }
            }
        }
    }
}