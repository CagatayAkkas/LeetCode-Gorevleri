class Solution {
    public int[][] kClosest(int[][] points, int k) {
        List<int[]> minHeap = new ArrayList<>();

        for (int[] point : points) {
            int x = point[0];
            int y = point[1];
            int dist = x * x + y * y;
            minHeap.add(new int[]{dist, x, y});
        }

        Collections.sort(minHeap, (a, b) -> Integer.compare(a[0], b[0]));

        int[][] res = new int[k][2];

        for (int i = 0; i < k; i++) {
            res[i][0] = minHeap.get(i)[1];
            res[i][1] = minHeap.get(i)[2];
        }

        return res;
    }
}
