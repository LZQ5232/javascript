let ary = [1, [2, [3, [4, 5]]], 6];
let str = JSON.stringify(ary);
// 1.调用ES6的 flat方法
ary = ary.flat(Infinity)

// 2. repalce + split
ary = str.replace(/(\[|\])/g, '').split(',')

// 3. replace + JSON.parse
str = str.replace(/(\[|\])/g, '')
str = `[${str}]`
ary = JSON.parse(str);

// 4.普通递归
let result = []
let fn = function(ary) {
  for (let i = 0; i < ary.length; i++) {
    const item = ary[i];
    if (Array.isArray(item)) {
      fn(item)
    } else {
      result.push(item)
    }
  }
}
fn(ary);
console.log(`result`, result)

// 5. 利用reduce函数迭代
function flatten(ary) {
  return ary.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}
console.log(`flatten(ary)`, flatten(ary))

// 6.扩展运算符
while (ary.some(Array.isArray)) {
  ary = [].concat(...ary)
}