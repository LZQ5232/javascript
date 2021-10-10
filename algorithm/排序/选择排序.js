/**
 * 思想：每次循环选取一个最小的数字放到前面的有序序列中
 * 时间复杂度：O(n2)
 * 空间复杂度:O(1)
 *
 * 不稳定
 */
function selectionSort(array) {
  // 每个元素都得循环一遍
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i
    // 剩余需要循环 求最小值的元素
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    // 交换位置
    ;[array[minIndex], array[i]] = [array[i], array[minIndex]]
  }
}

let arr = [2,7,5,10,32,1,0]
console.log(selectionSort(arr));