// 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）

/** 
 * 1. 只能出现数字、符号位(-、+)、小数位、指数位
 * 2.小数点不能在开头结尾，且不能在指数位后面 且只能一次
 * 3.符号位 只能在开头和 指数位后面
 * 4.指数位不能在开头结尾 且只能一次，后面不能带小数位
*/

function isNumeric(s) {
  // 1.为空判断
  if (s===undefined) {
    return false
  }
  let hasPoint = false; // 是否有.
  let hasExp = false; // 是否有指数
  // 2.遍历字符串
  for (let i = 0; i < s.length; i++) {
    const currentStr = s[i];
    // 1.如果是数字
    if (currentStr >= 0 && currentStr <= 9) {
      continue;
    }
    // 2.指数判断
    else if (currentStr === 'e' || currentStr === 'E') {
      // 2-1: 不是开头结尾 且只出现一次
      if (i === 0 || i === (s.length - 1) || hasExp) {
        return false
      } else {
        hasExp = true;
        continue;
      }
    }
    // 3.小数点判断
    else if(currentStr === '.') {
      // 3-1 不是开头结尾 不在指数位后面 且只有一次
      if (i === 0 || i === (s.length - 1) || hasPoint || hasExp) {
        return false;
      } else {
        hasPoint = true;
        continue;
      }
    }
    // 4.符号位判断 
    else if (currentStr === '-' || currentStr === '+') {
      // 4-1: 只能开头 和 指数位后面
      if (i === 0 || s[i-1] === 'e' || s[i-1] === 'E') {
        continue
      } else {
        return false
      }
    } else {
      // 5.其他字符
      return false
    }
  }
  return true;
}
// "+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都
const arr1 = ["-1E-16"]
const isRight = arr1.every(item => isNumeric(item))
console.log(`isRight`, isRight)