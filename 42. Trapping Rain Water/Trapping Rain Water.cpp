class Solution {
public:
    int trap(vector<int>& h) {
        int l = 0;
        int r = h.size() - 1;
        int maxL = h[0];
        int maxR = h[r];
        int result = 0;

        while (l < r) {
            if (maxL < maxR) {
                l++;
                maxL = max(maxL, h[l]);
                result += (maxL - h[l]);
            } else {
                r--;
                maxR = max(maxR, h[r]);
                result += (maxR - h[r]);
            }
        }

        return result;
    }
};
