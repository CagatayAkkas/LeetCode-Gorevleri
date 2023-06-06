class Solution {
    public int findCircleNum(int[][] array) {
        int n = array.length;
        int counter = 0;
        int[] checker = new int[n];

        for (int index = 0; index < n; index++) {
            if (checker[index] == 0) {
                counter++;
                dfs(index, array, checker);
            }
        }

        return counter;
    }

    private void dfs(int node, int[][] array, int[] checker) {
        checker[node] = 1;

        for (int i = 0; i < array[node].length; i++) {
            if (array[node][i] == 1 && checker[i] == 0) {
                dfs(i, array, checker);
            }
        }
    }
}
