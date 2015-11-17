(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('blink'));
    beforeEach(inject(function(_$controller_) {

      vm = _$controller_('ListController');
    }));

    it('should have a correct calculation', function() {
      expect(vm.args).toEqual(3);
    });
  });
})();
