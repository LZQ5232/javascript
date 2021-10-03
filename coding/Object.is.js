// Object在严格等于的基础上修复了一些特殊情况下的失误，具体来说就是+0和-0，NaN和NaN

function is(x, y) {
  // 判断 +0 -0
  if (x === y) {
    // +0 !== 0 false  -0 !== 0 false
    // 1/+0 = +Infinity， 1/-0 = -Infinity
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // 处理NaN
    return x !== x && y !== y;
  }
}