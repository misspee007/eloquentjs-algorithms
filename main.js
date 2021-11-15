// Looping a triangle

var result = "";
for (var counter = 0; counter < 7; counter++) {
  result += "#";
  console.log(result);
}

// FizzBuzz

var num = 1;
for (var i = 0; i < 100; i++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else console.log(num);

  num += 1;
}

// Math.min
function min(a, b) {
  let smallest;
  a > b ? (smallest = b) : (smallest = a);
  return smallest;
}

// Chessboard
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

// Recursion
function isEven(num) {
  if (num < 0) {
    return null;
  } else if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
}
console.log(isEven(-1));
console.log(isEven(56));
console.log(isEven(3));

// Bean counting
function countBs(str) {
  const result = str.match(/B/g);
  return result.length;
}

function countChar(str, ch) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      counter += 1;
    }
  }
  return counter;
}

function modifiedCountBs(str) {
  return countChar(str, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
console.log(modifiedCountBs("BBBCb"));

// Sum of a range
function range(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

function sum([...numbers]) {
  let result = 0;
  numbers.map((i) => {
    result = result + Number(i);
  });
  return result;
}

//modified
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

// Reverse array
function reverseArray(array) {
  let arr = [];
  for (let i of array) {
    arr.unshift(i);
  }
  return arr;
}
