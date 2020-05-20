#!/usr/bin/env node

import { gameBrainCalc } from '../src/cli.js';
import { greeting, welcome } from '../src/index.js';


const countNums = 3;

welcome();
const name = greeting();
gameBrainCalc(countNums, name);
