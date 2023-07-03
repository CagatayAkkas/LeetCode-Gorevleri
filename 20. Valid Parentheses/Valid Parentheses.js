/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const close = { ")": "(", "}": "{", "]": "[" };

  for (let value of s) {
    if (close.hasOwnProperty(value)) {
      if (stack.length && stack[stack.length - 1] === close[value]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(value);
    }
  }

  return stack.length === 0;
};
