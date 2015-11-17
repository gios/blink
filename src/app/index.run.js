(function() {
  'use strict';

  angular
    .module('blink')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
