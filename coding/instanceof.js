/** 
 * instanceof  原理是基于原型链的查询
*/

function myInstanceof(left, right) {
  // 1. 不是对象 或者 为null 都为false
  if (typeof left !== 'object' || left === null) {
    return false
  }
  // 2.获取left的原型
  let proto = Object.getPrototypeOf(left)
  while (true) {
    // 3.查找到尽头了 没找到
    if (proto === null) return false
    if (proto === right.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto)
  }
}

console.log(myInstanceof('1111', String)) // false
console.log(myInstanceof(new String('111'), String)) // true
