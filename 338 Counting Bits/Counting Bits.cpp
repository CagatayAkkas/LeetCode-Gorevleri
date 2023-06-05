#include <vector>

class Solution {
public:
    std::vector<int> countBits(int n) {
        std::vector<int> dp(n + 1, 0);
        int k = 1;
        for (int i = 1; i <= n; i++) {
            if (k * 2 == i) {
                k = i;
            }
            dp[i] = 1 + dp[i - k];
        }
        return dp;
    }
};
