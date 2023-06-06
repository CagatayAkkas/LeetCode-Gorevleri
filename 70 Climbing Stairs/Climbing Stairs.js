/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  let low = 0;
  let high = 1;

  for (let i = 1; i <= n; i++) {
    const temp = high;
    high = high + low;
    low = temp;
  }

  return high;
};
