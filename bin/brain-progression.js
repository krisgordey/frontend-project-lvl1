#!/usr/bin/env node
import gameBrainProgression from '../src/games/brain-progression.js';
import { greeting, welcome } from '../src/index.js';

const countRounds = 3;
const count = 10;

welcome();
const name = greeting();
gameBrainProgression(name, count, countRounds);
