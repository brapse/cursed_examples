// Child process that actually runs the webserver
var path = require ('path'),
      fs = require('fs');

require.paths.unshift(path.join(__dirname, '..', '..', 'cursed', 'lib'));

var cursed = require('cursed');

var         ip = process.argv[2],
          port = process.argv[3],
   task_module = process.argv[4];

new(cursed.Worker)(ip, port, task_module).start();
