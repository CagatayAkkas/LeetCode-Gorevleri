#include <unordered_map>
#include <algorithm>

class Solution {
public:
    int characterReplacement(string s, int k) {
        int left = 0;
        unordered_map<char, int> hashMap;
        int result = 0;
        int maxCount = 0;
        
        for (int right = 0; right < s.length(); right++) {
            char value = s[right];
            hashMap[value] = hashMap[value] + 1;
            maxCount = max(maxCount, hashMap[value]);
            
            if ((right - left + 1 - maxCount) > k) {
                hashMap[s[left]] -= 1;
                left += 1;
            }
            
            result = max(result, right - left + 1);
        }
        
        return result;
    }
};
