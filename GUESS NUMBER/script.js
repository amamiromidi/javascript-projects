
const guess = document.querySelector('.guess')
let chances = 20;
let score = 0;



let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

guess.addEventListener('click' , function() {
    let inputNumber;
    inputNumber = Number(document.querySelector('.input').value);
    // console.log(inputNumber)

    if (inputNumber === secretNumber) {
        document.querySelector('.win').classList.remove('hidden');
        document.querySelector('.low').classList.add('hidden');
        document.querySelector('.high').classList.add('hidden');
        document.querySelector('.get--ready').classList.add('hidden');
        document.querySelector('.lost').classList.add('hidden');

        document.querySelector('.circle').style.background = "green"
        
        if (score < chances) {
        score = Number(document.querySelector('.chances').textContent);
        document.querySelector('.score').textContent = score;
        }


    } else if (inputNumber > secretNumber) {
        document.querySelector('.high').classList.remove('hidden');
        document.querySelector('.low').classList.add('hidden');
        document.querySelector('.get--ready').classList.add('hidden');
        document.querySelector('.lost').classList.add('hidden');


        chances--;
        document.querySelector('.chances').textContent = chances;
        if (chances < 1) {
            document.querySelector('.lost').classList.remove('hidden');
            document.querySelector('.win').classList.add('hidden');
            document.querySelector('.low').classList.add('hidden');
            document.querySelector('.high').classList.add('hidden');
            document.querySelector('.get--ready').classList.add('hidden');

            document.querySelector('.chances').textContent = '-'
            document.querySelector('.circle').style.background = "red"

        }


    } else if (inputNumber < secretNumber) {
        document.querySelector('.low').classList.remove('hidden');
        document.querySelector('.high').classList.add('hidden');
        document.querySelector('.get--ready').classList.add('hidden');        document.querySelector('.lost').classList.add('hidden');
        
        chances--;
        document.querySelector('.chances').textContent = chances;
        if (chances < 1) {
            document.querySelector('.lost').classList.remove('hidden');
            document.querySelector('.win').classList.add('hidden');
            document.querySelector('.low').classList.add('hidden');
            document.querySelector('.high').classList.add('hidden');
            document.querySelector('.get--ready').classList.add('hidden');

            document.querySelector('.chances').textContent = '-'
            document.querySelector('.circle').style.background = "red"

        }


    } else if (!inputNumber) {
        console.log('not a number')
    }
})

document.querySelector('.reset').addEventListener('click' , function() {
    document.querySelector('.win').classList.add('hidden');
    document.querySelector('.low').classList.add('hidden');
    document.querySelector('.high').classList.add('hidden');
    document.querySelector('.get--ready').classList.remove('hidden');
    document.querySelector('.lost').classList.add('hidden');

    document.querySelector('.input').value = ""
    chances = 20;
    document.querySelector('.chances').textContent = chances;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    document.querySelector('.circle').style.background = "gray"


})


