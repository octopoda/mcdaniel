/*
|--------------------------------------------------------------------------
| Menu Toggle Directive
|--------------------------------------------------------------------------
|
| Adds the class to open any id that you specify in the menu-toggle attribute
|
*/
(function() {
    'use strict';

    angular
        .module('global.sidemenu')
        .directive('menuToggle', menuToggle);

    menuToggle.$inject = ['$rootScope'];

    /* @ngInject */
    function menuToggle ($rootScope) {
        // Usage:
        // <div menu-toggle="{id of element you wish to toggle}"></div>
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
        	jq(element).on('click', function () {
               toggleMenu(attrs.menuToggle);
               jq(this).toggleClass('active');
            });

            $rootScope.$on('menu.close', function handleClose( event ) { 
                toggleMenu(attrs.menuToggle);
            });

            $rootScope.$on('menu.open', function handleClose( event ) { 
                toggleMenu(attrs.menuToggle);
            });
		}
    }

    /**
     * Toggle Menu Element
     * @param  {string}  attr   
     * @param  {Boolean} isOpen 
     * @return {Boolean}         
     */
    function toggleMenu(attr) {
    	var target = jq('#'+attr);

        if (target.hasClass('open')) {
    		target.removeClass('open');
            return false;
        } else {
    	   target.addClass('open');	
           return true;
    	}
    };


})();