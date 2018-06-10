var http = require('http');

//Lembrar de colocar no final o (), pois é uma função que está sendo exportada
var app = require('./config/express')();

http.createServer(app).listen(app.get('port'), () => {
    console.log('Express Server rodando em localhost:' + app.get('port'));
});