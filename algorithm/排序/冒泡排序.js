/**
 * 原理： 循环数组，比较当前元素和下一个元素，如果当前元素比下一个元素大，向上冒泡
 * 这样一次循环后找到最大值(最后一个数)，下次循环继续上面的操作，不循环已经排序好的数
 * 优化：当一次循环没有发生冒泡，说明已经排序完成，停止循环。
 * 
 * 复杂度
 * 时间复杂度： O(n^2)
 * 空间复杂度： O(1)
 */
function bubbleSort(array) {
  for (let j = 0; j < array.length; j++) {
    // 是否已经排序完成
    let complete = true
    for (let i = 0; i < array.length - 1 - j; i++) {
      // 比较相邻数
      if (array[i] > array[i + 1]) {
        // 交换位置
        [array[i + 1], array[i]] = [array[i], array[i + 1]]
        complete = false; // 没有完成
      }
    }
    // 如果此次循环没有冒泡，则排序已经完成
    if (complete) {
      break;
    }
  }
  return array;
}

let arr = [2,7,5,10,32,1,0]
console.log(bubbleSort(arr));