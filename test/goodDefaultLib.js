const lock = require('../lib/index')

const Person = function (name) {
  this.name = name
}

Person.prototype.sayName = function () {
  return this.name
}


module.exports = {
  GLOBAL_NUM: 1,
  GLOBAL_STRING: 'good string',
  GLOBAL_BOOLEAN: false,
  GLOBAL_SYMBOL: Symbol(),

  GLOBAL_OBJ: {
    goodNumber: 10,
    goodString: 'good',
    goodBoolean: false,
    goodFunc() {
      return 'good'
    }
  },

  GLOBAL_FUNC: () => 'good',
  Person
}

lock(module.exports)
