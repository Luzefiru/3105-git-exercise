import getPrompt from 'prompt-sync';
const prompt = getPrompt();

console.log('Hello World');
console.log('I added some changes');

const name = prompt('Identify yourself: ');
console.log(`Greetings, ${name}!`);
