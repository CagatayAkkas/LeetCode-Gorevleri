public class Solution {
    public int[] productExceptSelf(int[] nums) {
        int length = nums.length;
        int[] result = new int[length];
        
        // Initialize the array with 1
        for(int i = 0; i < length; i++) {
            result[i] = 1;
        }
        
        int prefix = 1;
        for(int i = 0; i < length; i++) {
            result[i] *= prefix;
            prefix *= nums[i];
        }
        
        int postfix = 1;
        for(int i = length - 1; i >= 0; i--) {
            result[i] *= postfix;
            postfix *= nums[i];
        }
        
        return result;
    }
}
