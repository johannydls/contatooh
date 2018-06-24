angular.module('contatooh')

.controller('ContatosController', function($scope, ContatoService) {

    $scope.contatos = [];

    $scope.filtro = '';

    $scope.mensagem = { texto: '' };

    //Cria o resource com o nome da rota configurada em /routes/contato.js
    //let Contato = $resource('/contatos/:id');

    let buscaContatos = () => {

        ContatoService.query((contatos) => {
                $scope.contatos = contatos;
                $scope.mensagem = {};
            },

            //Callback de erro
            (erro) => {
                console.log("Não foi possível obter a lista de contatos");
                console.log(erro);

                $scope.mensagem = {
                    texto: 'Não foi possível obter a lista de contatos!'
                };
            });
    };

    buscaContatos();

    $scope.remove = (contato) => {
        console.log("Removendo contato: " + contato._id);

        ContatoService.delete(
            //Parametro da requisição
            { id: contato._id },

            //Callback de sucesso
            buscaContatos,

            //Calback de falha
            (erro) => {
                console.log("Não foi possível remover o contato");

                $scope.mensagem = {
                    texto: 'Não foi possível remover o contato!'
                };

                console.log(erro);
            }
        );
    };
});