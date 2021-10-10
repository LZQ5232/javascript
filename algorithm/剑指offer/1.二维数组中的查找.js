// 在一个二维数组中，每一行都按照从左到右递增的顺序排列，每一列按照从上到下递增的顺序排列。完成一个函数，输入这样的二维数组和一个整数，判断数组中是否含有该函数

/** 
 * 思路：
 * 二维数组平面化
 * 因为如果单纯根据数据的位置去找，有右下 或者 左上等 两个有重叠区域去查找，很麻烦
 *  可以根据二维数组的对角线进行查找
 *  1.找到二维数组的右对角线数据，进行比较，如果比对角线小，则可以将当列数据去掉，如果存在就直接找到返回，如果比对角线数据大，则剔除当前行
*/
/**
 * 下面的先从左下角比较
 * @param {*} target 目标数字 
 * @param {*} array 二维数组
 */
function Find(target, array) {
  let y = array.length - 1; // y坐标
  let x = 0; // x坐标
  return compare(target, array, x, y);
}

function compare(target, array, x, y) {
  // 没找到该元素
  if (array[y] === undefined || array[x][y] === undefined) {
    return false
  }
  let temp = array[x][y]
  // 2.找到了
  if (temp === target) { return true }
  // 3.当前数字比目标数字要大，向右找
  else if (temp > target) {
    return compare(target, array, x + 1, j);
  }
  // 4. 当前数字比目标数据要小，向上找
  else if (temp < target) {
    return compare(target, array, x, j - 1);
  }
}

/** 
 * 右上角比较
*/
function Find(target, array) {
  let y = 0; // y坐标
  let x = array.length - 1; // x坐标
  return compare(target, array, x, y);
}

function compare(target, array, x, y) {
  // 1. 没有找到
  if (array[x] === undefined || array[x][y] === undefined) {
    return false
  }
  let temp = array[x][y]
  // 2. 找到了
  if (target === temp) {
    return true;
  }
  // 3. 当前数据比target大
  else if (temp > target) {
    return compare(target, array, x, y + 1)
  }
  // 4. 当前数据比target小
  else if (temp < target) {
    return compare(target, array, x + 1, y)
  }
}