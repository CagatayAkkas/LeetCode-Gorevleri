#Python3 versiyonunu seçmeyi unutma =)
class Solution:
    def countSubstrings(self, s: str) -> int:
        count =0
        for i in range(0,len(s)):
            left = right =i

            while left >=0 and right < len(s) and s[left] == s[right] :
                count +=1
                left -=1
                right +=1

            left = i
            right = i+1

            while left >=0 and right < len(s) and s[left] == s[right] :
                count +=1
                left -=1
                right +=1
        return count