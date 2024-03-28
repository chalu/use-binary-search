// See https://chat.openai.com/share/b209ce51-ccfb-443b-b94b-4d3eff563a99

import { faker } from '@faker-js/faker';

// Function to generate a random integer within a specific range
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Function to generate a matriculation number
const matricNumber = () => {
    const fullYear = randomInt(2010, 2012);
    const year = fullYear.toString().slice(2);
    const school = randomInt(1, 12).toString().padStart(2, '0');
    const department = randomInt(1, 6).toString().padStart(2, '0');
    const regNumber = randomInt(1, 100).toString().padStart(3, '0');
    return `${year}${school}${department}${regNumber}`;
};

export const generateMatricNumbers = (config = {}) => {
    const { howMany = 25 } = config;
    const matricNumbers = new Set();
    while (matricNumbers.size < howMany) {
        matricNumbers.add(matricNumber());
    }
    return Array.from(matricNumbers);
};
