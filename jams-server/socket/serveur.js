var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/eleve.html');
    });
app.get('/prof', function(req, res){
    res.sendFile(__dirname + '/prof.html');
    });
var numEleves = 0;
var reponses = 0;
io.on('connection', function (socket) {
  var addedUser = false;

  // when the client emits 'add user', this listens and executes
  socket.on('add user', function (username) {
    if (addedUser) return;
    // we store the username in the socket session for this client
    socket.username = username;
    ++numEleves;
    addedUser = true;
    socket.emit('login', {
      numEleves: numEleves
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numEleves: numEleves
    });
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
    if (addedUser) {
      --numEleves;

      // echo globally that this client has left
      socket.broadcast.emit('user left', {
        username: socket.username,
        numEleves: numEleves
      });
    }
  });

    socket.on('start', function (data) {
        reponses=0;
      socket.broadcast.emit('start', data);
    });
    socket.on('next', function (data) {
        reponses=0;
        socket.broadcast.emit('next', data);
    });
    socket.on('finish', function () {
        socket.broadcast.emit('finish');
    });
    socket.on('repondu', function () {
        socket.broadcast.emit('reponses',++reponses);
    });
});


//Port écouté
http.listen(3000);
console.log('STARTED v1');
