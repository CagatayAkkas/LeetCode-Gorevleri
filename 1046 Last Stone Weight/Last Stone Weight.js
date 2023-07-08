/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const maxHeap = [...stones].sort((a, b) => b - a);

  while (maxHeap.length > 1 && maxHeap[0] !== 0) {
    const stone1 = maxHeap.shift();
    const stone2 = maxHeap.shift();
    maxHeap.push(stone1 - stone2);
    maxHeap.sort((a, b) => b - a);
  }

  return maxHeap[0];
};
