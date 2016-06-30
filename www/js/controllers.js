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
    botMessageToList();
  }

  function botMessageToList() {
    var time = new Date();
    var botMessage = responseFactory();
    console.log(botMessage);
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
