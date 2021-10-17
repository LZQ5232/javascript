/**
 * 题目描述
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点*的路径，这条路径上所有节点值相加等于目标和。
 * 说明: 叶子节点是指没有子节点的节点。
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** 
 * 思路一： 深度优先遍历
 * - 在深度优先遍历的过程中，记录当前路径的节点值和
 * - 在叶子节点处，判断当前路径的节点值的和是否等于目标值
*/

const hasPathSum = (root, sum) => {
  // 1. 不存在二叉树
  if (!root) return false;
  let res = false;
  /**
   * 
   * @param {*} node 当前节点
   * @param {*} s 累计的节点和
   */
  const dfs = (node, s) => {
    // 叶子结点时 计算结果
    if (!root.left && !root.right && s === sum) {
      res = true;
    }
    // 左右节点存在，继续深度遍历 积累和
    if (node.left) dfs(node.left, s + node.left.val)
    if (node.right) dfs(node.right, s + node.right.val)
  }

  dfs(root, root.val)
  return res;
}

/**
 * 思路二： 递归 
 * 1. 如果当前根节点不存在，返回false
 * 2. 当前节点是根节点，判断剩余值是否和节点值相等
 * 如果根节点是叶子节点，返回 sum 是否等于 根节点的值。
  否则，递归调用，分别将根节点的左节点和右节点作为新的根节点，将 sum - root.val 作为新的sum

  时间复杂度：O(N)，其中 N 是树的节点数。对每个节点访问一次。

  空间复杂度：O(H)，其中 H 是树的高度。空间复杂度主要取决于递归时栈空间的开销，最坏情况下，树呈现链状，空间复杂度为 O(N)。平均情况下树的高度与节点数的对数正相关，空间复杂度为 O(logN)。
 */
const hasPathSum = (root, sum) => {
  if (!root) { return false; }
  // 找到根节点
  if (!root.left && !root.right) {
    return sum === root.val
  }
  // 递归计算
  return hasPathSum(root.left, sum - root.left.val) || hasPathSum(root.right, sum - root.right.val)
}