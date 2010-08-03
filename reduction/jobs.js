var sys = require('sys'),
   http = require('http'),
    fs  = require('fs'),
    path = require('path');

require.paths.unshift(path.join(__dirname, '..', '..', 'cursed', 'lib'));
var cursed = require('cursed');

this.reduce_the_dictionary = function (router) {
    fs.readFile('tinydict', 'utf8', function (err, data) {
        if (err) throw err;
        var data = data.split('\n').map(function (l) { return l.trim() });
        
        var partitions = cursed.partition(data, 100);

        partitions.forEach(function (words) {
            router.run('reduce', words, function (err, results) {
                if(err){
                    sys.puts('failed: ' + err);
                } else {
                    sys.puts('success!');
                    sys.puts(sys.inspect(results));
                }
            });
        });
    });
}
