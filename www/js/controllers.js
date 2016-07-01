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

  function reviewMessage(message) {
    var text=message.toLowerCase();
    var text=message.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g, ' ');
    var text=message.replace(/\s+-+\s+/g, '.');
    var text=message.replace(/\s*[,\.\?!;]+\s*/g, '.');
    var text=message.replace(/\s*\bbut\b\s*/g, '.');
    var text=message.replace(/\s{2,}/g, ' ');

    console.log(text);
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
