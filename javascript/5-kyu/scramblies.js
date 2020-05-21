/*

https://www.codewars.com/kata/55c04b4cc56a697bb0000048

Complete the function scramble(str1, str2) that returns true if a portion of
str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

  - Only lower case letters will be used (a-z). No punctuation or digits will be
included.
  - Performance needs to be considered

Input strings s1 and s2 are null terminated.

*/

function scramble(str1, str2) {
  for (let i = 0; i < str2.length; i += 1) {
    const regex = new RegExp(str2[i], 'g');

    if (str2.match(regex) && !str1.match(regex)) {
      return false;
    }

    if (str2.match(regex).length > str1.match(regex).length) {
      return false;
    }
  }
  return true;
}
