Function.prototype.apply = function(context, args) {
  context = context || window
  let fn = Symbol('fn')
  context[fn] = this;

  const result = eval('context[fn](...args)')
  delete context[fn]
  return result;
}

Function.prototype.apply = function(context = window, args) {
  if (this === Function.prototype) {
    return undefined; // 用于防止 Function.prototype.apply() 直接调用
  }
  const fn = Symbol('fn')
  context[fn] = this;  
  let result;
  if (Array.isArray(args)) {
    result = context[fn](...args)
  } else {
    result = context[fn]()
  }
  delete context[fn]
  return result
}