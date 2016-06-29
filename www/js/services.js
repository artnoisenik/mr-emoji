angular.module('app.services', [])

.factory('responseFactory', [function(){
  let test = function() {
    var cool = 'Tell me more.';
    return cool;
  }

  // var rdResponze = [
  // "Tell me more.",
  // "And?",
  // "What else?"
  // ];

  return (test);

}])

.service('BlankService', [function(){

}]);
