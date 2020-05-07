/*

https://www.codewars.com/kata/517abf86da9663f1d2000003

Complete the method/function so that it converts dash/underscore delimited words
into camel casing. The first word within the output should be capitalized only
if the original word was capitalized (known as Upper Camel Case, also often
referred to as Pascal case).
  
*/

function toCamelCase(str) {
  if (!str) {
    return '';
  }
  return str
    .split(/[-_]/g)
    .map((e, index) => {
      return index > 0 ? e[0].toUpperCase() + e.substring(1, e.length) : e;
    })
    .join('');
}
