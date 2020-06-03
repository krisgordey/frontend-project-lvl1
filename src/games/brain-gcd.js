import runEngine from '../index.js';
import getRandomInteger from '../random-integer.js';

function getGcd(n, m) {
  if (m > 0) {
    const k = n % m;
    return getGcd(m, k);
  }
  return n;
}

function createBrainGcdRound() {
  const num1 = getRandomInteger();
  const num2 = getRandomInteger();
  const question = `${num1} ${num2}`;
  const answer = `${getGcd(num1, num2)}`;

  return [question, answer];
}

export default function runBrainGcdGame() {
  const task = 'Find the greatest common divisor of given numbers.';
  runEngine(createBrainGcdRound, task);
}
