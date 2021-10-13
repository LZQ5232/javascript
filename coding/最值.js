// reduce
const getMaxNum = (array) => {
  return array.reduce((c, n) => Math.max(c, n))
}

// Math.max
const array = [3,2,1,4,5];
Math.max.apply(null,array);
Math.max(...array);


// 使用reduce实现map
Array.prototype.reduceToMap = function(handler) {
  return this.reduce((target, current, index) => {
    target.push(handler.call(this,current, index))
    return target
  })
}
// #使用reduce实现filter
Array.prototype.reduceToFilter = function (handler) {
  return this.reduce((target, current, index) => {
    if (handler.call(this, current, index)) {
      target.push(current);
    }
    return target;
  }, [])
};