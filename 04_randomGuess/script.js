let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.reultParas');

const p = document.createElement('p');

let prevGuess=[];
let numGuess=1;
let playGame=true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()   ;                       //so that the data will not go to the server else on url
        const guess = parseInt(userInput.value);     //take the input from user and convert it to integer
        // console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    //to check validation
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess<1){
        alert('Please enter number more than one');
    }
    else if(guess>100){
        alert('Please enter number less than 100');
    }
    else{
        prevGuess.push(guess);;
        if(numGuess===11){
            displayGuess(guess);;
            displayMessage(`Game Over! Random Number was ${randomNumber}`);;
            endGame();;
        }
        else{
            displayGuess(guess);;
            checkGuess(guess);;
        }
    }
}

function checkGuess(){
    if(guess===randomNumber){
        displayMessage(`Congratulation! You got it right`);
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage(`Number is too Low! Try again`);
    }
    else if(guess>randomNumber){
        displayMessage(`Number is too high! Try again`);
    }
}

function displayGuess(guess){           //cleanupguess
    userInput.value='';
    guessSlot.innerHTML += `${guess},` ; //to display the guess
    numGuess++;
    remaining.innerHTML = `${11-numGuess}` ; //to display the remaining guesses
}

function displayMessage(message){
    lowOrHi.innerHTML= `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h1 id='newGame'>Start New Game</h1>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('clicl',function(e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame=true;
    })
}
