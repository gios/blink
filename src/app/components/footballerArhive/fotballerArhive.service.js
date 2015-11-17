(function() {
  'use strict';

  angular
    .module('blink')
    .service('fotballerArhive', fotballerArhive);

  /** @ngInject */
  function fotballerArhive() {
    var players = [
      {
        number: 1,
        name: 'Ultimate Goalkeeper',
        stats: 81,
        position: 'GK',
        nationality: 'Bosnia and Herzegovina'
      },
      {
        number: 5,
        name: 'Awesome Defender',
        stats: 84,
        position: 'CB',
        nationality: 'France'
      },
      {
        number: 26,
        name: 'Attack Destroyer',
        stats: 87,
        position: 'CB',
        nationality: 'England'
      },
      {
        number: 8,
        name: 'Magical Attacker',
        stats: 86,
        position: 'AMD',
        nationality: 'Brazil'
      },
      {
        number: 10,
        name: 'Flying Danger',
        stats: 92,
        position: 'LMD',
        nationality: 'Belgium'
      },
      {
        number: 19,
        name: 'Titan Forward',
        stats: 84,
        position: 'CF',
        nationality: 'Spain'
      }
    ];

    this.getFotballers = getFotballers;

    function getFotballers() {
      return players;
    }
  }

})();
