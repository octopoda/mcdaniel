(function() {
    'use strict';

    angular
        .module('mcdaniel.shared')
        .directive('instaFeed', instaFeed);

    /* @ngInject */
    function instaFeed () {
        // Usage:
        // <div instafeed></div>
        var directive = {
            link: link,
            restrict: 'A',
            templateUrl: '/templates/shared/instafeed.html'
        };
        
        return directive;

        function link(scope, element, attrs) {
        	 console.log('testing');

        	 var feed = new Instafeed({
        		get: 'user',
        		userId: 13141599,
        		sortBy: 'most-recent',
        		limit: 8,
        		clientId: 'b867a55a04494dd7a0a013ca52d35188'
			});
    		
    		feed.run();
        }
    }

    
})();