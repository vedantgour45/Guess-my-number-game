'use strict';

// This is a secret number
// Math.random will generate random number with decimal values, *20 will give it the range of(0-20)
// to eliminate it we use Math.trunc and +1 is ued to handle the decimal values or else we would range from 0-19.99999 and will never encounter 20

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //no input number at all
  if (guess < 1) {
    displayMessage('🚫 Enter a valid number !');
  } else if (guess > 20) {
    displayMessage('❕Number out of range');
  }
  // if the number is equal to secretNumber
  else if (guess === secretNumber) {
    displayMessage('🎉 Yaay, correct number !');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // if the number is not equal to secretNumber
  else if (guess !== secretNumber) {
    if (score > 1) {
      //used ternary operator
      displayMessage(guess > secretNumber ? '📈 Too high !' : '📉 Too low !');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('☹️ You lost !');
      document.querySelector('body').style.backgroundColor = 'maroon';
      document.querySelector('.score').textContent = 0;
    }
  }

  /*
  if the number is greater than secretNumber

  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☹️ You lost !';
      document.querySelector('.score').textContent = 0;
    }
  }

  //if the number is less than secretNumber

  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☹️ You lost !';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});

//Reset everything
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing ...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
