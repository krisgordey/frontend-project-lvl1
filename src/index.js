import readlineSync from 'readline-sync';

function welcome() {
  console.log('Welcome to the Brain Games!');
}

function randomInteger(min, max) {
  // получить случайное число от min до max+1
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function getRandomInRange() {
  return Math.floor(Math.random() * 100) + 1;
}

function getRandomInRangeArr(count) {
  const nums = [];
  for (let i = 0; i < count;) {
    nums.push(getRandomInRange());
    i += 1;
  }
  return nums;
}

function greeting() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  return userName;
}

export {
  greeting, getRandomInRangeArr, getRandomInRange, randomInteger, welcome,
};
