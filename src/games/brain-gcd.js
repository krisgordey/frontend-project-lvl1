import readlineSync from 'readline-sync';
import { getRandomInRange } from '../index.js';

function getGcd(n, m) {
  if (m > 0) {
    const k = n % m;
    return getGcd(m, k);
  }
  return n;
}

function gameBrainGcd(countRounds, name) {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < countRounds; i += 1) {
    const num1 = getRandomInRange();
    const num2 = getRandomInRange();
    console.log(`Question: ${num1} ${num2}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    const result = getGcd(num1, num2);
    if (result !== +yourAnswer) {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}

export default gameBrainGcd;
