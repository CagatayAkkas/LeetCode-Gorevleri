import java.util.Arrays;

class Solution {
    public int rob(int[] nums) {
        if (nums.length == 1) {
            return nums[0];
        }

        return Math.max(calculate(Arrays.copyOfRange(nums, 1, nums.length)), calculate(Arrays.copyOfRange(nums, 0, nums.length - 1)));
    }

    private int calculate(int[] nums) {
        int rob1 = 0;
        int rob2 = 0;
        for (int value : nums) {
            int temp = Math.max(rob1 + value, rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        return rob2;
    }
}
