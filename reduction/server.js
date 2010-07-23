var sys = require('sys'),
   path = require ('path'),
   http = require('http'),
     fs = require('fs');

require.paths.unshift(path.join(__dirname, '..', '..', 'cursed', 'lib'));
var cursed = require('cursed');

var concurrency = arguments[2] || 4 // number of running processes

var router = new(cursed.Router.connection)('127.0.0.1', 8000);

// Setup a new server with concurrency (number of running child processes)
var cluster = new(cursed.Cluster)(concurrency, 'tasks');

// Register the servers with the cluster
server.start();
router.register(cluster);
