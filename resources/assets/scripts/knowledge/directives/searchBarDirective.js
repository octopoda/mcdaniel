/*
|--------------------------------------------------------------------------
| Search Bar Directive
|--------------------------------------------------------------------------
|
| On submit will find results from search service and send to serach results
|
*/

(function() {
    'use strict';

    angular
        .module('assetbuilder.knowledge')
        .directive('searchBar', searchBar);

    searchBar.$inject = ['$rootScope', 'exploreService', 'searchService'];

    /* @ngInject */
    function searchBar ($rootScope, exploreService, searchService) {
        // Usage:
        // <form search-bar></form>
        var directive = {
            link: link,
            restrict: 'A',
        };
       
        return directive;

        function link(scope, element, attrs) {
       			var vd = scope;
       				vd.keyword = null;

       			/** Catch form submit get keyword and send to service */
            jq(element).on('submit', function (e) {
       				e.preventDefault();
       				vd.keyword = jq(this).children('input').val();
       				if (vd.keyword === undefined) return;
       				sendToResults(vd.keyword);
       			});

            /** On search.clear empty input */
            $rootScope.$on('search.clear', function () {
              jq(element).children('input').val('')
            })

       		/**
             * Send keyword to search service
             * @param  {string} keyword 
             * @return {object} 
             */
            function sendToResults(keyword) {
    			return searchService.getKeywords(keyword);
    		}
        }
    }

})();	