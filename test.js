const Tom = require('test-runner').Tom
const a = require('assert').strict
const nodeVersionMatches = require('./')

const tom = module.exports = new Tom()

tom.test('With specific node version', function () {
  a.equal(nodeVersionMatches('>6 <8', 'v7.0.0'), true)
  a.equal(nodeVersionMatches('>=7.6.0', 'v7.6.0'), true)
  a.equal(nodeVersionMatches('>=7.6.0', 'v7.6.1'), true)
  a.equal(nodeVersionMatches('>=7.6.0', 'v7.5.0'), false)
})

tom.test('Without specific node version', function () {
  const currentNodeVersion = require('process').version
  a.equal(nodeVersionMatches(currentNodeVersion), true)
})
