// 简易版本
JSON.parse(JSON.stringify())

// 问题
// 1. 无法解决 循环引用 的问题
// 拷贝a会出现系统栈溢出， 无限递归
const a = { val: 2 }
a.target = a

// 2.无法拷贝一些 特殊的对象， 诸如 RegExp. Date, Set, Map
// 3. 无法拷贝 函数

const deepClone = (target) => {
  if (typeof target === 'object' && target !== null) {
    const cloneTarget = Array.isArray(target) ? [] : {}
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = deepClone(target[prop])
      }
    }
    return cloneTarget
  } else {
    return target
  }
}

// 解决循环引用问题
const isObject = (target) =>
  (typeof target === 'object' || typeof target === 'function') &&
  target !== null

const deepClone = (target, map = new WeakMap()) => {
  if (map.get(target)) return target

  if (isObject(target)) {
    map.set(target, true)
    const cloneTarget = Array.isArray(target) ? [] : {}
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = deepClone(target[prop], map)
      }
    }
    return cloneTarget
  } else {
    return target
  }
}
/**
 * 问题： map 上的 key 和 map 构成了强引用关系
 * 在计算机程序设计中，弱引用与强引用相对，
 * 弱引用：指不能确保其引用的对象不会被垃圾回收器回收的引用.一个对象若只被弱引用引用，则被认为是不可访问(或弱可访问的)，并因此可能在任何时刻被回收
 * 弱引用的对象可以在 任何时刻被回收， 而对于强引用来说，只要这个强引用还在，那么对象无法被回收。拿上面的例子说，map 和 a一直是强引用的关系， 在程序结束之前，a 所占的内存空间一直不会被释放
 * WeakMap 键是弱引用的 值可以是任意的
 */
const getType = (obj) => Object.prototype.toString.call(obj)
const isObject = (target) =>
  (typeof target === 'object' || typeof target === 'function') &&
  target !== null

const canTraverse = {
  '[object Map]': true,
  '[object Set]': true,
  '[object Array]': true,
  '[object Object]': true,
  '[object Arguments]': true,
}

const mapTag = '[object Map]'
const setTag = '[object Set]'
const boolTag = '[object Boolean]'
const numberTag = '[object Number]'
const stringTag = '[object String]'
const symbolTag = '[object Symbol]'
const dateTag = '[object Date]'
const errorTag = '[object Error]'
const regexpTag = '[object RegExp]'
const funcTag = '[object Function]'

// 处理正则
const handleRegExp = (target) => {
  // source 正则表达式  flags
  const { source, flags } = target
  return new target.constructor(source, flags)
}

// 处理函数
const handleFunc = (func) => {
  // 箭头函数直接返回自身
  if (!func.prototype) return func
  const bodyReg = /(?<={)(.|\n)+(?=})/m
  const paramReg = /(?<=\().+(?=\)\s+{)/
  const funcString = func.toString()
  // 分别匹配 函数参数 和 函数体
  const param = paramReg.exec(funcString)
  const body = bodyReg.exec(funcString)
  if (!body) return null
  if (param) {
    const paramArr = param[0].split(',')
    return new Function(...paramArr, body[0])
  } else {
    return new Function(body[0])
  }
}
// 不能遍历的数据
const handleNotTraverse = (target, tag) => {
  const Ctor = target.constructor
  switch (tag) {
    case boolTag:
      return new Object(Boolean.prototype.valueOf.call(target))
    case numberTag:
      return new Object(Number.prototype.valueOf.call(target))
    case stringTag:
      return new Object(String.prototype.valueOf.call(target))
    case symbolTag:
      return new Object(Symbol.prototype.valueOf.call(target))
    case errorTag:
    case dateTag:
      return new Ctor(target)
    case regexpTag:
      return handleRegExp(target)
    case funcTag:
      return handleFunc(target)
    default:
      return new Ctor(target)
  }
}

// 处理不能转换的数据类型
const deepClone = (target, map = new WeakMap()) => {
  if (!isObject(target)) return target
  // 拿到类型
  let type = getType(target)
  let cloneTarget
  // 不能转换的数据类型
  if (!canTraverse[type]) {
    return handleNotTraverse(target, type)
  } else {
    // 这波操作相当关键，可以保证对象的原型不丢失！
    let ctor = target.constructor
    cloneTarget = new ctor()
  }

  // 已经存在该对象
  if (map.get(target)) return target
  map.set(target, true)

  // 处理Map
  if (type === mapTag) {
    target.forEach((item, key) => {
      cloneTarget.set(deepClone(key, map), deepClone(item, map))
    })
  }
  // 处理set
  if (type === setTag) {
    target.forEach((item) => {
      cloneTarget.add(deepClone(item, map))
    })
  }
  // 处理数组和对象
  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
      cloneTarget[prop] = deepClone(target[prop], map)
    }
  }
  return cloneTarget
}
