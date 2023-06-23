class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        left = 0  
        hashMap = {}
        result = 0
        maxCount = 0

        for right in range(len(s)):
            value = s[right]
            hashMap[value] = hashMap.get(value, 0) + 1
            maxCount = max(maxCount, hashMap[value])
            
            if (right - left + 1 - maxCount) > k:
                hashMap[s[left]] -= 1
                left += 1
            
            result = max(result , right - left + 1)

        return result
