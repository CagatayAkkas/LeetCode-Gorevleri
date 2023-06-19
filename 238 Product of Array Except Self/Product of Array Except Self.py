class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        result = [1] * len(nums)
        prefix =1 
        postfix = 1
        for a in range(len(nums)):
            result[a] = prefix
            prefix *= nums[a]
        for b in range(len(nums)-1,-1,-1):
             result[b] *= postfix
             postfix *= nums[b]
        return result
 
        