/*
|--------------------------------------------------------------------------
| Search Service
|--------------------------------------------------------------------------
|
| Service to pass the search data between parameters
| 
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .service('searchService', searchService);


   searchService.$inject = ['$rootScope', 'exploreService'];

    /* @ngInject */
    function searchService($rootScope, exploreService) {
        var data =  {
        	KeywordData: null
        };

        var service = {
        	getKeywords: getKeywords,
        	clearSearchData: clearSearchData
        };

        return service;

        ////////////////

        /**
         * Call Loading Bar and setup results directive while grabbing data
         * @param  {string} keyword 
         * @return {object}         
         */
        function getKeywords(keyword) {
        	$rootScope.$emit('search.loading', keyword);
        	return getData(keyword).then(function (data) {
        		alertResultsDirective(data);
        	});
        }

        /**
         * Clear the search Results
         */
        function clearSearchData() {
        	$rootScope.$emit('search.clear');
        }

/*
|--------------------------------------------------------------------------
| Private Methods
|--------------------------------------------------------------------------
|
| Description 1
|  Description 2
| 
|
*/        

        /**
         * Alert searchResultsDirective when Explore is finished;
         * @return {object}
         */
        function alertResultsDirective(data) {
            $rootScope.$emit('search.results', data);
        }

        
        /**
         * Get Search Data from Explore API
         * @param  {string} keyword 
         * @return {object}         
         */
        function getData(keyword) {
        	return exploreService.exploreByKeyword(keyword).then(function (data) {
        		return data;
        	});
        }


       
    }
})();