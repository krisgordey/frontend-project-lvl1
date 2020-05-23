#!/usr/bin/env node
import gameBrainEven from '../src/games/brain-even.js';
import { welcome, greeting, getRandomInRangeArr } from '../src/index.js';

const countNums = 3;
const arr = getRandomInRangeArr(countNums);

welcome();
const name = greeting();
gameBrainEven(arr, name);
