(function() {
  'use strict';

  angular
    .module('blink')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController() {
    var vm = this;

    vm.agrs = 1 + 2;
  }
})();
