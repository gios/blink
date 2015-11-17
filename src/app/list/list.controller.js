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
    vm.selectFootballer = function(e, footballer) {
      angular.forEach(vm.players, function(value) {
        value.selected = false;
      });

      footballer.selected = true;
    };
  }
})();
