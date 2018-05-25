var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var http = require('http');

var routes = require('./routes/index');
var users  = require('./routes/users');
var qcm  = require('./routes/qcm');
var classe  = require('./routes/classe');
var professeur  = require('./routes/professeur');
var session  = require('./routes/session');
var etudiant  = require('./routes/etudiant');
var question  = require('./routes/question');
var reponse  = require('./routes/reponse');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');
//app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
//app.use('/users', users);
app.use('/qcm', qcm);
app.use('/question', question);
app.use('/classe', classe);
app.use('/professeur', professeur);
app.use('/etudiant', etudiant);
app.use('/reponse', reponse);
app.use('/session', session);

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: (app.get('env') === 'development') ? err : {}
    });
});*/

/*
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));*/

module.exports = app;


const port = parseInt(process.env.PORT, 10) || 5353;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);