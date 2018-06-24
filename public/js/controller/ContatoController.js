angular.module('contatooh')

.controller('ContatoController', function($scope, $routeParams, ContatoService) {

    console.log($routeParams.contatoId)

    //Injetando o $resource para ter acesso à rota /contatos/:id do lado do servidor
    //let Contato = $resource('/contatos/:id');

    if ($routeParams.contatoId) {
        ContatoService.get(
            //Parametro
            { id: $routeParams.contatoId },

            //Callback de sucesso
            (contato) => {
                $scope.contato = contato;
            },

            //Callback de falha
            (erro) => {
                $scope.mensagem = {
                    texto: "Contato não existe. Novo contato"
                };
                console.log(erro);
            }
        );

    } else {
        $scope.contato = new ContatoService();
    }

    $scope.salva = () => {

        $scope.contato.$save()
            .then(() => {
                $scope.mensagem = { texto: "Salvo com sucesso" };

                //Limpa o formulário
                $scope.contato = new ContatoService();
            })
            .catch((erro) => {
                $scope.mensagem = { texto: "Não foi possível salvar!" };
            });
    };


});