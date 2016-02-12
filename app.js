
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var homepage = require('./routes/homepage');
var create_profile = require('./routes/create_profile')
var browse_clubs = require('./routes/browse_clubs');
var find_clubs = require('./routes/find_clubs');
var register = require('./routes/register');
var events_calendar = require('./routes/events_calendar');
var login = require('./routes/login');
var search_results = require('./routes/search_results');
var successful_club_add = require('./routes/successful_club_add')

var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', homepage.view);

app.get('/create_profile', create_profile.view)
app.get('/browse_clubs', browse_clubs.view)
app.get('/find_clubs', find_clubs.view)
app.get('/register', register.view)
app.get('/events_calendar', events_calendar.view);
app.get('/login',login.view);
app.get('/search_results', search_results.view);
app.get('/successful_club_add', successful_club_add.addClub);


// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
