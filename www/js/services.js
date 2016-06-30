angular.module('app.services', [])

.factory('responseFactory', [function(){
  var test = function() {
    var cool = {
      saying: "tell me more",
      emoji: "&#x1F914;"
    }
    return cool;
  }

  return (test);

}])

.service('BlankService', [function(){

}]);
