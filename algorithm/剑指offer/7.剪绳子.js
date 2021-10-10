/** 
 * 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 * k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，* 我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
*/
/** 
 * 采用动态规划实现
 * 思路：  
 * 1.构建全为1长度为n+1的数组(因为这样下标为n才为最后一个数据)
 * 2.dp[i] 代表长度为i的绳子被剪成n段后的最大乘积
 * 3.动态规划的结束的条件为dp[2]=1,乘积1*1=1
 * 4.动态规划的一般方程是 dp[i]=Max(dp[i],j*(i-j),j*dp[i-j])
 * 5.i从3开始遍历，j从1开始遍历，i-j代表绳子拆成两段时另一段长度
*/
/**
 * 剪绳子
 * @param {*} n 长度
 */
function cuttingRope(n) {
  // 1.对于一些长度固定的数，可以简单计算出来
  if (n <= 2) return 1;
  if (n === 3) return 2;
  // 2.创建一个长度为n+1的数组 并填充满1
  const dp = new Array(n + 1);
  dp.fill(1)
  // 3. 遍历 从下往上循环 长度从3开始
  for (let i = 3; i < dp.length; i++) {
    // 4.对半分时 另一段长度的选择
    for (let j = 1; j < i; j++) {
      // 5.动态规划的计算公式
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
    }
  }
  return dp[n]
}

console.log(`cuttingRope(10)`, cuttingRope(10))


/**
 * 贪心算法
 * 思路
 * 1.当n>=5 时，尽可能剪长度为3的绳子
 * 2。剩下的绳子为4时，把绳子剪成两段长度为2的绳子
 * 
 * n>=5  => 2(n-2)>n && 3(n-3)>n
 * 并且  3(n-3) >= 2(n-2)  => n>= 5
 */
function maxProductAfterCutting(n) {
  if (n<2) return 0;
  if (n===2) return 1;
  if (n === 3) return 2;

  // 1.尽可能多的去剪长度为3
  let timesOf3 = Math.floor(n/3);
  // 2.如果最后剩下的长度为4则，需要剪成2*2
  if (n - (timesOf3 * 3) === 1) {
    timesOf3 -= 1;
  }
  // 3.剩下的4 = 2*2
  const timesOf2 = (n - timesOf3*3) / 2;
  // 4.每段长度想乘
  return Math.pow(3, timesOf3) * Math.pow(2, timesOf2)
}
console.log(`maxProductAfterCutting(8)`, maxProductAfterCutting(10))