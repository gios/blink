(function() {
  'use strict';

  describe('service footballerArhive', function() {
    var footballerArhive;

    beforeEach(module('blink'));
    beforeEach(inject(function(_footballerArhive_) {
      footballerArhive = _footballerArhive_;
    }));

    it('should be registered', function() {
      expect(footballerArhive).not.toEqual(null);
    });

    describe('getContributors function', function() {
      it('should exist', function() {
        expect(footballerArhive.getFootballers).not.toEqual(null);
      });
      it('should be correct length of footballers', function() {
        expect(footballerArhive.getFootballers().length).toEqual(6);
      });
    });
  });
})();
