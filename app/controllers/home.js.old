//Exportando uma função. Lembrar de no require usar () no final
module.exports = () => {
    let controller = {};

    //O nome do controller é index
    controller.index = (req, res) => {
        res.render('index', { nome: 'Express' });
        console.log(req.method, req.path)
    }

    return controller;
}