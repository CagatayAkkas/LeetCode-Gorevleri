var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let levelSize = queue.length;
    let level = [];

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      if (node) {
        level.push(node.val);

        if (node.left) {
          queue.push(node.left);
        }

        if (node.right) {
          queue.push(node.right);
        }
      }
    }

    if (level.length > 0) {
      result.push(level);
    }
  }

  return result;
};
