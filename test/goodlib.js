const lock = require('../lib/index')

module.exports.GLOBAL_NUM = 1
module.exports.GLOBAL_STRING = 'good string'
module.exports.GLOBAL_BOOLEAN = false
module.exports.GLOBAL_SYMBOL = Symbol()

module.exports.GLOBAL_OBJ = {
  goodNumber: 10,
  goodString: 'good',
  goodBoolean: false,
  goodFunc () {
    return 'good'
  }
}
module.exports.GLOBAL_FUNC = () => 'good'

const Person = function (name) {
  this.name = name
}

Person.prototype.sayName = function () {
  return this.name
}

module.exports.Person = Person

lock(module.exports)
