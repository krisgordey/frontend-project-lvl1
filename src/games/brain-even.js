import readlineSync from 'readline-sync';

function isEven(number) {
  return number % 2 === 0;
}

function rightAnswer(number) {
  return isEven(number) ? 'yes' : 'no';
}

function isWrongAnswer(number, answer) {
  return answer !== rightAnswer(number);
}

function gameBrainEven(nums, name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let it = 0; it < nums.length; it += 1) {
    console.log(`Question: ${nums[it]} `);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (isWrongAnswer(nums[it], yourAnswer)) {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${rightAnswer(nums[it])}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}

export default gameBrainEven;
