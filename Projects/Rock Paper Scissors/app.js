const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    console.log(randomNumber)

    if(randomNumber === 0) {
        computerChoice = 'piedra'
    }

    if(randomNumber === 1) {
        computerChoice = 'tijeras'
    }

    if(randomNumber === 2) {
        computerChoice = 'papel'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Empate'
    }
    if (computerChoice === 'piedra' && userChoice === "papel") {
        result = 'Has ganado!'
    }
    if (computerChoice === 'piedra' && userChoice === "tijeras") {
        result = 'Has perdido!'
    }
    if (computerChoice === 'papel' && userChoice === "tijeras") {
        result = 'Has ganado!'
    }
    if (computerChoice === 'papel' && userChoice === "piedra") {
        result = 'Has perdido!'
    }
    if (computerChoice === 'tijeras' && userChoice === "piedra") {
        result = 'Has ganado!'
    }
    if (computerChoice === 'tijeras' && userChoice === "papel") {
        result = 'Has perdido!'
    }
    resultDisplay.innerHTML = result
}