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

function getOperation(operator) {
  switch (operator) {
    case '+':
      return getSum;
    case '-':
      return getSubtraction;
    case '*':
      return getMultiple;
    default:
      throw new Error(`Operator not found: "${operator}"`);
  }
}

function getRandomOperator() {
  const mathOperators = ['+', '-', '*'];
  const operatorIndex = getRandomInteger(0, mathOperators.length - 1);

  return mathOperators[operatorIndex];
}

function createBrainCalcRound() {
  const operator = getRandomOperator();
  const calculate = getOperation(operator);

  const num1 = getRandomInteger();
  const num2 = getRandomInteger();

  const question = `${num1} ${operator} ${num2}`;
  const answer = `${calculate(num1, num2)}`;

  return [question, answer];
}

export default function runBrainCalc() {
  const task = 'What is the result of the expression?';
  runEngine(createBrainCalcRound, task);
}
