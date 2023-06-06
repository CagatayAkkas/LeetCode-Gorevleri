/**
 * @param {number[][]} array
 * @return {number}
 */
const findCircleNum = (array) => {
  const n = array.length;
  let counter = 0;
  const checker = new Array(n).fill(0);

  const dfs = (node) => {
    checker[node] = true;

    for (let i = 0; i < n; i++) {
      if (array[node][i] === 1 && !checker[i]) {
        dfs(i);
      }
    }
  };

  for (let index = 0; index < n; index++) {
    if (!checker[index]) {
      counter++;
      dfs(index);
    }
  }

  return counter;
};
