(function() {
    'use strict';

    angular
        .module('mcdaniel.api')
        .factory('articleService', articleService);

    articleService.$inject = ['$http', '$location', 'flash', 'common', 'errors'];

    /* @ngInject */
    function articleService($http, $location, flash, common, errors) {
        var apiUrl = common.apiUrl + '/posts';
        var defaultPageSize = 24;

        var service = {
            getArticles: getArticles,
            getPaginatedArticles: getPaginatedArticles,
            getArticlesForBlogPreview: getArticlesForBlogPreview
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
         * Get the Preview Articles
         * @param  {int} number 
         * @return {object}        
         */
       function getArticlesForBlogPreview(number) {
            return $http.get(apiUrl + '/byNumber/' + number)
                .then(articleComplete)
                .catch(function (message) {
                    errors.catcher('Sorry we are not able to retrieve the articles at this time.')(message);
                });

                function articleComplete(data, status, headers, config) {
                    return data.data
                }
       }


       /**
        * Seach the Posts
        * @param  {object} data 
        * @return {object}      
        */
       function searchArticles(data) {
            return $http.post(apiUrl + '/search', data)
                .then(articlesComplete)
                .catch(function (message) {
                    errors.catcher('Sorry we were not able to search the articles at this time')(message);
                });

                function articlesComplete(data, status, headers, config) {
                    console.dir(data.data);
                    return data.data;
                }   
       }
    }
})();