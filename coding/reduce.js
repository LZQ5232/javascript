/**
 * 1. 调用必须为数组
 * 2. 空数组必须要有初始值
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  // 判断调用对象是否为数组
  if (Object.prototype.toString.call([]) !== '[object Array]') {
    throw new TypeError('not a array')
  }
  // 判断调用数组是否为空数组
  const sourceArray = this
  if (sourceArray.length === 0 && !initialValue) {
    throw new TypeError('Reduce of empty array with no initial value')
  }
  // 第一个参数不是函数
  if (Object.prototype.toString.call(callbackFn) != "[object Function]") {
    throw new TypeError(callbackFn + " is not a function");
  }
  var acc = initialValue || this[0]; // 第一个值
  // 开始索引
  var startIndex = initialValue ? 0 : 1;
  // 遍历数组 进行处理函数处理
  for (let i = startIndex, len = this.length; i < len; i++) {
    // 当前结果  当前项  索引  原属组
    acc = callbackFn(acc, this[i], i, this)    
  }
  return acc;
}