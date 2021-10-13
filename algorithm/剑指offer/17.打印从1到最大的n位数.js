/**
 * 题目：输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999
 */

// 利用库函数 / es6+新语法
const printNumbers = (n) => {
  // 最大值
  // const max = Math.pow(10, n) - 1;
  const max = 10 ** n - 1;
  const res = []
  for(let i = 1; i<= max; ++i) {
    res.push(i)
  }
  return res;
}

// console.log(`printNumbers(3)`, printNumbers(2))

// 方法2 位运算
const printNumbers1 = (n) => {
  let max = 1, x = 10;
  while (n) {
    // 奇数数据时
    if (n & 1 == 1) {
      max = max * x; // 先✖️底数
    }
    x *= x; // 翻倍
    n>>=1; //右移一位   偶数右移一位 数值减1   奇数右移一位 变成下一个奇数 减2 3>>1 = 1
  }
  let res = []
  for (let i = 1; i < max; ++i) {
    res.push(i)
  }
  return res;
}
console.log(`printNumbers(3)`, printNumbers1(2))
