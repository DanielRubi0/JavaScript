const cardArray = [
    {
        name: 'patatas',
        img: 'img/fries.png',
    },
    {
        name: 'hamburguesa',
        img: 'img/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png',
    },
    {
        name: 'helado',
        img: 'img/ice-cream.png',
    },
    {
        name: 'batido',
        img: 'img/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'img/pizza.png',
    },
    {
        name: 'patatas',
        img: 'img/fries.png',
    },
    {
        name: 'hamburguesa',
        img: 'img/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png',
    },
    {
        name: 'helado',
        img: 'img/ice-cream.png',
    },
    {
        name: 'batido',
        img: 'img/milkshake.png',
    },
    { 
        name: 'pizza',
        img: 'img/pizza.png',
    },
    
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'img/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('Check for match!')
    if(optionOneId == optionTwoId) {
        alert('YOu have clicked the same image!')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src','img/white.png')
        cards[optionTwoId].setAttribute('src','img/white.png')
        cards[optionOneId].removeEventListener('click', flipcard)
        cards[optionTwoId].removeEventListener('click', flipcard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src','img/blank.png')
        cards[optionTwoId].setAttribute('src','img/blank.png')
        alert('Try again!')
    }
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2) {

    }
}


function flipCard() {
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    console.log('clicked', cardId)
    console.log(cardsChosen)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}