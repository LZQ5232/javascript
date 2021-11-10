/*
 * @Author: your name
 * @Date: 2021-10-29 18:36:16
 * @LastEditTime: 2021-10-29 18:36:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \javascript\coding\模版字符串.js
 */

let obj = {
  name: 'lily',
  age: 90
}

let str2 = '${obj.name}的年龄是${obj.age}';

function replacefunc(desc) {
  return desc.replace(/\$\{([^}]+)\}/g, function (match, key) {
    console.log(match);  // ${obj.name} || ${obj.age}
    console.log(key); // obj.name || obj.age
    console.log(eval(key)); // lily || 90
    return eval(key);
  })
}
console.log(replacefunc(str2));