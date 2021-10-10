// 翻转单词顺序
// 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student."，则输出"student. a am I"。

// 第一种解法： 整个字符串根据空格拆分，然后反转数组再拼接
function ReverseSentence(str) {
  if (!str) { return '' }
  return str.split(' ').reverse().join(' ');
}
console.log(`object`, ReverseSentence('I am a student.'))

/* 
* 第二种解法：
* 1. 先将整个字符串翻转
* 2. 将字符串内的单个字符串进行翻转
*/

// 题目二： 左旋转字符串
/**
 * 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如输入字符串"abcdefg"和数字2，该函数将返回左旋转2位得到的结果"cdefgab"
 */
// 第一种 思路： 可以将两个字符串进行拼接后 截取，因为拼接后的字符串与前面是属于尾头拼接，直接截取字符串长度就相当于左旋转
/**
 * 
 * @param {string} str 字符串
 * @param {number} n 
 */
function leftRotateString(str, n) {
  if (str && n !== null) {
    return (str + str).substr(n, str.length);
  } else {
    return ''
  }
}

console.log(`leftRotateString()`, leftRotateString('abcdef', 2))

/** 
 * 第二种解法：
 * 1. 先将字符串拆分成两不部分ab cdef
 * 2. 两部分分别拆分 进行拼接 bafedc
 * 3. 将字符串反转 cdefab
*/
function leftRotateString(str, n) {
  if (str && n !== null) {
    let left = str.substr(0, n);
    let right = str.slice(n, str.length)
    left = left.split('').reverse();
    right = right.split('').reverse();
    str = left.concat(right).reverse().join('');
    return str;
  } else {
    return ''
  }
}
console.log(leftRotateString('abcdef', 2))