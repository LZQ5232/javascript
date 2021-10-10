/** 
 * 二进制中1的个数
 * 请实现一个函数，输入一个整数，输出该整数二进制表示中1的个数。例如把9表示成二进制是1001，有2位是1
*/

// 下面是伪代码
// 方法一： 遍历完整个二进制数
function numberOf1(n) {
  let str = n.toString(2)
  let flag = 1;
  let count = 0;
  while (flag) {
    // 二进制 与 1 做 与运算，1&1=1 其他为0
    if (str & flag) {
      count++
    }
    // 左移一位 1  10  100 可以从右往左依次处理
    flag = flag << 1;
  }
  return count;
}
// console.log(`numberOf1(9)`, numberOf1(9))

/** 
 * js实现
 * 1.将输入的二进制串转换为二进制字符串
 * 2. 使用for循环，遍历其中1的个数
*/
const numberOf1 = (n) => {
  let str = n.toString(2)
  let count = 0;
  for (const v of str) {
    if (v === '1') {
      count += 1;
    }
  }
  return count;
}
console.log(`numberOf1(010110)`, numberOf1(010110))

/**
 * 位运算  方法2  优秀  只需要循环几个1的次数
 * 一个整数减去1，都是把最右边的1变成0
 * 如果右边还有0，则所有的0变成1，而它左边的所有位都保持 不变
 * 把一个整数减去1，再和原整数做与运算，会把该整数最右边的1变成0
 * 1100 - 1  => 1011   1011 & 1100 => 1000   相当于去掉了最右边一位1
 */

function numberOf1(n) {
  let count = 0;
  // 一个个去掉最右边1，直到为0
  while (n) {
    ++count;
    n = (n - 1) & n
  }
  return count;
}
// 相关题目
/**  题目：一条语句 判断整数是不是2的整数次方  
 * 一个整数如果是2的整数次方，那么它的二进制表示中有且只有一位是1，而其他位都为0， 将这个整数减去1之后再和它自己做与运算，这个整数唯一的1会变成0
 * 
 */