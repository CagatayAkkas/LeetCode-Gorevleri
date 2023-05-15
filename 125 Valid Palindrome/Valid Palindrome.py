# Python3 versiyonunu seçmeyi unutma =)
class Solution:
    def isPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1

        while l < r:
            while l < r and not self.isAlpha(s[l]):
                l += 1
            while r > l and not self.isAlpha(s[r]):
                r -= 1
            if s[l].lower() != s[r].lower():
                return False
            l += 1
            r -= 1
        return True

    def isAlpha(self, letter):
        return (
            (ord("A") <= ord(letter) <= ord("Z"))
            or (ord("a") <= ord(letter) <= ord("z"))
            or (ord("0") <= ord(letter) <= ord("9"))
        )
