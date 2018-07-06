var http = require('http');

//Lembrar de colocar no final o (), pois é uma função que está sendo exportada
var app = require('./config/express')();

require('./config/database.js')('mongodb://localhost:27017/contatooh');

http.createServer(app).listen(app.get('port'), () => {
    console.log('Express Server rodando em localhost:' + app.get('port'));
});