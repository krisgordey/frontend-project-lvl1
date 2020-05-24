import readlineSync from 'readline-sync';
import { getRandomInRange } from '../index.js';

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
function isRightAnswer(num) {
  return isPrime(num) ? 'yes' : 'no';
}

function gameBrainPrime(name, countRounds) {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < countRounds; i += 1) {
    const number = getRandomInRange();
    console.log(number);
    const yourAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = isRightAnswer(number);
    console.log(yourAnswer);

    if (yourAnswer !== rightAnswer) {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}

export default gameBrainPrime;
