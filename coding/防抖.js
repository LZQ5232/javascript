/** 
 * 频繁触发
 * window 的 resize、scroll mousedown、mousemove  keyup、keydown
*/

/**
 *  防抖函数
 * 触发事件，一定得事件触发完成N秒后才执行，如果在n秒内频繁触发则重新更新时间
 * @param {*} func 需要进行操作的函数
 * @param {*} wait 等待的时间间隔
 * @param {*} immediate 是否立即触发
 */
function debounce(func, wait, immediate) {
  var timeout, result;
  var debounced = function() {
    var context = this;
    var args = arguments;

    if (timeout) clearTimeout(timeout)
    // 立即执行
    if (immediate) {
      // 如果已经执行过  不需要再执行
      var callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
        if (callNow) result = func.apply(context, args); 
      }, wait);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait);
    }
  } 
  // 取消防抖
  debounced.cancel = function() {
    clearTimeout(timeout)
    timeout = null;
  }

  return debounced;
}

function debounce(event, time, immediate) {
  let timer = null
  return function(...args) {
    clearTimeout(timer)
    if (!timer && immediate) {
      event.apply(this, args)
    }
    timer = setTimeout(() => {
      event.apply(this, args)
    }, time);
  }
}