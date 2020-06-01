import getRandomInteger from '../random-integer.js';
import engine from '../index.js';

function getSum(num1, num2) {
  return num1 + num2;
}
function getSubtraction(num1, num2) {
  return num1 - num2;
}
function getMultiple(num1, num2) {
  return num1 * num2;
}
function getRandomIndex(arr) {
  return getRandomInteger(0, arr.length - 1);
}
const operatorsArr = ['+', '-', '*'];
const functionsArr = [getSum, getSubtraction, getMultiple];

function playGameBrainCalc() {
  const randomIndex = getRandomIndex(operatorsArr);
  const operator = operatorsArr[randomIndex];
  const expression = functionsArr[randomIndex];
  const num1 = getRandomInteger();
  const num2 = getRandomInteger();
  const question = `${num1} ${operator} ${num2}`;
  const answer = `${expression(num1, num2)}`;

  return [question, answer];
}

export default function runBrainCalc() {
  const task = 'What is the result of the expression?';
  engine(playGameBrainCalc, task);
}
