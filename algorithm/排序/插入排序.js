// 每次将一个数插入到有序的数组中去(初始一个数字自然有序)。
/**
 * 思路 
 *  循环的数  与 前面已经排序好的数组进行比较， 都从排序好的数的最右侧比较(最大的)， 减少比较次数
 * 1. 默认第一个元素有序，从第二个元素开始遍历数组
 * 2.如果当前数 比 排序 大，break, 比排序数小，就从右侧一个个换位置
 */
function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    let target = i;
    for (let j = i - 1; j >= 0; j--) {
      if (array[target] < array[j]) {
        [array[target], array[j]] = [array[j], array[target]]
        target = j;
      } else {
        break;
      }
    }
  }
  return array;
}

// function insertSort(arr) {
//   let length = arr.length;
//   for(let i = 1; i < length; i++) {
//     let temp = arr[i];
//     let j = i;
//     for(; j > 0; j--) {
//       if(temp >= arr[j-1]) {
//         break;      // 当前考察的数大于前一个数，证明有序，退出循环
//       }
//       arr[j] = arr[j-1]; // 将前一个数复制到后一个数上
//     }
//     arr[j] = temp;  // 找到考察的数应处于的位置
//   }
//   return arr;
// }

// example
let arr = [2,5,10,7,10,32,90,9,11,1,0,10]
console.log(insertSort(arr));