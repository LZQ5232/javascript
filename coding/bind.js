Function.prototype.apply = function(context, args) {
  context = context || window
  let fn = Symbol('fn')
  context[fn] = this;

  const result = eval('context[fn](...args)')
  delete context[fn]
  return result;
}