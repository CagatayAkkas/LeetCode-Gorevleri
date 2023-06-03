class Solution:
    def climbStairs(self, n: int) -> int:
        low = 0
        high =1

        for i in range(1,n+1):
            high = high + low
            low = high - low
            
        return high