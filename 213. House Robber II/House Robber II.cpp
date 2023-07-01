#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int rob(vector<int>& nums) {
        if (nums.size() == 1) {
            return nums[0];
        }

        return max(calculate(vector<int>(nums.begin() + 1, nums.end())), calculate(vector<int>(nums.begin(), nums.end() - 1)));
    }

    int calculate(const vector<int>& nums) {
        int rob1 = 0;
        int rob2 = 0;
        for (int value : nums) {
            int temp = max(rob1 + value, rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        return rob2;
    }
};
