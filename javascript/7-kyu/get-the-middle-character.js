/*

https://www.codewars.com/kata/56747fd5cb988479af000028

You are going to be given a word. Your job is to return the middle character of
the word. If the word's length is odd, return the middle character. If the
word's length is even, return the middle 2 characters.

*/

function getMiddle(s) {
  const middle = Math.floor(s.length / 2);
  if (s.length % 2 === 1) {
    return s[middle];
  }
  return s.substring(middle - 1, middle + 1);
}
