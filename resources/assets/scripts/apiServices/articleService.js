(function() {
    'use strict';

    angular
        .module('assetbuilder.api')
        .factory('articleService', articleService);

    articleService.$inject = ['$http', '$location', 'flash', 'common', 'errors'];

    /* @ngInject */
    function articleService($http, $location, flash, common, errors) {
        var apiUrl = common.apiUrl + '/Articles';
        var homepageUrl = common.apiUrl + '/homepage';
        var defaultPageSize = 24;

        var service = {
            getArticles: getArticles,
            getPaginatedArticles: getPaginatedArticles,
            getArticlesForHomepage : getArticlesForHomepage
        };
        
        return service;

        ////////////////

        /**
         * Get Articles
         * @param {int} pgSize;
         * @return {object} 
         */
        function getArticles(pgSize) {
            var pageSize = (pgSize === null) ? defaultPageSize : pgSize;
        	
            return $http.get(apiUrl + "?pgSize=" + pageSize)
        		.then(articleComplete)
        		.catch(function (message) {
        			errors.catcher('XHR for getArticles failed')(message);
        		}) 

        		function articleComplete(data, status, header, config) {
        			return data.data;
        		}
        }

        
        /**
         * Get article in pagnation style
         * @param  {int} pageNumber 
         * @return {object}            
         */
        function getPaginatedArticles(pageNumber, pgSize) {
            var pageSize = (pgSize === null) ? defaultPageSize : pgSize;
        	
            return $http.get(apiUrl + '?pageSize=' + pageSize + '&page=' + pageNumber)
        		.then(articleComplete)
        		.catch(function (message) {
        			errors.catcher('Sorry we are not able to retrieve the articles at this time.')(message);
        		})

        		function articleComplete(data, status, header, config) {
        			return data.data;
        		}
        }


        /**
         * Get Articles for the homepage that include trending and internal articles
         * @param  {int} articlePerPage   
         * @param  {int} trendingAmount   
         * @param  {boolean} includeInternals 
         * @return {object}                  
         */
        function getArticlesForHomepage(articlePerPage, trendingAmount, includeInternals) {
            return $http.get(homepageUrl +  '/' + articlePerPage + '/' + 2 + '/' + includeInternals)
                .then(articleComplete)
                .catch(function (message) {
                    errors.catcher('Sorry we we not able to retrieve the articles at this time.')(message);
                });

                function articleComplete(data, status, header, config) {
                    return data.data;
                }
        }
    }
})();