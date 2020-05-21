/*

https://www.codewars.com/kata/54a91a4883a7de5d7800009c

Your job is to write a function which increments a string, to create a new 
string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the
new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be
considered.

*/

function incrementString(strng) {
  if (!/\d$/g.test(strng)) {
    return `${strng}1`;
  }

  const numbers = strng
    .match(/\d+$/g)
    .toString()
    .split('')
    .map((e) => Number(e));

  const letters = strng.match(/[a-z]/g) ? strng.match(/[a-z]/g).join('') : '';

  let add = false;
  for (let i = numbers.length - 1; i >= 0; i -= 1) {
    if (
      (numbers[i] < 9 && i === numbers.length - 1) ||
      (numbers[i] < 9 && add)
    ) {
      numbers[i] += 1;
      return `${letters}${numbers.join('')}`;
    }
    numbers[i] = 0;
    add = true;
  }
  return `${letters}1${numbers.join('')}`;
}
