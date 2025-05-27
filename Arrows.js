'use strict';

// Task 1
const addExclamation = str => str + "!";

// Task 2
const reverseWords = sentence => sentence.split(" ").reverse().join(" ");

// Task 3
const squareAll = arr => arr.map(x => x * x);

// Task 4
const filterNames = (names, minLength) => names.filter(name => name.length > minLength);

// Task 5
const allPositive = numbers => numbers.every(num => num > 0);
