import semver from 'semver'
import process from 'process'


function nodeVersionMatches (semverExpression, version) {
  version = version || process.version
  return semver.satisfies(version, semverExpression)
}

export default nodeVersionMatches
