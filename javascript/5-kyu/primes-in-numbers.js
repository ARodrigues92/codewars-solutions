/*

https://www.codewars.com/kata/54d512e62a5e54c96200019e

Given a positive number n > 1 find the prime factor decomposition of n. The
result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"

with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

*/

function isPrime(n) {
  for (let i = 2; i < Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return n;
}

function primeFactors(n) {
  let newN = n;
  const result = {};

  for (let i = 2; i <= n; i += 1) {
    if (newN === 1) {
      break;
    }
    if (isPrime(i)) {
      while (newN % i === 0) {
        result[i] = !result[i] ? 1 : (result[i] += 1);
        newN /= i;
      }
    }
  }

  const keys = Object.keys(result);
  return keys.reduce((acc, e) => {
    return result[e] > 1 ? `${acc}(${e}**${result[e]})` : `${acc}(${e})`;
  }, '');
}
