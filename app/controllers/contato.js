let ID_CONTATO_INC = 3;

var contatos = [{
        _id: 1,
        nome: 'Contato Exemplo 1',
        email: 'cont1@empresa.com'
    },
    {
        _id: 2,
        nome: 'Contato Exemplo 2',
        email: 'cont2@empresa.com'
    },
    {
        _id: 3,
        nome: 'Contato Exemplo 3',
        email: 'cont3@empresa.com'
    }
];

module.exports = () => {
    let controller = {};

    //nome do controller é listaContatos
    controller.listaContatos = (req, res) => {
        res.json(contatos);
    };

    controller.obtemContato = (req, res) => {
        console.log(req.params.id);
        let idContato = req.params.id;

        let contato = contatos.filter((contato) => {
            return contato._id == idContato;
        })[0];

        contato ? res.json(contato) : res.status(404).send("Contato não encontrado");
    };

    controller.removeContato = (req, res) => {

        let idContato = req.params.id;

        contatos = contatos.filter((contato) => {
            return contato._id != idContato;
        });

        console.log('API: removeContato: ' + idContato);

        res.send(204).end();
    };

    controller.salvaContato = (req, res) => {

        let contato = req.body;

        contato = contato._id ? atualiza(contato) : adiciona(contato);

        res.json(contato);
    };

    let adiciona = (contatoNovo) => {

        contatoNovo._id = ++ID_CONTATO_INC;
        contatos.push(contatoNovo);
        return contatoNovo;

    }

    let atualiza = (contatoAlterar) => {

        contatos = contatos.map((contato) => {
            if (contato._id == contatoAlterar._id) {
                contato = contatoAlterar;
            }

            return contato;
        });

        return contatoAlterar;
    }

    return controller;
};