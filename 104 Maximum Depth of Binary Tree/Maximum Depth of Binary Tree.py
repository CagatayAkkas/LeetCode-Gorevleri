# Python 3'ü seçmeyi unutma =)
# Recursive DFS (Depth-First Search)
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        return max(self.maxDepth(root.left), self.maxDepth(root.right)) + 1


# BFS (Breadth-First Search)
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        # BFS
        if not root:
            return 0
        queue = [root]
        cnt = 0
        while queue:
            temp_queue = queue
            queue = []
            for node in temp_queue:
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            cnt += 1
        return cnt
