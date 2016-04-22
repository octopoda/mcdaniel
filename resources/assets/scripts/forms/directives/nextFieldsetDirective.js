/*
|--------------------------------------------------------------------------
| Form Directive to go to next fieldset
|--------------------------------------------------------------------------
|
| Used in open an account form
|
*/
(function() {
    'use strict';

    angular
        .module('assetbuilder.forms')
        .directive('nextFieldset', nextFieldset);

    /* @ngInject */
    function nextFieldset (common) {
        // Usage:
        // <div next-fieldset target-id="" class="button"><a href="#"">Button Text</a></div>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	targetId: "@"
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
				var el = jq(element);
        		var tar = jq('#' + scope.targetId);
        		
        		
						/**
        		 * When element is clicked add/remove open to target_id
        		 * @return {DOM} 
        		 */
        		el.on('click', function (e) {
        		    e.preventDefault();
        		   if (el.hasClass('disabled')) return false;

        			if (tar.hasClass('open')) {
        				tar.removeClass('open');
        				scrollToFormTop();
        				return;
        			} 

        			scrollToFormTop();
        			tar.addClass('open');
        			
        			
        			/**  Scroll to Top of Form  */
        			function scrollToFormTop() {
        				jq('html, body').animate({
        					scrollTop: tar.offset().top
        				}, 400);	
        			};

        		});

        }
    }




})();



