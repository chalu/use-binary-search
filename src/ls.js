import { generateMatricNumbers, randomInt } from "./unilag-matric-number.js";

// Generate 15,000 matriculation numbers
const matricNumbers = generateMatricNumbers({howMany: 15000});
console.log(`Total matric numbers: ${matricNumbers.length}`);
console.log(`Sample matric numbers from the pool: [${matricNumbers[0]}, ${matricNumbers[1]}]`);

// randomly pick from the generated student numbers
const randIdx = randomInt(0, matricNumbers.length-1);
const item = matricNumbers[randIdx];
console.log(`Will search for ${item} ...`);

console.log('\n using linear search');
console.time('linear-search');
console.log(matricNumbers.find(matNum => matNum === item));
console.timeEnd('linear-search');
