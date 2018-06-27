const a = require('assert')
const TestRunner = require('test-runner')
const nodeVersionMatches = require('./')

const runner = new TestRunner()

runner.test('With specific node version', function () {
  a.strictEqual(nodeVersionMatches('>6 <8', 'v7.0.0'), true)
  a.strictEqual(nodeVersionMatches('>=7.6.0', 'v7.6.0'), true)
  a.strictEqual(nodeVersionMatches('>=7.6.0', 'v7.6.1'), true)
  a.strictEqual(nodeVersionMatches('>=7.6.0', 'v7.5.0'), false)
})

runner.test('Without specific node version', function () {
  const currentNodeVersion = require('process').version
  a.strictEqual(nodeVersionMatches(currentNodeVersion), true)
})
