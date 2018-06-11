angular.module('contatooh')

.controller('ContatosController', function($scope, $resource) {

    $scope.contatos = [];
    //Variavel acessivel na view
    //$scope.total = 0;

    $scope.filtro = '';

    /*Função acessível na view
    $scope.incrementa = () => {
        $scope.total++;
    };*/

    let Contato = $resource('/contatos');

    let buscaContatos = () => {
        Contato.query((contatos) => {
                $scope.contatos = contatos;
            },
            (erro) => {
                console.log("Não foi possível obter a lista de contatos");
                console.log(erro);
            });
    };

    buscaContatos();

    /*
    //Utilizando $http
    $http({
        method: 'GET',
        url: '/contatos'
    }).then((response) => {
        $scope.contatos = response.data;
        console.log(response.data);
    }, (error) => {
        console.log("Não foi possível obter a lista de contatos");
        console.log(error)
    })*/
});