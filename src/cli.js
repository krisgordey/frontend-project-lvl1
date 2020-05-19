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
  for (let i = 0; i < count;) {
    nums.push(Math.floor(Math.random() * (max - min + 1)) + min);
    i += 1;
  }
  return nums;
}

function greeting() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  return userName;
}
function game(nums, name) {
  for (let it = 0; it < nums.length;) {
    const yourAnswer = readlineSync.question(`Question: ${nums[it]} `);
    if (isWrongAnswer(nums[it], yourAnswer)) {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${rightAnswer(nums[it])}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    it += 1;
  }
  console.log(`Congratulations, ${name}!`);
}

export { greeting, game, getRandomInRangeArr };
