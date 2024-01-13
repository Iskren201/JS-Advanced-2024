function greatestCommonDivisor(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  console.log(`${Math.abs(a)}`);
}

greatestCommonDivisor(712325, 2375);
