// Recursive DFS (Depth-First Search)
int maxDepth(TreeNode *root)
{
    if (root == nullptr)
    {
        return 0;
    }
    return max(maxDepth(root->left), maxDepth(root->right)) + 1;
}

// BFS (Breadth-First Search)
int maxDepth(TreeNode *root)
{
    if (root == nullptr)
    {
        return 0;
    }
    queue<TreeNode *> q;
    q.push(root);
    int level = 0;

    while (!q.empty())
    {
        int count = q.size();
        for (int i = 0; i < count; i++)
        {
            TreeNode *node = q.front();
            q.pop();

            if (node->left != nullptr)
            {
                q.push(node->left);
            }
            if (node->right != nullptr)
            {
                q.push(node->right);
            }
        }
        level++;
    }
    return level;
}
