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
        selected: false,
        extendedStats: getextendedStats()
      },
      {
        number: 5,
        name: 'Awesome Defender',
        stats: 84,
        position: 'CB',
        nationality: 'France',
        selected: false,
        extendedStats: getextendedStats()
      },
      {
        number: 26,
        name: 'Attack Destroyer',
        stats: 87,
        position: 'CB',
        nationality: 'England',
        selected: false,
        extendedStats: getextendedStats()
      },
      {
        number: 8,
        name: 'Magical Attacker',
        stats: 86,
        position: 'AMD',
        nationality: 'Brazil',
        selected: false,
        extendedStats: getextendedStats()
      },
      {
        number: 10,
        name: 'Flying Danger',
        stats: 92,
        position: 'LMD',
        nationality: 'Belgium',
        selected: false,
        extendedStats: getextendedStats()
      },
      {
        number: 19,
        name: 'Titan Forward',
        stats: 84,
        position: 'CF',
        nationality: 'Spain',
        selected: false,
        extendedStats: getextendedStats()
      }
    ];

    this.getFootballers = getFootballers;

    function getFootballers() {
      return players;
    }

    function getRandomStats() {
      return Math.random() * 10;
    }

    function getextendedStats() {
      return [
        { key: "Physical", y: getRandomStats() },
        { key: "Shooting", y: getRandomStats() },
        { key: "Passing", y: getRandomStats() },
        { key: "Curve", y: getRandomStats() },
        { key: "Free Kick", y: getRandomStats() },
        { key: "Penalty", y: getRandomStats() },
        { key: "Sprint", y: getRandomStats() }
      ];
    }
  }

})();
