# Project related to Dom

## project link
[Click here](https://stackblitz.com/edit/web-platform-zcvkgs?file=01_ColorChange%2Fscript.js)

# Solution code

##  project - 1 Solution code

```javascript

document.querySelectorAll('.button');
const buttons = document.querySelectorAll('.button');

document.querySelector('body');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    //event where comes from by the target
    console.log(event.target);
    if(event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    }

    if(event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    }

    if(event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    }

    if(event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }

    if(event.target.id === 'purple') {
      body.style.backgroundColor = event.target.id;
    }

    
  });
});


```
## Project - 2 Solution code
```javascript
document.querySelector('form');
const forms = document.querySelector('form');
//this use case will give you empty value
const height = parseInt(document.querySelector('#height').value);

// forms submit by two method post  method or get method and goes for url or server then we default action will be stop
forms.addEventListener('submit', function(event) {
 event.preventDefault()

 const height = parseInt(document.querySelector('#height').value);
 const weight = parseInt(document.querySelector('#weight').value);
 const results = document.querySelector('#results');

 if(height === '' || height < 0 || isNaN(height)) {
  results.innerHTML = `Please give a valid height ${height}`;

 } else if(weight === '' || weight < 0 || isNaN(weight)) {
  results.innerHTML = `Please give a valid height ${weight}`;

} else {
  (weight / ((height*weight)/10000)).toFixed(2);
  const bmi = (weight / ((height*weight)/10000)).toFixed(2);

  // show the result
  results.innerHTML = `<span>${bmi}</span>`;

}
const bmi = (weight / ((height*weight)/10000)).toFixed(2);
 if(bmi < 18.6) {
   results.innerHTML = `Under Weight ${bmi}`
 } else if( bmi === 18.6 || bmi === 24.9) {
   results.innerHTML = `Normal Range ${bmi}`
 } else {
   results.innerHTML = `Overweight ${bmi}`
 }


})

```

## Project - 3 Solution code
```javascript
document.getElementById('clock');
const clock = document.getElementById('clock');
// or
// document.querySelector('#clock')
// const clock = document.querySelector('#clock');

let date = new Date();
console.log(date.toLocaleTimeString());

setInterval(function() {
  let date = new Date();
// console.log(date.toLocaleTimeString()); it is given time in console
clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```

## Project - 4 Solution code

```javascript
// console.log(Math.random() * 100 + 1);
// console.log(parseInt(Math.random() * 100 + 1));

let randomNumber = console.log(parseInt(Math.random() * 100 + 1));

document.querySelector('#subt');
const submit = document.querySelector('#subt');

document.querySelector('#guessField');
const userInput = document.querySelector('#guessField');

document.querySelector('.guesses');
const guessSlot = document.querySelector('.guesses');

document.querySelector('.lastResult');
const remaining = document.querySelector('.lastResult');

document.querySelector('.lowOrHi');
const lowOrHigh = document.querySelector('.lowOrHi');

document.querySelector('.resultParas');
const startOver = document.querySelector('.resultParas');

document.createElement('p');
const para = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    userInput.value;
    parseInt(userInput.value);
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // validate
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);

    if (numGuess === 11) {
      dispalyGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endgame();
    } else {
      dispalyGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //check
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endgame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too High`);
  }
}

function dispalyGuess(guess) {
  // cleanup method
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  //
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame>Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  documnet.querySelector('#newGame');
  const newGameButton = documnet.querySelector('#newGame');
  newGameButton.addEventListener('click', function (event) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute(disabled);
    startOver.removeChild(p);
    playGame = ture;
  });
}
```

