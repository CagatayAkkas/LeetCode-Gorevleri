class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]


        return max(self.calculate(nums[1:]) , self.calculate(nums[:-1]))

    def calculate(self,nums):
        rob1 = rob2 =0
        for value in nums:
            temp = max(rob1 + value , rob2)
            rob1 = rob2
            rob2 = temp
        return rob2


