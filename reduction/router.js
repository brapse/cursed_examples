// A central process that manages the queue and dispatches
// run on the cluster

var sys = require('sys'),
   path = require ('path'),
   http = require('http'),
     fs = require('fs');

require.paths.unshift(path.join(__dirname, '..', '..', 'cursed', 'lib'));
var cursed = require('cursed');

new(cursed.Router)('127.0.0.1', 8000).start();
