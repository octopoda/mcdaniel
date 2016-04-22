/*
|--------------------------------------------------------------------------
| Overlay Directive
|--------------------------------------------------------------------------
|
| Creates Overlay of Site for
| Full screen interaction.
| 
|
*/			
(function() {
    'use strict';

    angular
        .module('mcdaniel.shared')
        .directive('overlay', overlay);

    /* @ngInject */
    function overlay () {
        // Usage:
        // <div overlay></div>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	targetId: "@"
            }
        };
       
        return directive;

        function link(scope, element, attrs) {
        	jq(element).on('click', function (e) {
        		e.preventDefault();
        		openOverlay(scope.targetId);
        		jq(this).toggleClass('active');
                jq('body').toggleClass('nav-open');
        	})
        }
    }

    function openOverlay(target) {
    	var element = jq('#'+ target);

    	if (element.hasClass('open')) {
    		element.removeClass('open');
    	} else {
    		element.addClass('open');
    	}

    }
    
})();