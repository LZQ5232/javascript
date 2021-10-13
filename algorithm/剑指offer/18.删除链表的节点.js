/** 
 * 题目：给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
 * 思路：
 * 要删除节点i，先把i的下一个节点j的内容复制到i，然后把i的指针指向节点j的下一个节点
 * 
 * 特殊情况
 * 1.传入参数为空
 * 2. 要删除节点为尾节点，需要遍历找到它前面的节点完成删除
 * 3.如果链表只有一个节点，则删除的是头/尾节点  需要将链表头指针设置为nullptr
 * O(1)
*/
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var deleteNode = function (head, val) {
  if (!head || !val) {
    return;
  }
  var prev = new ListNode(-1)
  prev.next = head
  var node = prev;
  while (node.next) {
    // 找到了该值
    if (node.next.val === val) {
      // 指针下移一位
      node.next = node.next.next;
      break;
    }
    node = node.next;
  }
  return prev.next;
}
