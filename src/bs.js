import { searchFor } from "./search.js";
import { generateMatricNumbers, randomInt } from "./unilag-matric-number.js";

// Generate 15,000 matriculation numbers
const matricNumbers = generateMatricNumbers({howMany: 15000});
console.log(`Total matric numbers: ${matricNumbers.length}`);
console.log(`Sample matric numbers from the pool: [${matricNumbers[0]}, ${matricNumbers[1]}]`);

// randomly pick from the generated student numbers
const randIdx = randomInt(0, matricNumbers.length-1);
const item = matricNumbers[randIdx];
console.log(`Will search for ${item} ...`);

matricNumbers.sort();
console.log('\n using binary search');
console.time('binary-search');
const foundAt = searchFor(item).within(matricNumbers);
console.log(`Found ${item} at ${foundAt}`);
console.timeEnd('binary-search');
