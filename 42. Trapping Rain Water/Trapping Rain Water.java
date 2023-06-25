class Solution {
    public int trap(int[] h) {
        int l = 0;
        int r = h.length - 1;
        int maxL = h[0];
        int maxR = h[r];
        int result = 0;

        while (l < r) {
            if (maxL < maxR) {
                l++;
                maxL = Math.max(maxL, h[l]);
                result += (maxL - h[l]);
            } else {
                r--;
                maxR = Math.max(maxR, h[r]);
                result += (maxR - h[r]);
            }
        }

        return result;
    }
}
