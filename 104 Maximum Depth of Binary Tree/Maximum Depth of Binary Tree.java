// Recursive DFS (Depth-First Search)
class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }

}

    // BFS (Breadth-First Search)
public int maxDepth(TreeNode root) {
    if (root == null) {
        return 0;
    }
    Queue<TreeNode> q = new LinkedList<>();
    q.offer(root);
    int level = 0;
    
    while (!q.isEmpty()) {
        int count = q.size();
        for (int i = 0; i < count; i++) {
            TreeNode node = q.poll();
            
            if (node.left != null) {
                q.offer(node.left);
            }
            if (node.right != null) {
                q.offer(node.right);
            }
        }
        level++;
    }
    return level;
}