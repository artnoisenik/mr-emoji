
angular.module('app.services', [])

.factory('responseFactory', [function(){

}])

.service('positiveSayingService',[function(){

  var botSayings = [
    {
      saying: "Oh yeah!?",
      emoji: "&#x1F914;"
    },
    {
      saying: "Wow!",
      emoji: "&#128525;"
    },
    {
      saying: "Yay yea yea",
      emoji: "&#128527;"
    },
    {
      saying: "Lol",
      emoji: "&#128516; &#128526;"
    },
    {
      saying: "fun!",
      emoji: "&#128579;"
    },
    {
      saying: "!!!",
      emoji: "&#128518; &#128518;"
    },
    {
      saying: "",
      emoji: "&#128588; &#128588; &#128588; &#128523;"
    }

  ]

  var getSaying = function() {
    return botSayings[Math.floor(Math.random()*botSayings.length)];
  }

  return (getSaying);
}])

.service('negativeSayingService',[function(){

  var botSayings = [
    {
      saying: "oh...",
      emoji: "&#x1F914;"
    },
    {
      saying: "i see",
      emoji: "&#128533;"
    },
    {
      saying: "really?",
      emoji: "&#128576; &#128520;"
    },
    {
      saying: "Whoa",
      emoji: "&#128534; &#128526;"
    },
    {
      saying: "ugh",
      emoji: "&#128579; &#128548;"
    },
    {
      saying: "oy",
      emoji: "&#128524; &#128563;"
    },
    {
      saying:"",
      emoji:"&#128577; &#1F916;"
    }

  ]

  var getSaying = function() {
    return botSayings[Math.floor(Math.random()*botSayings.length)];
  }

  return (getSaying);
}])

.service('neutralSayingService',[function(){

  var botSayings = [
    {
      saying: "tell me more",
      emoji: "&#x1F914;"
    },
    {
      saying: "hm...",
      emoji: "&#128533;"
    },
    {
      saying: "",
      emoji: "&#128528; &#128528;"
    },
    {
      saying: "",
      emoji: "&#128586; &#128526;"
    },
    {
      saying: "Really?",
      emoji: "&#128579;"
    },
    {
      saying: "Cool",
      emoji: "&#128529;"
    },
    {
      saying: "",
      emoji: "&#128564;"
    },
    {
      saying:"",
      emoji: "&#1F910; &#1F910; &#1F910;"
    }

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
