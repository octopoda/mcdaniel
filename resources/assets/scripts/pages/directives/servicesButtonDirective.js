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
            	service: "@",
                category: "@"
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
   			var el = jq(element[0]);
            var clicked = false;
            
            var serviceSelected = {
                category: scope.category,
                code: (scope.service === '') ? null : scope.service
            }

            el.on('click', function (e) {
                e.preventDefault();
                localStorageService.set('interestedService', serviceSelected);
                window.location = el.attr('href');
            });
        }
    }
})();