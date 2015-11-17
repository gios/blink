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
      template: '<div id="radar-chart"></div>',
      link: linkFunc,
      controller: RadarChart,
      controllerAs: 'vm'
    };

    return directive;

    function linkFunc(scope, el, attr) {
      console.log(scope.values, el, attr);
    }

    /** @ngInject */
    function RadarChart() {
    }
  }

})();
