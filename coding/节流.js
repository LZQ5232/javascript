/**
 * 节流原理
 * 持续触发事件，每隔一段时间，只执行一次事件
 * 根据首次是否执行以及结束后是否执行，效果有所不同，实现的方式也有所不同。
 * 我们用 leading 代表首次是否执行，trailing 代表结束后是否再执行一次。
 * 关于节流的实现，有两种主流的实现方式，一种是使用时间戳，一种是设置定时器。
 */
/**
 * 1. 使用时间戳
 * 使用时间戳，当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳(最一开始值设为 0 )，
 * 如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行
 */
function throttle(func, wait) {
  var context, args
  var previous = 0

  return function () {
    var now = +new Date()
    context = this
    args = arguments
    // 当前时间 - 前一次触发时的时间的差 与 间隔时间比较
    if (now - previous > wait) {
      func.apply(context, args)
      previous = now
    }
  }
}

/**
 * 2. 使用定时器
 * 当触发事件的时候，我们设置一个定时器，再触发事件的时候，如果定时器存在，
 * 就不执行，直到定时器执行，然后执行函数，清空定时器这样就可以设置下个定时器
 */
function throttle(func, wait) {
  var timeout, context, args

  return function () {
    context = this
    args = arguments
    // 定时器不存在时才继续执行
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.apply(context, args)
      }, wait)
    }
  }
}

/** 对比两种方法
 * 1.第一种事件会立刻执行，第二种事件会在n秒后第一次执行
 * 2.第一种事件停止触发后没有办法再执行事件，第二种事件停止触发后依然会再执行一次事件
 */

// 双剑合璧
// 我想要一个有头有尾的！就是鼠标移入能立刻执行，停止触发的时候还能再执行一次！
function throttle(func, wait) {
  var timeout, context, args, result
  var previous = 0

  // 最后执行的函数  对数据进行清理
  var later = function () {
    previous = +new Date()
    timeout = null
    func.apply(context, args)
  }

  var throttled = function () {
    // 1. 记录当前运行时间
    var now = +new Date()
    // 2. 下次执行的剩余时间
    var remaining = wait - (now - previous)
    context = this
    args = arguments
    // 3.判断： 没有剩余时间则直接执行，并更换上一个时间
    if (remaining < 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(context, args)
    } else if (!timeout) {
      timeout = setTimeout(later, wait)
    }
  }
  return throttled
}

/**
 * 那我们设置个 options 作为第三个参数，然后根据传的值判断到底哪种效果，我们约定:
 * leading：false 表示禁用第一次执行
 * trailing: false 表示禁用停止触发的回调
 */

function throttle(func, wait, options) {
  var timeout, context, args, result
  var previous = 0
  if (!options) options = {}

  var later = function () {
    previous = options.leading === false ? 0 : new Date().getTime()
    timeout = null
    func.apply(context, args)
    if (!timeout) context = args = null
  }

  var throttled = function () {
    var now = new Date().getTime()
    // 是否禁用第一次， 禁用 则将上一个时间设置为当前运行的时间
    if (!previous && options.leading === false) previous = now
    // 剩余时间
    var remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing) {
      // 最后一次执行
      timeout = setTimeout(later, remaining)
    }
  }
  throttled.cancel = function () {
    clearTimeout(timeout)
    previous = 0
    timeout = null
  }
  return throttled
}