# dev-null

`/dev/null` for node streams, packaged for Meteor

Use it whenever you need to interrupt stream flow for instance if you want to log the state of a stream instead of its
output.

```js
// without devnull
var numbers = require('../test/fixtures/number-readable')

numbers({ to: 2 })
  .on('data', function (d) { console.log(d.toString()) });
// => 
// 0
// 1
// 2
```

```js
// piping into devnull
var numbers = require('../test/fixtures/number-readable');

numbers({ to: 2 })
  .pipe(DevNull())
  .on('data', function (d) { console.log(d.toString()) });

// => (no output)
```

## Implimentation
This package is purely wrapper for thlorenz's node.js dev-null package
https://github.com/thlorenz/dev-null

## Installation

    meteor add maxkferg:dev-null

## License

MIT