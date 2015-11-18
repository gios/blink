(function() {
  'use strict';

  angular
    .module('blink')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController($log, footballerArhive) {
    var vm = this;

    vm.creationDate = 1447750104991;
    vm.players = footballerArhive.getFootballers();

    vm.selectFootballer = function(e, footballer) {
      angular.forEach(vm.players, function(value) {
        value.selected = false;
      });

      footballer.selected = true;
      vm.extendedStats = footballer.extendedStats;
      vm.api.refresh();
    };

    vm.options = {
      chart: {
        type: 'pieChart',
        height: 500,
        x: function(d) { return d.key; },
        y: function(d) { return d.y; },
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };
  }
})();
