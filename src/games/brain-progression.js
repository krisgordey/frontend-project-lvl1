import getRandomInteger from '../random-integer.js';
import runEngine from '../index.js';
import { PROGRESSION_LENGTH } from '../constants.js';

function getProgression(start, count, step) {
  const progression = [];
  for (let num = start; progression.length + 1 <= count; num += step) {
    progression.push(num);
  }
  return progression;
}

function getAnswer(index, arr) {
  return `${arr[index]}`;
}

function getQuestion(arr, index) {
  const newArr = [...arr];
  newArr.splice(index, 1, '..');

  return newArr.join(' ');
}

function createBrainProgressionRound() {
  const startNumber = getRandomInteger();
  const step = getRandomInteger();
  const progression = getProgression(startNumber, PROGRESSION_LENGTH, step);
  const missingElIndex = getRandomInteger(0, progression.length - 1);

  const question = getQuestion(progression, missingElIndex);
  const answer = getAnswer(missingElIndex, progression);

  return [question, answer];
}

export default function runBrainProgressionGame() {
  const task = 'What number is missing in the progression?';
  runEngine(createBrainProgressionRound, task);
}
