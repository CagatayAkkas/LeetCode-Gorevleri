#Python3 versiyonunu seçmeyi unutma =)

class Solution:
    def countBits(self, n: int) -> List[int]:
        dp = [0] * (n+1)
        k =1
        for i in range(1 , n+1):

            if k *2 == i:
                k =i

            dp[i] = 1 + dp[i-k]
        return dp