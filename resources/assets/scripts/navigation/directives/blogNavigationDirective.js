(function() {
    'use strict';

    angular
        .module('mcdaniel.navigation')
        .directive('blogNavigation', blogNavigation);

    /* @ngInject */
    function blogNavigation () {
        // Usage:
        //  <div blog-navigation></div>
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
        	var el = element[0];
        	
        	var sticky = new Waypoint({
      			element: el,
      			handler: function () {
              		jq('body').toggleClass('nav-fixed');
      			},
      			offset: -100
      		});
			        	

        	var lastScrollPosition = 0;
        	
        	//Detect Scroll Position
        	jq(window).scroll(function (e) {
        		var scrollTop = jq(this).scrollTop();
        		if (scrollTop > lastScrollPosition) {
        			//Scrolling Down
        			jq(element[0]).removeClass('visible');
        		} else {
        			//Scrolling Up
        			jq(element[0]).addClass('visible');
        		}

        		lastScrollPosition = scrollTop;
        	});
        }
    }
})();