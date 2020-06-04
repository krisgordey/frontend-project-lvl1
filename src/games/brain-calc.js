import getRandomInteger from '../random-integer.js';
import runEngine from '../index.js';

function getSum(num1, num2) {
  return num1 + num2;
}
function getSubtraction(num1, num2) {
  return num1 - num2;
}
function getMultiple(num1, num2) {
  return num1 * num2;
}

const operatorsAndOperations = [['+', getSum], ['-', getSubtraction], ['*', getMultiple]];

function createBrainCalcRound() {
  const randomIndex = getRandomInteger(0, operatorsAndOperations.length - 1);
  const [operator, operation] = operatorsAndOperations[randomIndex];

  const num1 = getRandomInteger();
  const num2 = getRandomInteger();

  const question = `${num1} ${operator} ${num2}`;
  const answer = `${operation(num1, num2)}`;

  return [question, answer];
}

export default function runBrainCalc() {
  const task = 'What is the result of the expression?';
  runEngine(createBrainCalcRound, task);
}
