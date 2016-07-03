
angular.module('app.services', [])

.factory('responseFactory', ['$http', function($http){

  $http.get('http://localhost:3000/api/v1/tone')
  .then(function successCallback(response) {
    console.log('BUCK');
    console.log('SUCCESS',response);
  }, function errorCallback(response) {
    console.log('FUCK');
    console.log('ERRRRR',response);
  });

  var botSayings = [
    {
      saying: "tell me more",
      emoji: "&#x1F914;"
    },
    {
      saying: "",
      emoji: "&#128533;"
    },
    {
      saying: "",
      emoji: "&#128527;"
    },
    {
      saying: "&#128586;",
      emoji: "&#128526;"
    },
    {
      saying: "Really?",
      emoji: "&#128579;"
    },
    {
      saying: "Cool",
      emoji: "&#128524;"
    },

  ]


  var getSaying = function() {
    return botSayings[Math.floor(Math.random()*botSayings.length)];
  }

  return (getSaying);

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
