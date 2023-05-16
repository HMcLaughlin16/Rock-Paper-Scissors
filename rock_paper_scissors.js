const getComputerChoice = ['Paper', 'Scissors', 'Rock'];
 
const randGetComputerChoice = getComputerChoice[Math.round(Math.random() * getComputerChoice.length)];

console.log(randGetComputerChoice, getComputerChoice[randGetComputerChoice]);