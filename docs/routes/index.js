var express = require('express');

/*
 * GET home page.
 */
var app = express();

if ('development' == app.get('env')) {
    exports.index = function(req, res){        
        res.render('index', { title: 'Stashy' });
    };
} else {
    exports.index = function(req, res){        
        res.render('index-optimize', { title: 'Stashy' });
    };
}

