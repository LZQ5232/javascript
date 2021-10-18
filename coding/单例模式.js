/** 
 * 在合适的时候才创建对像，并且只创建唯一的一个
 * 创建对象和管理单例的职责被分布在两个不同的方法中，这两个方法组合起来才具有单例模式的威力。
*/

var Singleton = function(name) {
  this.name = name
}

Singleton.prototype.getName = function() {
  console.log(`this.name`, this.name)
};

Singleton.getInstance = (function() {
  var instance;
  return function(name) {
    if (!instance) {
      instance = new Singleton(name)
    }
    return instance;
  }
})();

var a = Singleton.getInstance('ConardLi');
var b = Singleton.getInstance('ConardLi2');

a.getName();
b.getName();
console.log(a===b);   //true