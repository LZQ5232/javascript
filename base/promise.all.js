/**
 * 实现promise.all
 * 1. 接收一个 Promise 实例的数组或具有 Iterator 接口的对象
 * 2. 如果元素不是 Promise 对象，则使用 Promise.resolve 转成 Promise 对象
 * 3. 如果全部成功，状态变为 resolved，返回值将组成一个数组传给回调
 * 4.只要有一个失败，状态就变为 rejected，返回值将直接传递给回调all() 的返回值也是新的 Promise 对象
 */

function promiseAll(iterable) {
  let array = Array.from(iterable)
  let resolveNum = 0; //处理次数
  let promiseNum = array.length;
  let lists = new Array(promiseNum);
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promiseNum; i++) {
      // 将每一项都用resolve进行包括
      Promise.resolve(array[i]).then(res => {
        lists[i] = res
        resolveNum++;
        if (resolveNum === promiseNum) {
          resolve(lists)
        }
      }).catch(reason => {
        reject(reason)
      })
    }
  })
}

var p1 = Promise.resolve(1),
  p2 = Promise.reject(2),
  p3 = Promise.resolve(3);


promiseAll([p1, p2, p3]).then(function (results) {
  //then方法不会被执行
  console.log(results);
}).catch(function (e) {
  //catch方法将会被执行，输出结果为：2
  console.log(2);
});



Promise.prototype.all = function (iterable) {
  const array = Array.from(iterable)
  const promiseNum = array.length
  let resolveNum = 0;
  let lists = new Array(promiseNum)
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(array[i]).then(res => {
        lists[i] = res;
        resolveNum++;
        if (resolveNum === promiseNum) {
          resolve(lists);
        }
      }).catch(err => {
        reject(err)
      })
    }
  })
}
