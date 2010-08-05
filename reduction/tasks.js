var sys = require('sys'),
   path = require ('path'),
   http = require('http'),
     fs = require('fs');

require.paths.unshift(path.join(__dirname, '..', '..', 'cursed', 'lib'));

var cursed = require('cursed');

var binary_search = function(needle, haystack){
    var start = 0,
        end   = haystack.length - 1,
        middle;

    while(start < end){
        middle = Math.floor((end - start) / 2) + start;

        if(haystack[middle] == needle)
            return middle;

        if(needle < haystack[middle])
            end = middle -1;
        else
            start = middle +1;
    }

    return -1;
    
}

var words; //global

var is_a_word = function(word){
    var found = binary_search(word, words);
    return found != -1;
}

var reduce = function(word){
    var reductions = [word];
    var front;
    var back;
       
    for(var i=1; i < word.length ; i++){
        front= word.substring(word.length, i);
        if(is_a_word(front)){
            reductions.push(front);
        }
        back = word.substring(0, i);
        if(is_a_word(back)){
            reductions.push(back);
        }
    }

    return reductions //.map(String.prototype.trim);
};


// ########################################################

text  = fs.readFileSync('/usr/share/dict/words', 'utf8');
words = text.split('\n').map(function(f){ return f.trim() });

// ########################################################

this.reduceWords = function (some_words, headers, reply) {
    if(Array.isArray(some_words)){
        some_words = some_words.map(function(r) { return r.trim() });
        var res = some_words.map(reduce);

        reply.emit(res);
    }else{
        reply.error(new(Error)("reduce requires and array of words as arguments"));
    }
};

this.reduceWords.setup = function () {
    var that = this;
}
