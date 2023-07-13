/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const minHeap = [];

  for (const [x, y] of points) {
    const dist = x * x + y * y;
    minHeap.push([dist, x, y]);
  }

  minHeap.sort((a, b) => a[0] - b[0]);

  const res = [];

  for (let i = 0; i < k; i++) {
    res.push([minHeap[i][1], minHeap[i][2]]);
  }

  return res;
};
