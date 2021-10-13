// 从最后一个元素开始，从数组任意位置进行位置交换，直到第一个元素
function disorder(array) {
  const length = array.length
  let current = length - 1
  let random
  while (current > -1) {
    random = Math.floor(length * Math.random())
    ;[array[current], array[random]] = [array[random], array[current]]
    current--
  }
  return array
}
console.log(`disorder([1,2,3,4,5,6,7,8])`, disorder([1, 2, 3, 4, 5, 6, 7, 8]))
