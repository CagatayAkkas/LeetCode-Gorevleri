/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let l = 0;
  let r = height.length - 1;
  let maxL = height[0];
  let maxR = height[r];
  let result = 0;

  while (l < r) {
    if (maxL < maxR) {
      l++;
      maxL = Math.max(maxL, height[l]);
      result += maxL - height[l];
    } else {
      r--;
      maxR = Math.max(maxR, height[r]);
      result += maxR - height[r];
    }
  }

  return result;
};
