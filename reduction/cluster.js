// Start a new cluster on this machine

var           sys = require('sys'),
             path = require('path'),
    child_process = require('child_process');

require.paths.unshift(path.join(__dirname, '..', '..', 'cursed', 'lib'));
var cursed = require('cursed');

if(arguments.length != 5) {
    sys.puts('missing arguments, required host port and jobs module');
    exit(1);
}

var         ip = process.argv[2],
          port = process.argv[3],
   task_module = process.argv[4];

var concurrency = 4;
new(cursed.Cluster)(concurrency, task_module, '127.0.0.1', port);
