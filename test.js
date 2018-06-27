const a = require('assert')
const TestRunner = require('test-runner')
const nodeVersionMatches = require('./')

const runner = new TestRunner()

runner.test('Simple', function () {
  a.strictEqual(nodeVersionMatches('>6 <8', 'v7.0.0'), true)
})
