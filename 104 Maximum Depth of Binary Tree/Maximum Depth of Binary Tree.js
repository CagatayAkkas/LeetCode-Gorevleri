//Recursive DFS (Depth-First Search)
var maxDepth = function (root) {
  if (root === undefined || root === null) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

//BFS (Breadth-First Search)
var maxDepth = function (root) {
    if (root === null) {
        return 0;
    }
    var q = [root];
    var level = 0;
    
    while (q.length != 0) {
        var count = q.length;
        for (a = 0; a < count ; a++) {
            var node = q.shift();
                        
            if (node.left != null) {
                q.push(node.left);
            }
            if (node.right != null) {
                q.push(node.right);
            }
        }
        level++;
    }
    return level;
};
