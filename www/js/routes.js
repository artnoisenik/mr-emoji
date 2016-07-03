angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js

  $stateProvider

  .state('chat', {
    url: '/chat',
    templateUrl: 'templates/chat.html',
    controller: 'chatCtrl',
    controllerAs: 'vm'
  })

$urlRouterProvider.otherwise('/chat')
$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


});
