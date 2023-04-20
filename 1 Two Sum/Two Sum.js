var twoSum = function (nums, target) {
  const map = {};

  for (a = 0; a < nums.length; a++) {
    difference = target - nums[a];

    if (difference in map) {
      return [map[difference], a];
    } else {
      map[nums[a]] = a;
    }
  }
  return null;
};
