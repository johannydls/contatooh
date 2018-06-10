angular.module('contatooh')

.controller('ContatoController', function($scope, $routeParams) {
    $scope.idContato = $routeParams.contatoId;
    console.log($routeParams.contatoId)
});