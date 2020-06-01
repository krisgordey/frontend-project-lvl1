import getRandomInteger from '../random-integer.js';
import engine from '../index.js';
import { PROGRESSION_LENGTH } from '../constants.js';

function getProgression(a, count, step) {
  const progression = [];
  for (let it = a; progression.length + 1 <= count; it += step) {
    progression.push(it);
  }
  return progression;
}

function getRandomIndex(length) {
  return getRandomInteger(0, length);
}

function getAnswer(index, arr) {
  return `${arr[index]}`;
}

function getQuestion(arr, index) {
  const newArr = [...arr];
  newArr.splice(index, 1, '..');

  return newArr.join(' ');
}


function playGameBrainProgression() {
  const startNumber = getRandomInteger();
  const step = getRandomInteger();
  const progression = getProgression(startNumber, PROGRESSION_LENGTH, step);
  const missingElIndex = getRandomIndex(progression.length);

  const question = getQuestion(progression, missingElIndex);
  const answer = getAnswer(missingElIndex, progression);

  return [question, answer];
}

export default function runBrainProgressionGame() {
  const task = 'What number is missing in the progression?';
  engine(playGameBrainProgression, task);
}
