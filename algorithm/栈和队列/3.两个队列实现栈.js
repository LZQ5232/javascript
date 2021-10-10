// 用两个队列实现一个栈
/**
 * 思路
 * 栈：后进先出 队列：先进先出
 * 1.将一个队列存储入栈数据 另一个队列暂时为空
 * 2.当栈中要删除一个元素时，可以让队列1 将元素一个个删除，并将删除的元素入队列，然后直到找到要删除的元素 
 * 3.这两个队列是互相存储数据和进行操作
 */
const queue1 = [];
const queue2 = [];
function push(x) {
  // 如果当前队列1为空，则让它先默认添加数据
  if (queue1.length === 0) {
    queue1.push(x)

    while (queue2.length) {
      queue1.push(queue2.shift())
    }
  }else if (queue2.length === 0) {
    queue2.push(x)

    while (queue1.length) {
      queue2.push(queue1.shift())
    }
  }
}
function pop() {
  if (queue1.length !== 0) {
    queue1.shift()
  } else {
    queue2.shift();
  }
}