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

function getRandomInRangeArr(min, max, count) {
  const nums = [];
  for (let i = 0; i < count; i++) {
    nums.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return nums;
}

function greeting() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  return userName;
}
function game(nums, name) {
  for (const value of nums) {
    const yourAnswer = readlineSync.question(`Question: ${value} `);
    if (isWrongAnswer(value, yourAnswer)) {
      console.log(`${yourAnswer} is ${value} wrong answer ;(. Correct answer was ${rightAnswer(value)}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
}


export { greeting, game, getRandomInRangeArr };
