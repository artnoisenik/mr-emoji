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
    reviewMessage(message);
  }

  function reviewMessage(text) {
    text=text.toLowerCase();
  	text=text.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g, ' ');
  	text=text.replace(/\s+-+\s+/g, '.');
  	text=text.replace(/\s*[,\.\?!;]+\s*/g, '.');
  	text=text.replace(/\s*\bbut\b\s*/g, '.');
  	text=text.replace(/\s{2,}/g, ' ');

    console.log(text);

    var parts=text.split('.');
    for (var i=0; i<parts.length; i++) {
      var part=parts[i];
      if (part!='') {
        // check for quit expression
        for (var q=0; q<elizaQuits.length; q++) {
          if (elizaQuits[q]==part) {
            this.quit=true;
            return this.getFinal();
          }
        }
      }
    }
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
