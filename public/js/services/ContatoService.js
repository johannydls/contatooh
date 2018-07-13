angular.module('contatooh')

.factory('ContatoService', function($resource) {

    //Todo servico criado com factory deve retornar um objeto
    return $resource('/contatos/:id');

});