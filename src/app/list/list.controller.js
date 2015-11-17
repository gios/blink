(function() {
  'use strict';

  angular
    .module('blink')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController() {
    var vm = this;

    vm.args = 1 + 2;
  }
})();
