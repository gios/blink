(function() {
  'use strict';

  angular
    .module('blink')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController() {
    var vm = this;

    vm.creationDate = 1447750104991;
    vm.args = 1 + 2;
  }
})();
