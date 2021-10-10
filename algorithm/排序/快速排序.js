/** 
 * 思路：
 * 1. 选择一个基准元素target 一般选择第一个数
 * 2. 将比target小的元素移动到数组左边，比target大的元素移动到数组右边
 * 3. 分别对target左侧和右侧做快速排序
 * 
 * 分治思想： 将问题分解成一些小问题递归求解
 * 
 * 时间复杂度：平均O(nlogn)，最坏O(n2)，实际上大多数情况下小于O(nlogn)
 * 空间复杂度:O(logn)（递归调用消耗）
*/

/** 
 * 实现一：
 * 单独开辟两个存储空间left 、right 来存储每次递归比target小和大的序列 
 * 浪费大量空间
*/
function quickSort(array) {
  // 1.如果数组长度小于2
  if (array.length < 2 ) {
    return array;
  }
  let left = []
  let right = []
  const target = array[0] // 基准元素
  // 从第2个元素开始比较
  for (let i = 1; i < array.length; i++) {
    if (target > array[i]) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  return quickSort(left).concat(target, quickSort(right))
}

let arr = [2,7,5,10,32,1,0]
console.log(quickSort(arr));