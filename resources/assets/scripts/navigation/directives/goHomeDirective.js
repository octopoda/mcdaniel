/*
|--------------------------------------------------------------------------
| Go Home Directive
|--------------------------------------------------------------------------
|
| When someone clicks this directive it takes you back home.
| 
*/
(function() {
    'use strict';

    angular
        .module('mcdaniel.navigation')
        .directive('goHome', goHome);

    /* @ngInject */
    function goHome () {
        // Usage:
        // <a go-home></a>
        var directive = {
            link: link,
            restrict: 'A',
        };
        return directive;

        function link(scope, element, attrs) {
        	var home = jq(element[0]);

        	//Go Home
        	home.on('click', function () {
        		window.location = '/'
        	})

        }
    }

})();