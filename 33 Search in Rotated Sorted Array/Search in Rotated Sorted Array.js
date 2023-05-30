var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      if (nums[end] < nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else if (nums[mid] < target) {
      if (nums[start] > nums[mid] && nums[start] <= target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return -1;
};
