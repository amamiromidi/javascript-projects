const btnDice = document.querySelector('.btn--dice');
const btnHold = document.querySelector('.btn--hold');
const btnReset = document.querySelector('.btn--reset')
const dice = document.querySelector('.dice');
let current1 = document.querySelector('.current--score1');
let current2 = document.querySelector('.current--score2');

let currentScore = 0;
let activePlayer = 1;
let scores = [0,0,0];




btnDice.addEventListener('click' , function() {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.textContent = diceNumber;
    currentScore += diceNumber;
    document.querySelector(`.current--score${activePlayer}`).textContent = currentScore;


    if (scores[activePlayer] >= 100) {
        dice.textContent = '🎉';
        document.querySelector(`.current--score${activePlayer}`).textContent = 0;

    }

    else if (diceNumber === 1 && activePlayer === 1) {
        currentScore = 0;
        document.querySelector(`.current--score${activePlayer}`).textContent = currentScore;
        activePlayer = 2;



    } else if (diceNumber === 1 && activePlayer === 2) {
        currentScore = 0;
        document.querySelector(`.current--score${activePlayer}`).textContent = currentScore;
        activePlayer = 1;

    }

})

btnHold.addEventListener('click' , function() {
    scores[activePlayer] += currentScore;
    document.querySelector(`.total--${activePlayer}`).textContent = scores[activePlayer];
    currentScore = 0;
    document.querySelector(`.current--score${activePlayer}`).textContent = currentScore;

    if (scores[activePlayer] >= 100){
        document.querySelector(`.winner--${activePlayer}`).classList.add('winner');

        dice.textContent = '🎉';
        document.querySelector(`.current--score${activePlayer}`).textContent = 0;


    } else if (activePlayer === 1) {
        activePlayer = 2;
    } else if (activePlayer === 2){
        activePlayer = 1;
    } 


})


btnReset.addEventListener('click' , function() {
    if (scores[activePlayer] >= 100) {
    document.querySelector(`.winner--${activePlayer}`).classList.toggle('winner');
    currentScore = 0;
    document.querySelector(`.current--score1`).textContent = currentScore;
    document.querySelector(`.current--score2`).textContent = currentScore;
    document.querySelector(`.total--1`).textContent = 0;
    document.querySelector(`.total--2`).textContent = 0;
    activePlayer = 1;
    scores = [0,0,0];
    dice.textContent = 1;
    }
})


