class Solution
{
public:
    vector<int> spiralOrder(vector<vector<int>> &matrix)
    {
        int left = 0, right = matrix[0].size();
        int top = 0, bottom = matrix.size();
        vector<int> array;

        while (left < right && top < bottom)
        {
            for (int i = left; i < right; i++)
            {
                array.push_back(matrix[top][i]);
            }
            top++;

            for (int i = top; i < bottom; i++)
            {
                array.push_back(matrix[i][right - 1]);
            }
            right--;

            if (!(left < right && top < bottom))
            {
                break;
            }

            for (int i = right - 1; i >= left; i--)
            {
                array.push_back(matrix[bottom - 1][i]);
            }
            bottom--;

            for (int i = bottom - 1; i >= top; i--)
            {
                array.push_back(matrix[i][left]);
            }
            left++;
        }

        return array;
    }
};
