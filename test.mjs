import TestRunner from 'test-runner'
import assert from 'assert'
import process from 'process'
import nodeVersionMatches from 'node-version-matches'
const a = assert.strict

const tom = new TestRunner.Tom()

tom.test('With specific node version', function () {
  a.equal(nodeVersionMatches('>6 <8', 'v7.0.0'), true)
  a.equal(nodeVersionMatches('>=7.6.0', 'v7.6.0'), true)
  a.equal(nodeVersionMatches('>=7.6.0', 'v7.6.1'), true)
  a.equal(nodeVersionMatches('>=7.6.0', 'v7.5.0'), false)
})

tom.test('Without specific node version', function () {
  const currentNodeVersion = process.version
  a.equal(nodeVersionMatches(currentNodeVersion), true)
})

export default tom

