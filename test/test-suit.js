const { expect } = require('chai')

function testSuite (goodLib, ctx) {
  context(ctx, function () {
    it('should prevent external code changing the number exported from good library', function () {
      goodLib.GLOBAL_NUM = 2
      expect(goodLib.GLOBAL_NUM).to.be.equal(1)
    })
    it('should prevent external code changing the function exported from good library', function () {
      goodLib.GLOBAL_FUNC = () => 'bad'
      expect(goodLib.GLOBAL_FUNC()).to.equal('good')
    }),
    it('should prevent external code changing the object exported from good library', function () {
      goodLib.GLOBAL_OBJ = {
        goodFunc: () => 'bad'
      }
      expect(goodLib.GLOBAL_OBJ.goodFunc()).to.equal('good')
    })
    it('should prevent external code changing properties of object exported from good libary', function () {
      const globalObj = goodLib.GLOBAL_OBJ
  
      globalObj.goodNumber = 1234
      expect(globalObj.goodNumber).to.equal(10)
  
      globalObj.goodString = 'bad'
      expect(globalObj.goodString).to.equal('good')
  
      globalObj.goodBoolean = true
      expect(globalObj.goodBoolean).to.be.false
  
      global.goodFunc = () => 'bad'
      expect(globalObj.goodFunc()).to.equal('good')
    })
    it('should prevent external code changing the string exported from good library', function () {
      goodLib.GLOBAL_STRING = 'bad string'
      expect(goodLib.GLOBAL_STRING).to.equal('good string')
    })
    it('should prevent external code changing the boolean exported from good library', function () {
      goodLib.GLOBAL_BOOLEAN = true
      expect(goodLib.GLOBAL_BOOLEAN).to.be.false
    })
    it('should prevent external code changing the symbol exported from good library', function () {
      const maliciousSymbol = Symbol()
      goodLib.GLOBAL_SYMBOL = maliciousSymbol
      expect(goodLib.GLOBAL_SYMBOL).to.not.equal(maliciousSymbol)
    })
    it('should prevent external code changing the prototype chain of function from good library', function () {
      goodLib.Person.prototype.sayName = () => 'hijacked'
  
      const person = new goodLib.Person('james')
      expect(person.sayName()).to.equal('james')
    })
  })
}

module.exports = {
  testSuite
}