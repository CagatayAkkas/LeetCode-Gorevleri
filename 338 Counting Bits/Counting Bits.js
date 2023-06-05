/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let dp = new Array(n + 1).fill(0);
  let k = 1;
  for (let i = 1; i <= n; i++) {
    if (k * 2 === i) {
      k = i;
    }
    dp[i] = 1 + dp[i - k];
  }
  return dp;
};
