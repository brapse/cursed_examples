// Child process that actually runs the webserver
var path = require ('path'),
     sys = require('sys');
      fs = require('fs');

require.paths.unshift(path.join(__dirname, '..', '..', 'cursed', 'lib'));

var cursed = require('cursed');

var       host = process.argv[2],
          port = process.argv[3],
   task_module = process.argv[4];

sys.puts('Starting worker: ' + host + ':' + port); 
new(cursed.Worker)(host, port, task_module).start();
