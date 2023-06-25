class Solution:
    def trap(self, h: List[int]) -> int:
        l = 0
        r = len(h)-1
        maxL = h[0]
        maxR = h[r]
        result = 0
        
        while l < r :
            if maxL < maxR:
                l +=1
                maxL = max(maxL , h[l])
                result += (maxL - h[l])
            else :
                r -=1
                maxR = max(maxR , h[r])
                result += (maxR - h[r])

        return result 

        
            
                

