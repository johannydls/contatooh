var app = angular.module('contatooh', ['ngRoute']);

app.config(($routeProvider) => {

    $routeProvider
        .when('/contatos', {
            title: 'Contatooh! - Contatos',
            templateUrl: 'partials/contatos.html',
            controller: 'ContatosController',
        })
        .when('/contato/:contatoId', {
            title: 'Contatooh! - Contato',
            templateUrl: 'partials/contato.html',
            controller: 'ContatoController'
        })
        .otherwise({
            redirectTo: '/contatos'
        });
})