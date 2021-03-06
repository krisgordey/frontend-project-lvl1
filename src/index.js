import readlineSync from 'readline-sync';
import { ROUNDS_COUNT } from './constants.js';

function runEngine(createRound, task) {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi ${name}!`);

  console.log(task);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, answer] = createRound();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}

export default runEngine;
