angular.module('app.controllers', [])

.controller('chatCtrl', function($ionicScrollDelegate,$sanitize) {
  var vm=this;

	vm.messages=[];

  vm.sendMessage=function(){
    console.log('HEYYY!!!');
    console.log('vm MESSAGE!!!!',vm.message);
    addMessageToList(vm.message);
    vm.message = "";
  };

  function addMessageToList(message){
    vm.messages.push({content:$sanitize(message)});
    $ionicScrollDelegate.scrollBottom();
    botMessageToList();
  }
  console.log('MESSAGES!!!!!***',vm.messages);

  function botMessageToList() {
    console.log('Hey this is a bot message!');
  }

})

.controller('diaryCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})
