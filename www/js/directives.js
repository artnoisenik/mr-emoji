angular.module('app.directives', [])

.directive('constantFocus', function(){
      return {
        restrict: 'A',
        link: function(scope, element, attrs){

          element[0].addEventListener('focusout', function(e){
            element[0].focus();
          });
        }
      };
    })
