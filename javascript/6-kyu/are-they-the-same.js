/*

https://www.codewars.com/kata/550498447451fbbd7600041c

Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure)
that checks whether the two arrays have the "same" elements, with the same
multiplicities. "Same" means, here, that the elements in b are the elements in a
squared, regardless of the order.

If a or b are nil (or null or None), the problem doesn't make sense so return
false.

Note for C
The two arrays have the same size (> 0) given as parameter in function comp.

*/

function comp(array1, array2) {
  if (!array1 || !array2) {
    return false;
  }
  const array2Sqrt = array2.map((e) => Math.sqrt(e));
  return array2Sqrt.sort().join('') === array1.sort().join('');
}
