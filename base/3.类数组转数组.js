// 常见的类数组还有：

// 用getElementsByTagName/ClassName()获得的HTMLCollection
// 用querySelector获得的nodeList

// 1. Array.prototype.slice.call()
// 2. Array.from()
// 3. [...arguments]
function sum(a, b) {
  // let args = Array.prototype.slice.call(arguments)
  // let args = Array.from(arguments);
  // let args = [...arguments]
  // let args = Array.prototype.concat.apply([], arguments)
  console.log(args.reduce((sum, cur) => sum + cur))
}
sum(1, 2) // 3

// Array.from()
// [...arguments]