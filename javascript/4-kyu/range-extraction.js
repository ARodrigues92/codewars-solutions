/*

https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

A format for expressing an ordered list of integers is to use a comma separated
list of either

- individual integers
- or a range of integers denoted by the starting integer separated from the end
integer in the range by a dash, '-'. The range includes all integers in the
interval including both endpoints. It is not considered a range unless it spans
at least 3 numbers. For example ("12, 13, 15-17")

Complete the solution so that it takes a list of integers in increasing order
and returns a correctly formatted string in the range format.

*/

function solution(list) {
  let temp = [];
  let result = [];

  list.forEach((e, i) => {
    temp.push(e);
    if (e + 1 !== list[i + 1]) {
      if (temp.length < 3) {
        result = result.concat(temp);
        temp = [];
      } else {
        result.push(`${temp[0]}-${temp[temp.length - 1]}`);
        temp = [];
      }
    }
  });

  return result.join(',');
}
