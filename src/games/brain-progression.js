import getRandomInteger from '../random-integer.js';
import runEngine from '../index.js';
import { PROGRESSION_LENGTH } from '../constants.js';

function getProgression(start, count, step) {
  const progression = [];
  for (let i = start; progression.length + 1 <= count; i += step) {
    progression.push(i);
  }
  return progression;
}

function getQuestion(progression, missingElIndex) {
  const newProgression = [...progression];
  return newProgression.splice(missingElIndex, 1, '..').join(' ');
}

function createBrainProgressionRound() {
  const startNumber = getRandomInteger();
  const step = getRandomInteger();
  const progression = getProgression(startNumber, PROGRESSION_LENGTH, step);
  const missingElIndex = getRandomInteger(0, progression.length - 1);

  const question = getQuestion(progression, missingElIndex);
  const answer = `${progression[missingElIndex]}`;

  return [question, answer];
}

export default function runBrainProgressionGame() {
  const task = 'What number is missing in the progression?';
  runEngine(createBrainProgressionRound, task);
}
