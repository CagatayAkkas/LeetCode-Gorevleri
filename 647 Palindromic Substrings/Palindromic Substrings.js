/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let left = (right = i);

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }

    left = i;
    right = i + 1;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }

  return count;
};
