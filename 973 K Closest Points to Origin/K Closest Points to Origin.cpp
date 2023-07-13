class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
        vector<vector<int>> minHeap;

        for (const auto& point : points) {
            int x = point[0];
            int y = point[1];
            int dist = x * x + y * y;
            minHeap.push_back({dist, x, y});
        }

        make_heap(minHeap.begin(), minHeap.end(), greater<vector<int>>());

        vector<vector<int>> res;

        while (k > 0) {
            pop_heap(minHeap.begin(), minHeap.end(), greater<vector<int>>());
            res.push_back({minHeap.back()[1], minHeap.back()[2]});
            minHeap.pop_back();
            k--;
        }

        return res;
    }
};
