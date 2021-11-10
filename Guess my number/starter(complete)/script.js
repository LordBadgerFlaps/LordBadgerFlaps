'use strict';

let secretNumber = secret();
const message = document.querySelector('.message');
let number = document.querySelector('.number');
let score = 20;
let highscore = 0;

//event listeners
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = "You havn't entered a number . . .";
  } else if (score === 0) {
    message.textContent = 'Game over, too many tries!!';
    document.body.style.backgroundColor = 'red';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct number guessed! You won! ';
    number.textContent = secretNumber;
    document.body.style.backgroundColor = 'green';
  } else if (guess > secretNumber) {
    message.textContent = 'Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    message.textContent = 'Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

//added enter functionality
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    guessLogic();
  }
  // score = 20;
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = secret();
  number.textContent = '?';
  document.querySelector('.score').textContent = 20;

  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = 'black';
  message.textContent = 'Start Guessing. . .';

  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  } else if (highscore > score) {
    highscore = highscore;
    document.querySelector('.highscore').textContent = highscore;
  }
});

// functions;
function secret() {
  return Math.floor(Math.random() * 20) + 1;
}

// let secret = () => Math.floor(Math.random() * 20) + 1;

let guessLogic = () => {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = "You havn't entered a number . . .";
  } else if (score === 0) {
    message.textContent = 'Game over, too many tries!!';
    document.body.style.backgroundColor = 'red';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct number guessed! You won! ';
    number.textContent = secretNumber;
    document.body.style.backgroundColor = 'green';
  } else if (guess > secretNumber) {
    message.textContent = 'Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    message.textContent = 'Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
};
