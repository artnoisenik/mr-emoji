angular.module('app.controllers', [])

.controller('chatCtrl', function($ionicScrollDelegate,$sanitize,responseFactory) {
  var vm=this;

	vm.messages=[];

  vm.sendMessage=function(){
    addMessageToList(vm.message);
    vm.message = "";
  };

  function addMessageToList(message){
    vm.messages.push({content:$sanitize(message)});
    $ionicScrollDelegate.scrollBottom();
    botMessageToList();
  }

  function botMessageToList() {
    let botMessage = responseFactory();
    console.log('Hey this is a bot message!',botMessage);
    vm.messages.push({content:$sanitize(botMessage)});
  }

})

.controller('diaryCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})
