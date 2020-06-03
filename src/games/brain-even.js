import runEngine from '../index.js';
import getRandomInteger from '../random-integer.js';


function checkIsEven(number) {
  return number % 2 === 0;
}

function getRightAnswer(number) {
  return checkIsEven(number) ? 'yes' : 'no';
}

function createBrainEvenRound() {
  const number = getRandomInteger();
  const question = `${number} `;
  const answer = getRightAnswer(number);
  return [question, answer];
}


export default function runBrainEvenGame() {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(createBrainEvenRound, task);
}
