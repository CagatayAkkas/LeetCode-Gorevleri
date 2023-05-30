var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let maxLength = 0;
  for (let length of dp) {
    maxLength = Math.max(maxLength, length);
  }

  return maxLength;
};
