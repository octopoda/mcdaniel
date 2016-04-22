/*
|--------------------------------------------------------------------------
| Slide Down Directive
|--------------------------------------------------------------------------
|
| Will add the Class open and slide-down to any id on the page listing in the target-id attribute
| @note to just add the open class use the open directive.
|
*/
(function() {
    'use strict';

    angular
        .module('mcdaniel.shared')
        .directive('slideDown', slideDown);

    /* @ngInject */
    function slideDown () {
        // Usage:
        //  <div slide-down target-id="{{ target id attribute }}"></div>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	targetId: "@"
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
        	var target = jq('#' + scope.targetId);


            /**
             * On Click Find the the element and toggle the class
             * @param  {target}  element
             * @param  {event} e
             * @return {DOM} 
             */
        	jq(element).on('click', function (e) {
                e.preventDefault();
        		if (target.hasClass('open')) {
        			target.slideUp(500)
        		} else {
        			target.slideDown(100, function () {
                        scrollToTarget(target.offset().top);    
                    });
                    
        		}
        
        		target.toggleClass('open');
                jq(this).toggleClass('active');

                
        	});	

            
            /**
             * Scroll to the Target {mainly for mobile}
             * @return {DOm}
             */
            function scrollToTarget(top) {
                jq('html, body').animate({
                    scrollTop: (top-96)
                }, 200);
            }
        
        }
    }

    
})();