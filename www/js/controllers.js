angular.module('app.controllers', [])

.controller('chatCtrl', function($ionicScrollDelegate,$sanitize,responseFactory) {
  console.log('BAnananaerrrrs!');
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
    var botMessage = responseFactory();
    vm.messages.push({content:$sanitize(botMessage)});
  }

})

.controller('diaryCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})
