var express = require('express');

/*
 * GET home page.
 */
var app = express();

exports.index = function(req, res){        
    res.render('index', { title: 'Stashy' });
};

