/** 
 * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？
*/
var movingCount = function (m, n, k) {
  // 首先计算数位和
  function getSum(x, y) {
      const temp1 = String(x).split('');
      const temp2 = String(y).split('');
      const sumArr = [...temp1, ...temp2];
      const sums = sumArr.reduce((pre, cur) => pre + Number(cur), 0);
      return sums;
  }
  // 定义方向数组
  const directionArr = [
      // 向上
      [-1,0],
      // 向下
      [1,0],
      // 向左
      [0,-1],
      // 向右
      [0,1]
  ];

  // 走过的坐标，不在重复计算，通过Set数据结构来实现
  let set = new Set(['0,0']);
  // 定义一个队列，这个队列存放的是下一个符合条件的，机器人可以走的坐标
  const queue = [[0,0]];
  // 当队列中没有元素的时候，说明符合条件的全都走一遍了，且都存储在集合中了，此时集合中的数量就是最终需要返回的结果
  while (queue.length !== 0) {
      // 获取队头元素的上下左右的元素
      let [x,y] = queue.shift();

      for (let i = 0; i < 4; i++) {
          let offsetX = directionArr[i][0] + x;
          let offsetY = directionArr[i][1] + y;
          // 判断边界条件和是否已经走过
          if (offsetX < 0 || offsetY < 0 || offsetX >= m || offsetY >= n || getSum(offsetX,offsetY) > k || set.has(`${offsetX},${offsetY}`)) {
              continue;
          }
          set.add(`${offsetX},${offsetY}`);
          queue.push([offsetX,offsetY]);
      }
  }
  console.log(`set`, set)
  return set.size;
};


console.log(`111`, movingCount(35, 37, 18))