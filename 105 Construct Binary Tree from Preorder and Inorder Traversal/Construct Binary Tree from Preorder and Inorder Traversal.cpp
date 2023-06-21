class Solution {
public:
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        if (preorder.empty() || inorder.empty()) {
            return nullptr;
        }
        
        TreeNode* root = new TreeNode(preorder[0]);
        int mid = find(inorder.begin(), inorder.end(), preorder[0]) - inorder.begin();
        
        vector<int> leftPreorder(preorder.begin() + 1, preorder.begin() + mid + 1);
        vector<int> leftInorder(inorder.begin(), inorder.begin() + mid);
        root->left = buildTree(leftPreorder, leftInorder);
        
        vector<int> rightPreorder(preorder.begin() + mid + 1, preorder.end());
        vector<int> rightInorder(inorder.begin() + mid + 1, inorder.end());
        root->right = buildTree(rightPreorder, rightInorder);
        
        return root;
    }
};
