/*

https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

Write a function, persistence, that takes in a positive parameter num and
returns its multiplicative persistence, which is the number of times you must
ultiply the digits in num until you reach a single digit.

*/

function process(arr) {
  return arr.reduce((a, e) => {
    return Number(a) * Number(e);
  }, 1);
}

function persistence(num) {
  let numArr = num.toString().split('');
  let count = 0;

  while (numArr.length > 1) {
    const newNum = process(numArr);
    numArr = newNum.toString().split('');
    count += 1;
  }
  return count;
}
