#Python3 versiyonunu seçmeyi unutma =)
class Solution:
    def isSubtree(self, full: Optional[TreeNode], sub: Optional[TreeNode]) -> bool:
        if not sub:
            return True
        if not full:
            return False
        if self.isSame(full, sub):
            return True

        return (self.isSubtree(full.left, sub) or self.isSubtree(full.right, sub))

    def isSame(self, full, sub):
        if not full and not sub:
            return True
        elif full and sub:
            if full.val == sub.val:
                return (self.isSame(full.left, sub.left) and self.isSame(full.right, sub.right))
        return False
