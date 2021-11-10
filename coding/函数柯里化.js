/** 
 * 柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
 * 
 * 通俗易懂的解释：用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数
 * 
 * 1. 判断当前函数传入的参数是否大于或等于fn需要参数的数量，如果是，直接执行fn
 * 2. 如果传入参数数量不够，返回一个闭包，暂存传入的参数，并重新返回curring函数
 * 
 * 参数复用。本质上是降低通用性，提高适用性。
*/
function currying(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args)
  } else {
    return (...args2) => currying(fn, ...args, ...args2)
  }
}
const fun = (a, b, c) => {
  return a + b + c;
}
const curryingFun = currying(fun)
console.log(`curryingFun`, curryingFun)
curryingFun(1)(2)(3);  // 1 2 3 
curryingFun(1, 2)(3);  // 1 2 3 
curryingFun(1, 2, 3);  // 1 2 3 