(function() {
  'use strict';

  angular
    .module('blink')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController($log, fotballerArhive) {
    var vm = this;

    vm.creationDate = 1447750104991;
    vm.args = 1 + 2;
    vm.players = fotballerArhive.getFotballers();
  }
})();
