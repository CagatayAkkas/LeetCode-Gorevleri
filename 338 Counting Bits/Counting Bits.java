import java.util.Arrays;

class Solution {
    public int[] countBits(int n) {
        int[] dp = new int[n + 1];
        int k = 1;
        for (int i = 1; i <= n; i++) {
            if (k * 2 == i) {
                k = i;
            }
            dp[i] = 1 + dp[i - k];
        }
        return dp;
    }
}
