/*

https://www.codewars.com/kata/520b9d2ad5c005041100000f

Move the first letter of each word to the end of it, then add "ay" to the end of
the word. Leave punctuation marks untouched.

*/

function pigIt(str) {
  return str
    .split(' ')
    .map((e) => {
      if (e.match(/\w/g))
        return `${e.substring(1, str.length)}${e.substring(0, 1)}ay`;
      return e;
    })
    .join(' ');
}
