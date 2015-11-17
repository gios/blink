(function() {
  'use strict';

  angular
    .module('blink')
    .directive('radarChart', radarChart);

  /** @ngInject */
  function radarChart() {
    var directive = {
      restrict: 'E',
      scope: {
        values: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: RadarChart,
      controllerAs: 'vm'
    };

    return directive;

    function linkFunc(scope, el, attr, vm, $log) {
      $log.log(vm);
    }

    /** @ngInject */
    function RadarChart($log) {
      var vm = this;
      $log.log(vm);
    }
  }

})();
