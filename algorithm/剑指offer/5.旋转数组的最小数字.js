/**
 * 题目：把一个数组最开始的诺干个元素搬到数组的末尾，我们称为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素，例如，数组[3,4,5,1,2] 为[1,2,3,4,5]的一个旋转，该数组的最小值为1
 * 
 * 第一种： 就是循环去遍历, 时间复杂度为O(n)
 * 第二种： 利用二分查找法  头尾指针
 * 第一个指针总是指向前面递增数组的元素，而第二个指针总是指向后面递增数组的元素。最终第一个指针将指向前面子数组的最后一个元素，而第二个指针会指向后面子数组的第一个元素，他们最终指向相邻元素，第二个指针指向最小元素
 * 
 * 特殊情况
 * 1. 将排序数组的前面0个元素进行旋转，即排序数组本身
 * 解决方法： 我们将头尾元素进行比较，如果尾元素大于头元素，我们直接返回第一个元素即可
 * 2. 头、尾、中间元素都是相同的时候，我们无法进行大小比较来确定中间的数是位于前子数组还是后子数组 
 * [1,0,1,1,1]   [1,1,1,0,1]
 * 解决方案： 对数组进行遍历操作拿到最小值
 */

function min(numbers) {
  // 1.特殊数组的处理
  if (!numbers || numbers.length <= 0) {
    throw new Error('输入数据不正确')
  }
  if (numbers.length === 1) {
    return numbers[0]
  }

  let index1 = 0;
  let index2 = numbers.length - 1;
  let indexMid = index1; // 默认为0

  while (numbers[index1] >= numbers[index2]) {
    // 两个指针相邻后，让mid等于尾指针
    if (index2 - index1 === 1) {
      indexMid = index2
      break;
    }
    // 取中间位置
    indexMid = Math.floor((index1 + index2) / 2)

    // 三个指针都相同
    if (numbers[index1] === numbers[index2] && numbers[indexMid] === numbers[index1]) {
      return minInOrder(numbers, index1, index2)
    }
    // 中间数比头指针大  在前子数组
    else if (numbers[indexMid] >= numbers[index1]) {
      index1 = indexMid
    }
    // 中间数比尾指针数组小
    else if (numbers[indexMid] <= numbers[index2]) {
      index2 = indexMid;
    }
  }
  // 1.如果为第一种特殊情况 直接返回 第一个元素
  return numbers[indexMid]
}
// 特殊情况2的处理
function minInOrder(numbers, index1, index2) {
  let result = numbers[index1]
  for (let i = index1 + 1; i < index2; i++) {
    if (result > numbers[i]) {
      result = numbers[i]
    }
  }
  return result;
}

const arr = [3,4,5,1,2]
const arr2 = [1,0,1,1,1]
const arr3 = [1,2,3,4,5]

console.log(min(arr))
console.log(min(arr2))
console.log(min(arr3))