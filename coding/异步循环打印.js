/**
 * 异步循环打印  promise + async await
 */
const sleep = function (time, i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(i)
    }, time)
  })
}

const start = async function (num) {
  for (let i = 0; i < num; i++) {
    let result = await sleep(i)
    console.log(`result`, result)
  }
}
start(6)
