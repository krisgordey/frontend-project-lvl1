import engine from '../index.js';
import getRandomInteger from '../random-integer.js';

function checkIsPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
function getRightAnswer(num) {
  return checkIsPrime(num) ? 'yes' : 'no';
}

function playGameBrainPrime() {
  const randomNumber = getRandomInteger();
  const question = `${randomNumber}`;
  const answer = getRightAnswer(randomNumber);

  return [question, answer];
}

export default function runBrainPrimeGame() {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  engine(playGameBrainPrime, task);
}
