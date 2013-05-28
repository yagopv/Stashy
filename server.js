//*********************//
// Module dependencies //
//*********************//
 
var express = require('express')
  , routes = require('./docs/routes')
  , http = require('http')
  , path = require('path');

var app = express();

//*******************************//
// Settings for all environments //
//*******************************//

//Using  HTML templates
app.engine('.html', require('ejs').__express);

// Set port
app.set('port', process.env.PORT || 3000);

// Set views path and engine
app.set('views', __dirname + '/docs/views');
app.set('view engine', 'html');

// Set favicon
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

// Static files configuration (js, css ...)
app.use(express.static(path.join(__dirname, 'docs/public')));

//************************************//
//Settings for development environment//
//************************************//

if ('development' == app.get('env')) {
  app.use(express.errorHandler());  
}

//*********//
// Routing //
//*********//

app.get('/', routes.index);

//***************//
// Create server //
//***************//

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


