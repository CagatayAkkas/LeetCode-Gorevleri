import java.util.HashMap;

class Solution {
    public int characterReplacement(String s, int k) {
        int left = 0;
        HashMap<Character, Integer> hashMap = new HashMap<>();
        int result = 0;
        int maxCount = 0;

        for (int right = 0; right < s.length(); right++) {
            char value = s.charAt(right);
            hashMap.put(value, hashMap.getOrDefault(value, 0) + 1);
            maxCount = Math.max(maxCount, hashMap.get(value));
            
            if ((right - left + 1 - maxCount) > k) {
                hashMap.put(s.charAt(left), hashMap.get(s.charAt(left)) - 1);
                left += 1;
            }
            
            result = Math.max(result, right - left + 1);
        }

        return result;
    }
}
