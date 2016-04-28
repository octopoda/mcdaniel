(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('footerRollup', footerRollup);

    /* @ngInject */
    function footerRollup () {
        // Usage:
        // <div footer-rollup></div>
        var directive = {
            link: link,
            restrict: 'A',
            replace:true,
            templateUrl: '/templates/blog/footer-rollup.html',
        };
        
        return directive;

        function link(scope, element, attrs) {
        	var el = jq(element);
        	
          
					
					/**
      		 * Fix to bottom of page
      		 * Waypoints http://imakewebthings.com/waypoints/ 
      		 */
      		var sticky = new Waypoint({
      			element: document.querySelector('body'),
      			handler: function () {
      				el.toggleClass('fixed');
      			},
      			offset:-200
      		});

      		/**
           * Removes when footer comes onto the page.
           * Waypoints http://imakewebthings.com/waypoints/ 
           */
          sticky = new Waypoint({
      			element: document.querySelector('.site-footer'),
      			handler: function () {
      				el.toggleClass('fixed');
      			},
      			offset:'100%'
      		});


        }
    }

    
})();