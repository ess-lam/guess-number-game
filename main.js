//--------------MODEL-------------------------------------
let randomNumber = Math.floor(Math.random()*100)+1;
let turnNumber = 1;
const numberEnter = document.querySelector('input');
let guess = 0;
let numbers = new Array();

//------------VIEW---------------------------------------------
const Foot = document.getElementById('foot');
const theGuesses = document.getElementById('guesses');
const submit = document.getElementById('submit');
theGuesses.focus();

const successMessage = () => {
    const congrats = document.createElement('p');
    Foot.appendChild(congrats);
    congrats.textContent = 'Congratulations! You got it right!';
    congrats.style = 'color:white; background-color:green;'

    gameOver();
}
const failingTheGame = () => {
    const message = document.createElement('p');
    Foot.appendChild(message);
    message.textContent = '!!!GAME OVER!!!';
    message.style = 'color:white; background-color:red;';
    gameOver();
} 
const gameOver = () => {
    theGuesses.disabled = true;
    submit.disabled = true;

    const restartButton = document.createElement('button');
    Foot.appendChild(restartButton);
    restartButton.textContent = 'start new game';
    restartButton.onclick = onReset;
}

const failMessage = (guessRange) => {
    const Fail = document.createElement('p');
    Foot.appendChild(Fail);
    Fail.textContent = 'Wrong!';
    Fail.style = 'color:white; background-color:red;'

    const guessCheck = document.createElement('div');
    Foot.appendChild(guessCheck);
    guessCheck.textContent = `Last guess was too ${guessRange}!`;
}

const prevGuess = () => {
    const text = document.createElement('p');
    Foot.appendChild(text);
    text.innerText = 'Previous guesses: ';

    numbers.forEach(num => {
        text.innerText += ' ' + num;
    });
}

//-------------CONTROLER----------------------------------------

const onReset = () => {
    Foot.innerHTML = '';
    turnNumber = 1;
    randomNumber = Math.floor(Math.random()*100)+1;
    numbers = [];
    theGuesses.disabled = false;
    theGuesses.focus();
    submit.disabled = false;
}

submit.onclick = () => {
    Foot.innerHTML = '';
    guess = Number(numberEnter.value);
    numbers.push(guess);
    prevGuess();
    
    if(guess === randomNumber){
        successMessage(); theGuesses.value = '';

    }else if(turnNumber === 10){
        failingTheGame(); theGuesses.value = '';
    }else{
        if(guess > randomNumber) failMessage('high');
        else failMessage('low');
        turnNumber++;
    }
    
}


