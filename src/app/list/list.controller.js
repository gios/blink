(function() {
  'use strict';

  angular
    .module('blink')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController($log, footballerArhive) {
    var vm = this;

    vm.creationDate = 1447750104991;
    vm.args = 1 + 2;
    vm.players = footballerArhive.getFootballers();
  }
})();
