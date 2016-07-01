angular.module('app.controllers', [])

.controller('chatCtrl', function($ionicScrollDelegate,responseFactory,helloService,byeService,$sce) {
  var vm=this;

	vm.messages=[];

  var firstMessage = 0;

  //user sends message

  vm.sendMessage=function(){
    addMessageToList(vm.message);
    vm.message = "";
  };

  //sends user message to list

  function addMessageToList(message){
    vm.messages.push({content:$sce.trustAsHtml(message),class:'user'});
    $ionicScrollDelegate.scrollBottom(true);
    reviewMessage(message);
  }

  //bot says hello

  var botStarts = [
    "hi",
    "yo",
    "hello",
    "hey",
    "howdy",
    "aloha",
  ];

  var botEnds = [
    "bye",
    "later",
    "see ya",
    "good bye",
    "gotta go",
    "gtg",
    "gottago",
    "quit",
    "end",
  ];

  var countHi = 0;
  var countBye = 0;

  function reviewMessage(text) {

    var greetings = false;

    text=text.toLowerCase();
    text=text.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g, ' ');
    text=text.replace(/\s+-+\s+/g, '.');
    text=text.replace(/\s*[,\.\?!;]+\s*/g, '.');
    text=text.replace(/\s*\bbut\b\s*/g, '.');
    text=text.replace(/\s{2,}/g, ' ');

    var parts=text.split('.').join(' ').split(' ');

    for (var i=0; i<parts.length; i++) {
      var part=parts[i];
      if(part==='') {
        break;
      } else {
        part = parts[i];
      }
      console.log('PPARRT',part);
      var lastPart = parts[parts.length-1];
        for (var q=0; q<botStarts.length; q++) {
          var lastBotStart = botStarts[botStarts.length-1];
          if (botStarts[q]==part) {
            greetings = true;
            var hello = botHello();
            botMessageToList(hello);
            break;
          }
        }

        for (var z=0; z<botEnds.length; z++) {
          if (botEnds[z]==part) {
            greetings = true;
            var bye = botBye();
            botMessageToList(bye);
            break;
          } else if(lastPart!=lastBotStart && greetings === false) {
            firstMessage++;
            botMessageToList();
            break;
          }
        }

    }
  }

  function botHello() {
    console.log('COUNT',countHi);
    if(countHi===0 && firstMessage===0) {
      countHi++;
      var hi = helloService();
      return hi;
    } else  {
      var  cool = {
        saying: "???",
        emoji: "&#128566;"
      }
      return cool;
    }

  }

  function botBye() {
    if(countBye===0 && firstMessage===0){
      countBye++;
      var bye = byeService();
      return bye;
    } else {
      var  cool = {
        saying: "???",
        emoji: "&#128566;"
      }
      return cool;
    }

  }

  //bot posts to message list

  function botMessageToList(greeting) {
    console.log('GREETING',greeting);

    if (greeting) {
      vm.messages.push({content:(greeting.saying), emoji:$sce.trustAsHtml(greeting.emoji),class:'bot'});
      $ionicScrollDelegate.scrollBottom(true)
    } else {
      console.log('COOOL');

      var botMessage = responseFactory();

      vm.messages.push({content:(botMessage.saying), emoji:$sce.trustAsHtml(botMessage.emoji),class:'bot'});
      $ionicScrollDelegate.scrollBottom(true)
    }

  }


})
