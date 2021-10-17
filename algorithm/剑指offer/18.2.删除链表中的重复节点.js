// 18.2 删除链表中重复的结点

// 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，
// 重复的结点不保留，返回链表头指针。例如，链表1->2->3->3->4->4->5
// 处理后为 1->2->5
/** 
 * 思路：
 * 1. 先判断边界条件，指针是否存在和链表长度
 * 2. 有重复节点，需要删除，但是要保证链表仍然相连 当前节点的前一个节点与后面比当前节点的值大的节点相连
*/
function ListNode(x) {
  this.val = x;
  this.next = null;
}

function deleteDuplication(pHead) {
  // 1.只有0/1个节点
  if (pHead === null || pHead.next === null) {
    return pHead
  }
  // 有重复节点
  if (pHead.val === pHead.next.val) {
    let node = pHead.next;
    while (node!==null && node.val === pHead.val) {
      // 跳过值与当前节点相同的全部节点，找到第一个与当前节点不同的节点
      node = node.next;
    }
    // 从第一个与当前节点不同的节点开始递归
    return deleteDuplication(node);
  } else {
    // 不是重复节点
    pHead.next = deleteDuplication(pHead.next)
    return pHead
  }
}