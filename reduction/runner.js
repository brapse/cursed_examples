// Binds a job to a cluster via the router

var sys = require('sys'),
   http = require('http'),
    fs  = require('fs'),
    path = require('path');

require.paths.unshift(path.join(__dirname, '..', '..', 'cursed', 'lib'));
var cursed = require('cursed');

var job_name = process.argv[3] || 'reduce_the_dictionary'

if(!job_name){
    sys.puts('Please specify job_name');
    process.exit(0);
}

// Get the function representing the task
var job = require('./jobs')[job_name];

// Get access to the cluster
var router = new(cursed.Router.connection)('127.0.0.1', 8000);

job(router);
