var express = require('express');
var request = require('request');

/*
 * GET home page.
 */
 
var app = express();

exports.index = function(req, res){        

    // Check if the request comes from a bot
    if ("_escaped_fragment_" in req.query) {
        
        // Check if the requiered environment variables are defined
        if (process.env.CrawlerServiceApiId &&
            process.env.CrawlerServiceEndPoint &&
            process.env.CrawlerServiceApplication) {
                 
                var default_headers = {
                  'content-type' : 'application/json'
                };

                var crawlerObject = { 
                      ApiId : process.env.CrawlerServiceApiId,
                      Application : process.env.CrawlerServiceApplication,
                      Url : req.protocol + "://" + req.get('host') + req.url.replace("?_escaped_fragment_=",""),
                      Store : true,
                      UserAgent : req.headers['user-agent']
                };

                // Send request to Crawler
                request({
                  url: process.env.CrawlerServiceEndPoint,
                  headers: default_headers,
                  method: 'POST',
                  body: JSON.stringify(crawlerObject)
                }, function (err, response, body) {
                
                    // If no error write snapshot
                    // If error render normal view
                    if (!err && response.statusCode == 200) {
                        if (body.indexOf("Page not found") != -1) {
                            res.status(404).send('404.Not found');                           
                        }
                        res.write(body);
                    } else {
                        res.render('index', { title: 'Stashy' });
                    }
                });
        } else {
           res.render('index', { title: 'Stashy' });
        }   
    } else {
        res.render('index', { title: 'Stashy' });
    }
};

