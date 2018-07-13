//Função do controller. Precisa terminar com ()
//var controller = require('../controllers/home')();

module.exports = (app) => {
    let controller = app.controllers.home;
    app.get('/index', controller.index);
    app.get('/', controller.index);
}