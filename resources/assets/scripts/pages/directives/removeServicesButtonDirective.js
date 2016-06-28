(function() {
    'use strict';

    angular
        .module('mcdaniel.pages')
        .directive('removeServicesButton', removeServicesButton);

   	removeServicesButton.$inject = ['localStorageService'];

    /* @ngInject */	
    function removeServicesButton (localStorageService) {
        // Usage:
        // <div class="button" data-remove-services-button"></div>
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
   			var el = jq(element[0]);
            var clicked = false;


  			     
            el.on('click', function (e) {
                e.preventDefault();
                localStorageService.set('interestedService', null);
                window.location = el.attr('href');
            });
        }
    }

  

 
})();