#!/usr/bin/env node
import { greeting, welcome } from '../src/index.js';
import gameBrainGcd from '../src/games/brain-gcd.js';

welcome();
const name = greeting();
const countNums = 3;

gameBrainGcd(countNums, name);
