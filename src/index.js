import readlineSync from 'readline-sync';
import { ROUNDS } from './constants.js';

function runEngine(game, task) {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi ${name}!`);

  console.log(task);

  for (let i = 0; i < ROUNDS; i += 1) {
    const [question, answer] = game();

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
