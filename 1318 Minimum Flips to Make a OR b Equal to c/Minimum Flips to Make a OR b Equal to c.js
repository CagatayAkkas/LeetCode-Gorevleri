function minFlips(a, b, c) {
  let counter = 0;

  while (a > 0 || b > 0 || c > 0) {
    let binA = a & 1;
    let binB = b & 1;
    let binC = c & 1;

    if (binC == 0) {
      counter += binA + binB;
    } else if (binA == 0 && binB == 0) {
      counter += 1;
    }

    a >>= 1;
    b >>= 1;
    c >>= 1;
  }

  return counter;
}
