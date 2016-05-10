(function() {
    'use strict';

    angular
        .module('mcdaniel.pages')
        .directive('servicesButton', servicesButton);

   	servicesButton.$inject = ['localStorageService'];

    /* @ngInject */	
    function servicesButton (localStorageService) {
        // Usage:
        // <div class="button" data-services-button data-service="weight-loss"></div>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	service: "@"
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
   			    var el = jq(element[0]);
            var clicked = false;
  			     
            el.on('click', function (e) {
                e.preventDefault();
                localStorageService.set('interestedService', scope.service);
                window.location = el.attr('href');
            });
        }
    }

  

 
})();