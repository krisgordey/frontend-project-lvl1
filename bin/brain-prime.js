#!/usr/bin/env node
import gameBrainPrime from '../src/games/brain-prime.js';
import { welcome, greeting } from '../src/index.js';

const countNums = 3;

welcome();
const name = greeting();
gameBrainPrime(name, countNums);
