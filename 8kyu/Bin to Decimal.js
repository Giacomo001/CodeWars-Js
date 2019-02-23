//Complete the function which converts a binary number (given as a string) to a decimal number.

//Short solution
const binToDec = bin => parseInt(bin, 2);

//Solution using '.reduce' method
const binToDec = bin => [...bin].reduce((dec, bit) => dec << 1 | bit, 0);
