// 第一种：数据循环 进行递归
const flat = (array) => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(flat(array[i]))
    } else {
      result.push(array[i])
    }
  }
  return result
}

const arr = [11, [22, 33], [22, [11, 4], [54, 3, 2], 4], 2, 4]
console.log(`flat(arr)`, flat(arr))

// reduce实现
const flat = (array) => {
  return array.reduce((prev, cur) => {
    return Array.isArray(cur) ? prev.concat(flat(cur)) : prev.concat(cur)
  }, [])
}