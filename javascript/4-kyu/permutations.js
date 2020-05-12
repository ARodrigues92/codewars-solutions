/*

https://www.codewars.com/kata/5254ca2719453dcc0b00027d

In this kata you have to create all permutations of an input string and remove
duplicates, if present. This means, you have to shuffle all letters from the
input in all possible orders.

*/

function permutations(string) {
  if (string.length < 2) {
    return [string];
  }

  const newArr = [];

  for (let i = 0; i < string.length; i += 1) {
    const current = string[i];

    if (string.indexOf(current) === i) {
      // If indexOf returns a different value then the current index its because
      // there is an earlier occurrence of that element and we skip it to avoid
      // repetition
      const remaining = string.slice(0, i) + string.slice(i + 1, string.length);
      const newPermutations = permutations(remaining);

      newPermutations.forEach((e) => {
        newArr.push(current + e);
      });
    }
  }
  return newArr;
}
