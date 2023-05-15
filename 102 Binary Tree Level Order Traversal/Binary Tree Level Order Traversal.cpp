class Solution
{
public:
    vector<vector<int>> levelOrder(TreeNode *root)
    {
        if (root == nullptr)
        {
            return {};
        }

        queue<TreeNode *> queue;
        vector<vector<int>> result;

        queue.push(root);

        while (!queue.empty())
        {
            int levelSize = queue.size();
            vector<int> level;

            for (int i = 0; i < levelSize; i++)
            {
                TreeNode *node = queue.front();
                queue.pop();

                if (node != nullptr)
                {
                    level.push_back(node->val);

                    if (node->left != nullptr)
                    {
                        queue.push(node->left);
                    }

                    if (node->right != nullptr)
                    {
                        queue.push(node->right);
                    }
                }
            }

            if (!level.empty())
            {
                result.push_back(level);
            }
        }

        return result;
    }
};
