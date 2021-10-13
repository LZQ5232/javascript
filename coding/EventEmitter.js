function EventEmitter() {
  this._maxListeners = 10
  this._events = Object.create(null)
}

// prepend添加到事件队列头部
EventEmitter.prototype.addEventListener = function (type, listener, prepend) {
  if (!this._events) {
    this._events = Object.create(null)
  }
  if (this._events[type]) {
    if (prepend) {
      this._events[type].unshift(listener)
    } else {
      this._events[type].push(listener)
    }
  } else {
    this._events[type] = [listener]
  }
}
EventEmitter.prototype.removeEventListener = function (type, listener) {
  if (Array.isArray(this._events[type])) {
    if (!listener) {
      this._events[type] = []
    } else {
      this._events[type] = this._events[type].filter(
        (e) => e.origin !== listener && e !== listener
      )
    }
  }
}
EventEmitter.prototype.once = function (type, listener) {
  const only = (...args) => {
    listener.apply(this, args)
    this.removeEventListener(type, listener)
  }
  // 用于标识 一次绑定
  only.origin = listener
  this.addEventListener(type, only)
}
EventEmitter.prototype.emit = function (type, ...args) {
  if (Array.isArray(this._events[type])) {
    // 找到该分类下的事件执行
    this._events[type].forEach((fn) => {
      fn.apply(this, args)
    })
  }
}
EventEmitter.prototype.setMaxListener = function (count) {
  this._maxListeners = count
}
