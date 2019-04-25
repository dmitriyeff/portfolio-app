'use strict';

angular
  .module('portfolioProject')
  .controller('ProjectCtrl', function () {
    this.items = [
      {
        id: "memory-game",
        name: "Memory Game",
        description: "Built an interactive browser-based card matching game with combined skills in HTML, CSS, and JavaScript"
      },
      {
        id: "arcade-game",
        name: "Classic Arcade Game Clone",
        description: "Leveraged object-oriented JavaScript to build a classic arcade game"
      },
      {
        id: "feed-reader",
        name: "Feed Reader Testing",
        description: "Used Jasmine to develop tests against a pre-existing web application"
      },
      {
        id: "restaurant-app",
        name: "Restaurant Reviews App",
        description: "Converted a static webpage to be responsive on different sized displays, and accessible for screen reader use"
      }
    ];
  });
