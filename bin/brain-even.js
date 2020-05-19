#!/usr/bin/env node
import { game, greeting, getRandomInRangeArr } from '../src/cli.js';

const minNum = 1;
const maxNum = 10;
const countNums = 3;
const arr = getRandomInRangeArr(minNum, maxNum, countNums);

console.log('Welcome to the Brain Games!');
const name = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
game(arr, name);
