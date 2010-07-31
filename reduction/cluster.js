// Start a new cluster on this machine

var sys = require('sys'),
   path = require('path');

require.paths.unshift(path.join(__dirname, '..', '..', 'cursed', 'lib'));
var cursed = require('cursed');

var       host = process.argv[2] || '127.0.0.1',
          port = process.argv[3] || 8001,
   task_module = process.argv[4] || 'tasks';

var task_module_location = __dirname + '/' + task_module;

var concurrency = 4;
var cluster = new(cursed.Cluster)(concurrency, task_module_location, host, port);

//// TODO: app configuration
var router = new(cursed.Connection)('127.0.0.1', 8000);

cluster.register(router, function(err, result){
    if (err) {
        sys.puts("ERROR Starting Cluster: \n" + err);
        process.exit(0);
    }

    sys.puts('Cluster started');
});
