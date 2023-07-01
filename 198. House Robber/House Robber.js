/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
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

  return rob2;
};
