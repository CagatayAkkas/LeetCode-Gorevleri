class Solution {
public:
    bool isSubtree(TreeNode* full, TreeNode* sub) {
        if (sub == nullptr) {
            return true;
        }
        if (full == nullptr) {
            return false;
        }
        if (isSame(full, sub)) {
            return true;
        }

        return isSubtree(full->left, sub) || isSubtree(full->right, sub);
    }

    bool isSame(TreeNode* full, TreeNode* sub) {
        if (full == nullptr && sub == nullptr) {
            return true;
        }
        else if (full != nullptr && sub != nullptr) {
            if (full->val == sub->val) {
                return isSame(full->left, sub->left) && isSame(full->right, sub->right);
            }
        }
        return false;
    }
};
