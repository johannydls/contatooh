
module.exports = (app) => {
    let controller = {};
    let Contato = app.models.contato;

    //nome do controller é listaContatos
    controller.listaContatos = (req, res) => {
        let promise = Contato.find().exec()

        //Callback de sucesso
        .then(function(contatos) {
            res.json(contatos);
        },

        //Callback de erro
        function(erro) {
            console.erro(erro);
            res.status(500).json(erro);
        });
    };

    controller.obtemContato = (req, res) => {
      var _id = req.params.id;
      Contato.findById(_id).exec()
        .then(
            function(contato) {
                if (!contato) throw new Error("Contato não encontrado");
                res.json(contato);
            },

            function(erro) {
                console.log(erro);
                res.status(404).json(erro);
            }
        );
    };

    controller.removeContato = (req, res) => {
        var _id = req.params.id;
        Contato.remove({"_id": _id}).exec()

        .then(
            function() {
                res.end();
            },

            function(erro) {
                return console.error(erro);
            }
        );
    };

    controller.salvaContato = (req, res) => {
        var _id = req.body._id;
        if (_id) {
            Contato.findByIdAndUpdate(_id, req.body).exec()

            .then(
                function(contato) {
                    res.json(contato);
                },

                function(erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
        } else {
            Contato.create(req.body)

            .then(
                function(contato) {
                    res.status(201).json(contato);
                },

                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro);
                }
            );
        }   
    };



    return controller;
};