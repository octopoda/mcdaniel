/*
|--------------------------------------------------------------------------
| Clear Search Directive
|--------------------------------------------------------------------------
|
| Sends to rootscope that search service needs to clear;
|
*/

(function() {
    'use strict';

    angular
        .module('assetbuilder.knowledge')
        .directive('clearSearch', clearSearch);

    clearSearch.$inject = ['searchService'];

    /* @ngInject */
    function clearSearch (searchService) {
        // Usage:
        // <div clear-search></div>
        var directive = {
            link: link,
            restrict: 'A',
        };
   
        return directive;

        function link(scope, element, attrs) {
			
            /** Alert the Rootscope that Search is clearing */
            jq(element).on('click', function () {
        		searchService.clearSearchData();
        	});

        }
    }

    
})();