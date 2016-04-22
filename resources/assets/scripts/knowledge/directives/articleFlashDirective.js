(function() {
    'use strict';

    angular
        .module('assetbuilder.knowledge')
        .directive('articleFlash', articleFlash);

    /* @ngInject */
    function articleFlash () {
        // Usage:
        //
        var directive = {
            link: link,
            restrict: 'A',
            replace:true,
            templateUrl: '/ngViews/knowledge/article-flash.html'
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

      		var sticky = new Waypoint({
      			element: document.querySelector('.site-footer'),
      			handler: function () {
      				el.toggleClass('fixed');
      			},
      			offset:'100%'
      		});


        }
    }

    /* @ngInject */
    function Controller () {

    }
})();