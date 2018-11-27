const goodLib = require('./goodlib')
const goodDefaultLib = require('./goodDefaultLib')
const { expect } = require('chai')
const { testSuite } = require('./test-suit')

describe('lock', function () {
  testSuite(goodLib, 'when property are attached to exports')
  testSuite(goodDefaultLib, 'when exporting a whole object')
})