module.exports = (app) => {

    let controller = app.controllers.contato;

    //Esse nome de rota será usado quando for consumir a API Rest
    app.route('/contatos')
        .get(controller.listaContatos)
        .post(controller.salvaContato);


    //id capturado pelo frontend
    app.route('/contatos/:id')
        .get(controller.obtemContato)
        .delete(controller.removeContato)


}