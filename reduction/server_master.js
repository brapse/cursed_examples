/*  This should be easier
 *  Defining servers should as simple as extending a class
 *  then, each cursed app should come with a runner that loads
 *  the servers module and executes one or more running process 
 *  based on that server.
 */
var child_process = require('child_process');
var sys = require('sys');

// TODO: child process killing / restarting
var create_server = function(port){
    var child = child_process.spawn('node', ['server.js', port]);

    child.stdout.addListener('data', function (data) {
        process.stdout.write(data);
    });

    child.stderr.addListener('data', function (data) {
        sys.debug(data);
    });
}

create_server(8100);
create_server(8101);
create_server(8102);
create_server(8103);
