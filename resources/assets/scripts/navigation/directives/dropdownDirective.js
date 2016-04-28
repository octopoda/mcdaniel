/*
|--------------------------------------------------------------------------
| Dropdown on click 
|--------------------------------------------------------------------------
|
| Mostly made for mobile but reveals dropdonw on clikc.  
| Desktop will show on hover;
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.navigation')
        .directive('dropdown', dropdown);

    /* @ngInject */
    function dropdown () {
        // Usage:
        // <li data-dropdown></li>
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
        	var trigger = jq(element[0]);
        	var menu = trigger.children('.dropdown-menu');

        	trigger.on('click', function (e) {
        		

        		if (trigger.hasClass('open')) {
        			menu.slideUp(500);
        			trigger.removeClass('open');
        		} else {
        			menu.slideDown(500);
        			trigger.addClass('open');
        		}
        	});
        }
    }

    
})();