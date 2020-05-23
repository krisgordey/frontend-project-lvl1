import readlineSync from 'readline-sync';
import { getRandomInRange, randomInteger } from '../index.js';

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

function gameBrainCalc(countRounds, name) {
  console.log('What is the result of the expression?');
  for (let i = 0; i < countRounds; i += 1) {
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

export default gameBrainCalc;
