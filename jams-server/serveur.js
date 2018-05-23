//Définition des variables et appels aux librairies
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//La ligne 6 permet d'envoyer la page client.html quand quelqu'un essaye d'accéder à la racine du serveur
app.get('/*', function(req, res){
    res.sendFile(__dirname + '/client.html');
    });
	
//		Lorsque le serveur recoit "connection", c'est à dire qu'un client s'est connecté, 
//      il créé un socket. Le serveur execute ensuite une fonction anonyme qui va définir 
//      un listener sur le socket précédement créé. Si celui-ci recoit "chat messsage",
//      c'est à dire qu'un client a envoyé un message alors une autre fonctione
//      anonyme est executé. Elle va ecrire sur la console : "received" suivi du 
//      message envoyé.
io.on('connection', function(socket){
    socket.on('chat message', function(msg,id){
        io.emit('chat message', socket.id+" : "+msg,id);
        console.log("received " + msg);
    });
});
//Port écouté
http.listen(3000);
console.log('STARTED v1');
