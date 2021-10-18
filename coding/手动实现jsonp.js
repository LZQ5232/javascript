/**
 * 1. 处理传入的参数，拼接url字符串
 * 2. 定义callbackName
 * 3. 创建script标签 添加到页面
 * 4. window下定义回调函数接受数据
 */

;(function (window, document) {
  var jsonp = function ({ url, data, callback }) {
    let dataString = url.indexOf('?') === -1 ? '?' : '&'
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        dataString += `${key}=${data[key]}&`
      }
    }
    // 拼接callbackName
    let callbackName = 'my_jsonp_cb' + Math.random().toString().replace('.', '')
    dataString += `callback=${callbackName}`

    // 创建script标签
    let script = document.createElement('script')
    script.src = `${url}${dataString}`

    window[callbackName] = function (data) {
      callback(data)
      document.body.removeChild(script)
    }
    document.body.appendChild(script)
  }
  window.$jsonp = jsonp
})(window, document)
