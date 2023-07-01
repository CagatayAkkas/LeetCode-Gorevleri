class Solution {
    public int rob(int[] nums) {
        int rob1 = 0;
        int rob2 = 0;

        for (int index = 0; index < nums.length; ++index) {
            int temp = Math.max(rob1 + nums[index], rob2);
            rob1 = rob2;
            rob2 = temp;
        }

        return rob2;
    }
}
