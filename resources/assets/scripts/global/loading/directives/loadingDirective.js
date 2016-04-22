/*
|--------------------------------------------------------------------------
| Loading Directive
|--------------------------------------------------------------------------
|
| Adds placeholder to div while loading
|
*/

(function() {
    'use strict';

    angular
        .module('global.loading')
        .directive('loading', loading);

    loading.$inject = ['$rootScope'];

    /* @ngInject */
    function loading ($rootScope) {
        // Usage:
        // <div loading></div>
        var directive = {
            link: link,
            restrict: 'A',
            replace:true,
            templateUrl: '/ngViews/global/loading.html',
        };
        
        return directive;

        function link(scope, element, attrs) {
        	setSize();

        	/**
        	 * Set the size of the element to the size of the parent;
        	 */
        	function setSize() {
        		var h = jq(element).parent().height();
        		var w = jq(element).parent().width();

        		jq(element).css({height: h, width: w});
        	}


        	/** When Loading opacity 1 */
        	$rootScope.$on('cfpLoadingBar:loading', function handleLoading() {
        		jq(element).css({opacity: 1, display: 'block'});
        	});

        	/** When Loading opacity 0 */
        	$rootScope.$on('cfpLoadingBar:completed', function handleLoad() {
        		jq(element).css({opacity: 0, display: 'none'});
        	});
        }
    }

})();