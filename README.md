[![view on npm](https://badgen.net/npm/v/node-version-matches)](https://www.npmjs.org/package/node-version-matches)
[![npm module downloads](https://badgen.net/npm/dt/node-version-matches)](https://www.npmjs.org/package/node-version-matches)
[![Build Status](https://travis-ci.org/75lb/node-version-matches.svg?branch=master)](https://travis-ci.org/75lb/node-version-matches)
[![Coverage Status](https://coveralls.io/repos/github/75lb/node-version-matches/badge.svg)](https://coveralls.io/github/75lb/node-version-matches)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# node-version-matches

Returns true if the current node version matches the given semver expression.

```js
import nodeVersionMatches from 'node-version-matches'

// assuming we're using node version 10
console.log(nodeVersionMatches('>=7.6.0'))
// true

console.log(nodeVersionMatches('<7.6.0'))
// false

// optional: pass in a specific node version as the second arg.
console.log(nodeVersionMatches('<7.6.0', 'v4.0.0'))
// true
```

```
$ npm install node-version-matches
```

* * *

&copy; 2018-21 Lloyd Brookes \<75pound@gmail.com\>.
