class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:

        if not root:
            return []
        q = [root]
        result = []

        while q:
            level = []
            qLength = len(q)
            for index in range(qLength):

                element = q.pop(0)

                if element:
                    level.append(element.val)
                    q.append(element.left)
                    q.append(element.right)

            if level:
                result.append(level)
        return result
