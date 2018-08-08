// 有
// 1. 一个二维数组
// 2. 每一行都从左到右递增的顺序
// 每一列从上到下递增
// 3. 完成一个函数，判断是否有此数。
// target 10
// 1,5,8,10,31,24
// [[1,2,3,4],
// [5,6,7,8],
// [13,23,21,17]]、

// 时间复杂度： O(log2n)

function find(target, arr) {
    let i = 0; //row
    let j = arr[i].length - 1 //该行的最后一个

    while (i < arr.length && j >= 0) {
        if (arr[i][j] < target) {
            i++;
        } else if (arr[i][j] > target) {
            j--;
        } else {
            return true;
        }
    }
    return false;
}

console.log(find(10, [
[1, 2, 3, 4],
[5,6,7,10],
[13,17,20,23]
]));