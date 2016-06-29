angular.module('app.controllers', [])

.controller('chatCtrl', function($ionicScrollDelegate,$sanitize,responseFactory) {
  console.log('BAnananaerrrrs!');
  var chatLog = [];
  var vm=this;

	vm.messages=[];

  vm.sendMessage=function(){
    addMessageToList(vm.message);
    vm.message = "";
  };

  function addMessageToList(message){
    var time = new Date();

    vm.messages.push({content:$sanitize(message)});
    chatLog.push({timestamp: time,sender:'user',content:$sanitize(message)});
    $ionicScrollDelegate.scrollBottom();
    botMessageToList();
  }

  function botMessageToList() {
    var time = new Date();
    var botMessage = responseFactory();

    vm.messages.push({content:$sanitize(botMessage)});
    chatLog.push({timestamp: time,sender:'bot',content:$sanitize(botMessage)});
    console.log('CHATTTYBOT',chatLog);
  }


})

.controller('diaryCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})
