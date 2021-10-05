/** 
 * 1.对于普通函数，绑定this指向
 * 2.对于构造函数，要保证原函数的原型对象那个上的属性不能丢失
*/

Function.prototype.bind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  var self = this;
  var fbound = function () {
    // 真正执行的时候 this的绑定
    self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)))
  }
  // 保持原型链的连接
  fbound.prototype = Object.create(self.prototype)
  return fbound;
}

Function.prototype.bind = function (context, ...args) {
  // 异常处理
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  // 保存this的值，它代表调用 bind 的函数
  var self = this;
  var fNOP = function () {};

  var fbound = function () {
      self.apply(this instanceof self ? 
          this : 
          context, args.concat(Array.prototype.slice.call(arguments)));
  }

  fNOP.prototype = this.prototype;
  fbound.prototype = new fNOP();

  return fbound;
}
