var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

module.exports = () => {

    const app = express();

    //Definindo a porta do servidor
    app.set('port', 3000);

    //Middleware
    app.use(express.static('./public'));

    //Engine View EJS
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    //Substitui a variavel home = require('../app/routes/home')
    //cwd define o diretório padrão 
    load('models', { cwd: 'app' })
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}