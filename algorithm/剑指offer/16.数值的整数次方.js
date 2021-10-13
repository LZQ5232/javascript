/**
 * 题目： 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
 * 考虑：
 * 1. 指数(exponent) 小于1  (零和负数)
 * 2. 底数(base) 是零且指数是负数的情况
 */

function power(base, exponent) {
  let res = 1, curr = base, n;
  if (exponent > 0) {
    n = exponent
  } else if (exponent < 0) {
    // 底数为0的处理
    if (base === 0) {
      throw new Error('分母不能为0')
    }
    // 指数为负
    n = -exponent
  } else {
    return 1;
  }
  while (n !== 0) {
    /* 举例：(10, 3) =>  3&1 == 0 !== 1
      res = 1* 10 = 10
      curr = 10 * 10 
      n>>1 = 1
      1&1 =1 res*=curr  res = 10*100
      curr = 100*100 = 10000
      n>>=1 1>>=1 => 0
      奇数 & 1 = 1
     */
    if ((n & 1) == 1) {
      res *= curr;
    }
    curr *= curr; // 翻倍
    n >>= 1; //右移一位 数字变小1
  }
  return exponent >= 0 ? res : 1 / res; //负数就是求倒数
}

console.log(`power(10, 2)`, power(10, 3))
console.log(`power(10, 2)`, power(10, -2))
console.log(`power(10, 2)`, power(0, -2))