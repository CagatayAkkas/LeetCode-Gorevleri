function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];
    let lastEnd = result[result.length - 1][1];
    if (start <= lastEnd) {
      result[result.length - 1] = [
        result[result.length - 1][0],
        Math.max(lastEnd, end),
      ];
    } else {
      result.push([start, end]);
    }
  }
  return result;
}
