/**
 * @param {*} context 需要绑定this对象
 * 1.前置判断 绑定的this对象可以为null,为null时需要设置为window
 * 2.将函数设置为context对象的一个属性
 * 3. 让属性执行，带上剩余参数
 * 4.删除此属性 
 * 5.返回函数执行结果
 */
Function.prototype.call = function (context) {
  // 1.判断context为空 
  context = context || window;
  let fn = Symbol('fn'); // 为了防止对象上的属性冲突
  context[fn] = this; // this代表当前调用的函数

  var args = []
  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  let result = eval('context.fn(' + args + ')')
  delete context[fn]
  return result;
}

Function.prototype.call = function (context, ...args) {
  context = context || window;
  let fn = Symbol('fn');
  context[fn] = this;

  const result = eval('context.fn(...args)')
  delete context[fn]
  return result;
}