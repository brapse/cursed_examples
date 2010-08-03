var spawn = require('child_process').spawn,
      sys = require('sys');

var spawn_command = function (command, args) {
    args = args || [];
    var child = spawn('node', [command]);

    child.stdout.addListener('data', function (data) {
        sys.puts(data);
    });

    child.stderr.addListener('data', function (data) {
        sys.puts('ERROR: ' + data);
    });
}

spawn_command('router.js');
setTimeout(function(){
    spawn_command('node.js');
}, 2000);
