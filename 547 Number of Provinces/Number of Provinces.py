#Python3 versiyonunu seçmeyi unutma =)
class Solution:
    def findCircleNum(self, array: List[List[int]]) -> int:
        n = len(array)
        counter =0
        checker = [0] * n

        def dfs(node):
            checker[node] = True

            for i in range(0,n):
                if array[node][i] == 1 and not checker[i]:
                    dfs(i)


        for index in range(0 , n):
            if not checker[index]:
                counter +=1
                dfs(index)
        
        return counter