(function() {
    'use strict';

    angular
        .module('mcdaniel.shared')
        .directive('fixedAsset', fixedAsset);
	
	  /* @ngInject */
    function fixedAsset () {
        // Usage:
        // <div fixed-asset></div>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
              wrapper: "@"  
            }
        };
        return directive;

        function link(scope, element, attrs) {
        	var el = element[0];
              
          /**
      		 * Fixed Navigation
      		 * Waypoints http://imakewebthings.com/waypoints/ 
      		 */
      		var fixed = new Waypoint({
      			element: el,
      			handler: function () {
            		jq(el).toggleClass('fixed');
      			},
      			offset: 120
      		});


         
        }
    }
})();