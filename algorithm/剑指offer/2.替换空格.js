// 请实现一个函数，把字符串中的每个空格替换成"%20" 例如：输入“we are happy” 则输出"we%20are%20happay"

const reaplceSpace = function(str, target) {
  return str.replace(/\s+/g, target);
}
console.log(`reaplceSpace()`, reaplceSpace('we are happy', '%20'))

// 考虑从右往左