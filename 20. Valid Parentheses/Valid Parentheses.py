class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        close = {")" : "(" , "}" : "{" , "]" : "[" }


        for value in s :

            if value in close:
                if stack and stack[-1] == close[value]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(value)

        return True if not stack else False
            

        