/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0;
  const hashMap = {};
  let result = 0;
  let maxCount = 0;

  for (let right = 0; right < s.length; right++) {
    const value = s[right];
    hashMap[value] = (hashMap[value] || 0) + 1;
    maxCount = Math.max(maxCount, hashMap[value]);

    if (right - left + 1 - maxCount > k) {
      hashMap[s[left]] -= 1;
      left += 1;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
};
