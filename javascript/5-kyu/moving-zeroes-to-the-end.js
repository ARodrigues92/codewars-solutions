/*

https://www.codewars.com/kata/52597aa56021e91c93000cb0

Write an algorithm that takes an array and moves all of the zeros to the end,
preserving the order of the other elements.

*/

const moveZeros = function (arr) {
  let newArr = [];
  let zerosArr = [];

  arr.forEach((e) => {
    e !== 0 ? newArr.push(e) : zerosArr.push(e);
  });

  return newArr.concat(zerosArr);
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
