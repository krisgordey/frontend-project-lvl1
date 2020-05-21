import readlineSync from 'readline-sync';
import { getRandomInRange, randomInteger } from './index.js';

function isEven(number) {
  return number % 2 === 0;
}

function rightAnswer(number) {
  return isEven(number) ? 'yes' : 'no';
}

function isWrongAnswer(number, answer) {
  return answer !== rightAnswer(number);
}

function gameBrainEven(nums, name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let it = 0; it < nums.length; it += 1) {
    console.log(`Question: ${nums[it]} `);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (isWrongAnswer(nums[it], yourAnswer)) {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${rightAnswer(nums[it])}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}

function sum(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function multiple(num1, num2) {
  return num1 * num2;
}
function getRandomIndex(arr) {
  return randomInteger(0, arr.length - 1);
}
const operatorsArr = ['+', '-', '*'];
const functionsArr = [sum, sub, multiple];

function gameBrainCalc(count, name) {
  console.log('What is the result of the expression?');
  for (let i = 0; i < count; i += 1) {
    const randomIndex = getRandomIndex(operatorsArr);
    const operator = operatorsArr[randomIndex];
    const expression = functionsArr[randomIndex];
    const num1 = getRandomInRange();
    const num2 = getRandomInRange();
    console.log(`Question: ${num1} ${operator} ${num2}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (expression(num1, num2) !== +yourAnswer) {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${expression(num1, num2)}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}

function getGcd(n, m) {
  if (m > 0) {
    const k = n % m;
    return getGcd(m, k);
  }
  return n;
}

function gameBrainGcd(count, name) {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < count; i += 1) {
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

export { gameBrainEven, gameBrainCalc, gameBrainGcd };
