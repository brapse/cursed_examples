var sys = require('sys'),
   http = require('http'),
    fs  = require('fs'),
    path = require('path');

require.paths.unshift(path.join(__dirname, '..', '..', 'cursed', 'lib'));
var cursed = require('cursed');

var u = cursed.utils;

this.reduce_the_dictionary = function (router) {
    //fs.readFile('tinydict', 'utf8', function (err, data) {
    fs.readFile('/usr/share/dict/words', 'utf8', function (err, data) {
        if (err) throw err;
        var data = data.split('\n').map(function (l) { return l.trim() });
        
        var partitions = cursed.partition(data, 10000);

        partitions.forEach(function (words) {
            router.run('reduceWords', words, function (err, results) {
                if(err){
                    console.log('failed: ' + err);
                } else {
                    console.log('success!');
                    //console.dir(results);
                }
            });
        });
    });
}
