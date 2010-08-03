// A central process that manages the queue and dispatches
// run on the cluster

var sys = require('sys'),
   path = require ('path'),
   http = require('http'),
     fs = require('fs');

require.paths.unshift(path.join(__dirname, '..', '..', 'cursed', 'lib'));
var cursed = require('cursed');

var       host = process.argv[2] || '127.0.0.1',
          port = process.argv[3] || 8000;

sys.puts('Starting a router:' + host + ':' + port);
new(cursed.Router)(host, port).start();
