var spiralOrder = function (matrix) {
  let left = 0,
    right = matrix[0].length;
  let top = 0,
    bottom = matrix.length;
  let array = [];

  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      array.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i < bottom; i++) {
      array.push(matrix[i][right - 1]);
    }
    right--;

    if (!(left < right && top < bottom)) {
      break;
    }

    for (let i = right - 1; i >= left; i--) {
      array.push(matrix[bottom - 1][i]);
    }
    bottom--;

    for (let i = bottom - 1; i >= top; i--) {
      array.push(matrix[i][left]);
    }
    left++;
  }

  return array;
};
