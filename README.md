# temp

Create tracked temporary files on the meteor server.
The temp package exposes the `Temp` object on the server.
This package is a wrapper for Bruce Williams' node-temp package.
See https://github.com/bruce/node-temp for full documentation.

## Temporary Files

To create a temporary file use open or openSync, passing them an optional prefix, suffix, or both (see below for details on affixes). The object passed to the callback (or returned) has path and fd keys:
`
{ path: "/path/to/file",
  fd: theFileDescriptor
}
`

In this example we write to a temporary file and call out to grep and wc -l to determine the number of time foo occurs in the text. The temporary file is chmod'd 0600 and cleaned up automatically when the process at exit (because temp.track() is called):

```js
fs   = require('fs'),
util  = require('util'),
exec = require('child_process').exec;

// Automatically track and cleanup files at exit
Temp.track();

// Fake data
var myData = "foo\nbar\nfoo\nbaz";

// Process the data (note: error handling omitted)
Temp.open('myprefix', function(err, info) {
  if (!err) {
    fs.write(info.fd, myData);
    fs.close(info.fd, function(err) {
      exec("grep foo '" + info.path + "' | wc -l", function(err, stdout) {
        util.puts(stdout.trim());
      });
    });
  }
});
```
## Want Cleanup? Make sure you ask for it.

As noted in the example above, if you want temp to track the files and directories it creates and handle removing those files and directories on exit, you must call track(). 

```js
// Delete files on process exit
Temp.track();

// Force sync cleanup
Temp.cleanupSync();
{ files: 1,
  dirs:  0 }
  
// Force async cleanup
Temp.cleanup(function(err, stats) {
    console.log(stats);
  });
{ files: 1,
  dirs:  0 }
```

## Implimentation
This package is purely wrapper for Bruce Williams' node-temp package
see https://github.com/bruce/node-temp for full documentation

## Installation

    meteor add maxkferg:temp

## License

MIT