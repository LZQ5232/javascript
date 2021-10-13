
// 1. 循环嵌套
var array = [1, 1, '1', '1']

function unique(array) {
  var res = []
  for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
    for (var j = 0, resLen = res.length; j < resLen; j++ ) {
        if (array[i] === res[j]) {
            break;
        }
    }
    // 如果array[i]是唯一的，那么执行完循环，j等于resLen
    if (j === resLen) {
        res.push(array[i])
    }
}
return res;
}
console.log(unique(array)); // [1, "1"]

// 2. indexOf
function unique(array) {
  var res = []
  for(var i = 0, len = array.length; i< len; i++) {
    var current = array[i]
    if (res.indexOf(current) === -1) {
      res.push(current)
    }
  }
  return res;
}

// 3. 排序后去重
function unique(array) {
  var res = []
  var sortedArray = array.concat().sort()
  var seen;
  for(var i = 0,len = sortedArray.length; i< len; i++) {
    // 如果是第一个元素或者相邻的元素不想通
    if (!i || seen !== sortedArray[i]) {
      res.push(sortedArray[i])
    }
    seen = sortedArray[i]
  }
  return res;
}
console.log(unique(array));

// filter去重
function unique(array) {
  var res = array.filter(function(item, index) {
    return array.indexOf(item) === index;
  })
  return res;
}
console.log(unique(array));
// 排序去重
function unique(array) {
  return array.concat().sort().filter(function(item, index) {
    return !index || item !== array[index - 1]
  })
}
// es6
function unique(array) {
  return Array.from(new Set(array));
}

function unique(array) {
  return [...new Set(array)]
}

// Map
function unique(arr) {
  const seen = new Map()
  return arr.filter(a => !seen.has(a) && seen.set(a, 1));
}

// indexOf + filter
const unique = arr => arr.filter((e, i) => arr.indexOf(e) === i)