import getPrompt from "prompt-sync";
const prompt = getPrompt();

console.log("こんにちは世界");
console.log("いくつか変更を加えました");

console.log("i dont understand what u saying");

const name = prompt("身元を明かしてください: ");
console.log(`こんにちは, ${name}-くん!`);

console.log("Reece was here!");
