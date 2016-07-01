angular.module('app.services', [])

.factory('responseFactory', [function($http){


  var test = function() {
    var cool = {
      saying: "tell me more",
      emoji: "&#x1F914;"
    }
    return cool;
  }

  return (test);

}])

.service('helloService', [function(){

  var botHellos = [
    {
      saying: "Hey.",
      emoji: "&#128515;"
    },
    {
      saying: "",
      emoji: "&#128521;"
    },
    {
      saying: "Yo.",
      emoji: "&#128526;"
    },
    {
      saying: "",
      emoji: "&#128540;"
    },
    {
      saying: "Hello...",
      emoji: "&#128524;"
    },
  ];

  var getHello = function() {
  	return botHellos[Math.floor(Math.random()*botHellos.length)];
  }

  return (getHello);
}])

.service('byeService', [function(){

  var botByes = [
    {
      saying: "Later.",
      emoji: "&#128515;"
    },
    {
      saying: "See ya",
      emoji: "&#128521;"
    },
    {
      saying: "",
      emoji: "&#128526;"
    },
    {
      saying: "byeeeee!!!",
      emoji: "&#128540;"
    },
    {
      saying: "keep it real.",
      emoji: "&#128524;"
    },
  ];

  var getBye = function() {
  	return botByes[Math.floor(Math.random()*botByes.length)];
  }

  return (getBye);
}]);
