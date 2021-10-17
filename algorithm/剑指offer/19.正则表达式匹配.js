/**
 * 题目： 请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配
 * 
 * 思路：递归
 * 1. 当模式中第二个字符不为 “*” 时：若当前字符相等，则字符串和模式都后移一个字符，继续调用函数进行比较；若不相等，则返回false
 * 2.当模式中第二个字符为 “*” 时
 *    2.1） 若当前字符不相等，则模式后移两个字符，继续比较
 *    2.2）若当前字符串相等，有三种情况
 *      2.2.1）字符串字符位置不变，模式向后移动两位 // x*被忽略
 *      2.2.2）字符串向后移动一个字符，模式向后移动两个字符，继续比较 //匹配一次
 *      2.2.3）字符串向后移动一个字符，模式不变(多个字符被匹配)，继续比较 // 匹配多次
 */