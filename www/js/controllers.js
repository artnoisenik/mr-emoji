angular.module('app.controllers', [])

.controller('chatCtrl', function($ionicScrollDelegate,responseFactory,$sce) {
  var vm=this;

	vm.messages=[];

  vm.sendMessage=function(){
    addMessageToList(vm.message);
    vm.message = "";
  };

  function addMessageToList(message){
    vm.messages.push({content:$sce.trustAsHtml(message)});
    // botMessageToList();
    reviewMessage(message);
  }

  var elizaQuits = [
    "hi",
    "yo",
    "hello",
    "hey",
    "what's up",
    "howdy",
  ];

  function reviewMessage(text) {
    text=text.toLowerCase();
  	text=text.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g, ' ');
  	text=text.replace(/\s+-+\s+/g, '.');
  	text=text.replace(/\s*[,\.\?!;]+\s*/g, '.');
  	text=text.replace(/\s*\bbut\b\s*/g, '.');
  	text=text.replace(/\s{2,}/g, ' ');

    // console.log(text);

    var parts=text.split('.').join(' ').split(' ');
    console.log(parts);
    for (var i=0; i<parts.length; i++) {
      var part=parts[i];
      // console.log(part);
      if (part!='') {
        // check for quit expression
        for (var q=0; q<elizaQuits.length; q++) {
          if (elizaQuits[q]==part) {
            var hi = getFinal();
            vm.messages.push({content:(hi.saying), emoji:$sce.trustAsHtml(hi.emoji)});
            $ionicScrollDelegate.scrollBottom(true)
          }
        }
      }
    }
  }

  var elizaFinals = [
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

  var getFinal = function() {
  	return elizaFinals[Math.floor(Math.random()*elizaFinals.length)];
  }



  function botMessageToList() {
    var time = new Date();
    var botMessage = responseFactory();
    vm.messages.push({content:(botMessage.saying), emoji:$sce.trustAsHtml(botMessage.emoji)});
    $ionicScrollDelegate.scrollBottom(true)
  }


})


.controller('diaryCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})
