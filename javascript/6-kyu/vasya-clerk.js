function tickets(peopleInLine) {
  let bills25 = 0;
  let bills50 = 0;

  for (let i = 0; i < peopleInLine.length; i += 1) {
    if (peopleInLine[i] === 25) {
      bills25 += 1;
    } else if (peopleInLine[i] === 50) {
      if (bills25 <= 0) {
        return 'NO';
      }
      bills25 -= 1;
      bills50 += 1;
    } else if (peopleInLine[i] === 100) {
      if (bills50 > 0 && bills25 > 0) {
        bills50 -= 1;
        bills25 -= 1;
      } else if (bills25 > 2) {
        bills25 -= 3;
      } else {
        return 'NO';
      }
    }
  }
  return 'YES';
}
