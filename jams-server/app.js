var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var http = require('http');

var routes = require('./routes/index');
var qcm  = require('./routes/qcm');
var classe  = require('./routes/classe');
var professeur  = require('./routes/professeur');
var session  = require('./routes/session');
var etudiant  = require('./routes/etudiant');
var question  = require('./routes/question');
var reponse  = require('./routes/reponse');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
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

module.exports = app;


const port = parseInt(process.env.PORT, 10) || 5353;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);