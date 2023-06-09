class Solution:
    def minFlips(self, a: int, b: int, c: int) -> int:
        counter =0
        

        while a > 0 or b>0 or c>0:
            binA = a &1
            binB = b &1
            binC = c&1

            if binC == 0:
                counter += (binA + binB)
            elif binA == 0 and binB == 0:
                counter +=1
            
            a >>=1
            b >>= 1
            c >>=1
            
        return counter



