// new 被调用后做了三件事情
// 1. 让实例可以访问到私有属性
// 2. 让实例可以访问构造函数原型(constructor.prototype)所在原型链上的属性
// 3. 如果构造函数返回的结果不是引用数据类型,则返回这个空对象，否则返回运行结果

/** 
 * 1.创建控对象
 * 2.进行原型链连接
 * 3.将this绑定为创建对象 运行构造函数时 
 * 4.返回结果
*/

function newOperator(ctor, ...args) {
  if (typeof ctor !== 'function') {
    throw 'newOperator function the first param must be a function';
  }
  // 创建空对象，并建立原型链连接
  let obj = Object.create(ctor.prototype)
  let res = ctor.apply(obj, args)

  let isObject = typeof res === 'object' && res !== null;
  let isFunction = typeof res === 'function';
  return isObject || isFunction ? res : obj;
}