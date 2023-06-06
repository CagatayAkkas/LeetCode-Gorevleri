class Solution {
public:
    int findCircleNum(vector<vector<int>>& array) {
        int n = array.size();
        int counter = 0;
        vector<int> checker(n, 0);

        for (int index = 0; index < n; index++) {
            if (checker[index] == 0) {
                counter++;
                dfs(index, array, checker);
            }
        }

        return counter;
    }

    void dfs(int node, vector<vector<int>>& array, vector<int>& checker) {
        checker[node] = 1;

        for (int i = 0; i < array[node].size(); i++) {
            if (array[node][i] == 1 && checker[i] == 0) {
                dfs(i, array, checker);
            }
        }
    }
};
