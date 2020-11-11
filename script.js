document.addEventListener('DOMContentLoaded', () => {
    
    //card options
    const cardArray = [
        {
            name: 'camille',
            img: 'images/img1.png'
        },
        {
            name: 'camille',
            img: 'images/img1.png'
        },
        {
            name: 'eileen',
            img: 'images/img2.png'
        },  
        {
            name: 'eileen',
            img: 'images/img2.png'
        },
        {
            name: 'brandi',
            img: 'images/img3.png'
        },
        {
            name: 'brandi',
            img: 'images/img3.png'
        },
        {
            name: 'adrienne',
            img: 'images/img4.png'
        },
        {
            name: 'adrienne',
            img: 'images/img4.png'
        },
        {
            name: 'taylor',
            img: 'images/img5.png'
        },
        {
            name: 'taylor',
            img: 'images/img5.png'
        },
        {
            names: 'erika',
            img: 'images/img6.png'
        },
        {
            name: 'erika',
            img: 'images/img6.png'
        },
        {
            name: 'dorit',
            img: 'images/img7.png'
        },
        {
            name: 'dorit',
            img: 'images/img7.png'
        },
        {
            name: 'lisar',
            img: 'images/img8.png'
        },
        {
            name: 'lisar',
            img: 'images/img8.png'
        },
        {
            name: 'lisav',
            img: 'images/img9.png'
        },
        {
            name: 'lisav',
            img: 'images/img9.png'
        },
        {
            name: 'kyle',
            img: 'images/img10.png'
        },
        {
            name: 'kyle',
            img: 'images/img10.png'
        },
        {
            name: 'yolanda',
            img: 'images/img11.png'
        },
        {
            name: 'yolanda',
            img: 'images/img11.png'
        },
        {
            name: 'garcelle',
            img: 'images/img12.png'
        },
        {
            name: 'garcelle',
            img: 'images/img12.png'
        }
    ]
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []

    // create your board
    function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/cover.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card);

        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
    
        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/cover.png')
            cards[optionTwoId].setAttribute('src', 'images/cover.png')
            alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/cover.png')
            cards[optionTwoId].setAttribute('src', 'images/cover.png')
            alert('Sorry, try again!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = ' ' + 'Congratulations! You found them all!'
        }
    }

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length ===2) {
            setTimeout(checkForMatch, 500);
        }
    }

createBoard()

})