/*

https://www.codewars.com/kata/5526fc09a1bbd946250002dc

You are given an array (which will have a length of at least 3, but could be
very large) containing integers. The array is either entirely comprised of odd
integers or entirely comprised of even integers except for a single integer N.
Write a method that takes the array as an argument and returns this "outlier" N.

*/

function findOutlier(integers) {
  let even = [];
  let odd = [];

  integers.forEach((element) => {
    if (element % 2 === 0) {
      even.push(element);
    } else {
      odd.push(element);
    }
  });

  return even.length > odd.length ? odd[0] : even[0];
}
