class Solution
{
public:
    bool isPalindrome(string s)
    {
        int l = 0, r = s.length() - 1;

        while (l < r)
        {
            while (l < r && !isAlpha(s[l]))
            {
                l++;
            }

            while (r > l && !isAlpha(s[r]))
            {
                r--;
            }

            if (tolower(s[l]) != tolower(s[r]))
            {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }

private:
    bool isAlpha(char letter)
    {
        return (letter >= 'A' && letter <= 'Z') || (letter >= 'a' && letter <= 'z') || (letter >= '0' && letter <= '9');
    }
};
