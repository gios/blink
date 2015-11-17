(function() {
  'use strict';

  angular
    .module('blink')
    .service('footballerArhive', footballerArhive);

  /** @ngInject */
  function footballerArhive() {
    var players = [
      {
        number: 1,
        name: 'Ultimate Goalkeeper',
        stats: 81,
        position: 'GK',
        nationality: 'Bosnia and Herzegovina',
        selected: false
      },
      {
        number: 5,
        name: 'Awesome Defender',
        stats: 84,
        position: 'CB',
        nationality: 'France',
        selected: false
      },
      {
        number: 26,
        name: 'Attack Destroyer',
        stats: 87,
        position: 'CB',
        nationality: 'England',
        selected: false
      },
      {
        number: 8,
        name: 'Magical Attacker',
        stats: 86,
        position: 'AMD',
        nationality: 'Brazil',
        selected: false
      },
      {
        number: 10,
        name: 'Flying Danger',
        stats: 92,
        position: 'LMD',
        nationality: 'Belgium',
        selected: false
      },
      {
        number: 19,
        name: 'Titan Forward',
        stats: 84,
        position: 'CF',
        nationality: 'Spain',
        selected: false
      }
    ];

    this.getFootballers = getFootballers;

    function getFootballers() {
      return players;
    }
  }

})();
