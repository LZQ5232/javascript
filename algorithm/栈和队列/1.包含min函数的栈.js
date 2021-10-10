// 包含min函数的栈
// 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））

/** 
 * 思路
 * 1. 定义两个栈，一个栈存储数据 另一个存放每次数据进栈时的最小值
 * 2.每次数据进栈都进行比较，是否比最小栈中的最小值小，小则存入最小值栈
 * 3.最小值栈 永远是当前栈的最小值
 * 4. 两个栈都出栈
*/

const miniStack = []
const dataStack = []
// 进栈
function push(node) {
  // 存放数据
  dataStack.push(node)
  const minElement = min()
  // 如果是第一个元素或者 当前进栈元素比最小值栈中最小元素小
  if (miniStack.length === 0 || minElement > node) {
    miniStack.push(node)
  } else {
    miniStack.push(minElement)
  }
}
// 出栈
function pop() {
  miniStack.pop()
  dataStack.pop();
}

function min() {
  const length = miniStack.length
  return length > 0 && miniStack[length - 1]
}