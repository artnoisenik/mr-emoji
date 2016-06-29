angular.module('app.services', [])

.factory('responseFactory', [function(){
  var test = function() {
    var cool = 'Tell me more.';
    return cool;
  }

  return (test);

}])

.service('BlankService', [function(){

}]);
