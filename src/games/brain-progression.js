import readlineSync from 'readline-sync';
import { getRandomInRange, randomInteger } from '../index.js';

function getProgression(a, count, step) {
  const progression = [];
  for (let it = a; progression.length + 1 <= count; it += step) {
    progression.push(it);
  }
  return progression;
}

function getRandomIndex(length) {
  return randomInteger(0, length);
}

function getRightAnswer(index, arr) {
  return arr[index];
}

function getQuestion(arr, index) {
  arr.splice(index, 1, '..');
  return arr.join();
}

function gameBrainProgression(name, count, countRounds) {
  console.log('What number is missing in the progression?');

  for (let i = 0; i < countRounds; i += 1) {
    const a = getRandomInRange();
    const step = getRandomInRange();
    const progression = getProgression(a, count, step);
    const index = getRandomIndex(progression.length);
    const rightAnswer = getRightAnswer(index, progression);

    console.log(getQuestion(progression, index));
    const yourAnswer = readlineSync.question('Your answer: ');

    if (+yourAnswer !== rightAnswer) {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}

export default gameBrainProgression;
