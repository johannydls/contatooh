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

    return controller;
}