// 两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型

/** 
 * 思路
 * 队列：先进先出    栈：后进先出
 * 1.栈1 用于队列数据存储
 * 2.栈2 出队列时将栈1的数据依次出栈，并入栈到栈2中
 * 
 * 注意： 栈2为空才能补充栈1的数据，否则会打乱当前的顺序。 
*/

const stack1 = []
const stack2 = []

// 入队列
function push(node) {
  stack1.push(node);
}

// pop 出队列
function pop() {
  // 必须Stack2为空时，才能push进栈1pop的数据
  if (stack2.length === 0) {
    while (stack1.length > 0) {
      stack2.push(stack1.pop())
    }
  }
  return stack2.pop() || null;
}