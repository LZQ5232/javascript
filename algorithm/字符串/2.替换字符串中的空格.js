// 实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy。则经过替换之后的字符串为We%20Are%20Happy

// 一个空格
// 1. 先根据空格 拆成数组 - 然后用%20拼接
// const replaceSpace = (str)  => {
//   return str.split(' ').join('%20')
// }

// 2.正则表达式
// const replaceSpace = str => {
//   return str.replace(/\s/g, '%20')
// }

// 多个空格替换
const replaceSpace = str => {
  return str.replace(/\s+/g, '%20')
}
console.log(`replaceSpace('We Are Happy)`, replaceSpace('We  Are   Happy'));