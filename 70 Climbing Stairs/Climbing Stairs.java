class Solution {
    public int climbStairs(int n) {
        int low = 0;
        int high = 1;

        for (int i = 1; i <= n; i++) {
            int temp = high;
            high = high + low;
            low = temp;
        }

        return high;
    }
}
