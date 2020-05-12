import readlineSync from 'readline-sync';

export default function question() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
}
