// 前面两项的和等于第三项
// 递归
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 2.循环
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let fibMinusOne = 1;
  let fibMinusTwo = 0;
  let fibN = 0;
  for(let i =2; i<=n; i++) {
    fibN = fibMinusOne + fibMinusTwo

    fibMinusTwo = fibMinusOne;
    fibMinusOne = fibN
  }
  return fibN;
}

console.log(`fibonacci(5)`, fibonacci(8))