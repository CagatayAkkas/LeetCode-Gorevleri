function rob(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let rob1 = 0;
  let rob2 = 0;
  for (let value of nums) {
    const temp = Math.max(rob1 + value, rob2);
    rob1 = rob2;
    rob2 = temp;
  }

  let robNoFirst = 0;
  let robNoLast = 0;
  for (let i = 1; i < nums.length; i++) {
    const temp = Math.max(robNoFirst + nums[i], robNoLast);
    robNoFirst = robNoLast;
    robNoLast = temp;
  }

  return Math.max(rob1, robNoLast);
}
