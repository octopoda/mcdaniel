/*
|--------------------------------------------------------------------------
| Explore Service for Explore API
|--------------------------------------------------------------------------
|
| Query Options: 
| ?page= [Page Number for Pagination]
| ?pgSize= [Number of rows to pull back]
| ?srtBy= [Sorting by DATE, AUTHOR, TITLE, RANK]
| ?notBeforeMnth = int {needs to be in days}
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.api')
        .factory('exploreService', exploreService);

    exploreService.$inject = ['$http', '$location', 'flash', 'common', 'errors', '$cookieStore'];

    /* @ngInject */
    function exploreService($http, $location, flash, common, errors, $cookieStore) {
        var apiUrl = common.apiUrl + 'quickExplore/',
            topicUrl = common.apuUrl + 'sort/',
            pageSize = 5;

        var service = {
            exploreByKeyword: exploreByKeyword,
            paginateExploreKeyword: paginateExploreKeyword
        };
        
        return service;

        ////////////////
        

        /*
        |--------------------------------------------------------------------------
        | Keyword Methods
        |--------------------------------------------------------------------------
        |
        |
        */

        /**
         * Explore Service by Keyword
         * @param  {string} keyword 
         * @return {object}         
         */
        function exploreByKeyword(keyword, pgSize) {
            if (pgSize == null) { pgSize = pageSize; }	
            
            return $http.get(apiUrl + keyword + '?pageSize=' + pgSize)
        		.then(exploreComplete)
        		.catch(function (message) {
        			errors.catcher('Sorry we are not able to search our site at this time.')(message);
        		});

        		function exploreComplete(data, status, header, config) {
        			return data.data;
        		}
        }

        
        /**
         * Pagination of Explore Service
         * @param  {string} keyword 
         * @param  {int} page    
         * @return {object}         
         */
        function paginateExploreKeyword(keyword, page, pgSize) {
            if (pgSize == null) { pgSize = pageSize; }	
        	
            return $http.get(apiUrl + keyword + '?pageSize=' + pgSize + '&page=' + page)
        		.then(exploreComplete)
        		.catch(function (message) {
        			errors.catch('XHR for exploreByKeyword Failed')(message);
        		});

        		function exploreComplete(data, status, header, config) {
        			return data.data;
        		}
        }


        /*
        |--------------------------------------------------------------------------
        | Topic Methods
        |--------------------------------------------------------------------------
        |
        |
        */
       
        /**
         * Get the articles for topic(s)
         * @param  {object} topics 
         * @return {object}       
         */
       function getArticlesForTopic(topics) {
            return $http.get(topicUrl)
                .then(topicComplete)
                .catch( function (message) {
                    errors.catcher('Sorry we could not sort articles by topics right now')(message);
                });

                function topicComplete(data, status, headers, config) {
                    return data.data;
                }
       }

       /**
        * Get articles for Date
        * @param {int} days
        * @return {object}
        */
       function getArticlesForDate(days) {
            return $http.get(topicUrl)
                .then(dateComplete)
                .catch( function (message) {
                    errors.catcher('Sorry we could not sort articles by date right now')(message);
                });

                function dataComplete(data, status, headers, config) {
                    return data.data;
                }
       }

       /**
        * Get articles for Author
        * @param {string} author
        * @return {[type]} [description]
        */
       function getArticlesForAuthor(author) {
            return $http.get(topicUrl)
                .then(authorComplete)
                .catch(function (message) {
                    errors.catcher('Sorry we could not sort articles by author right now')(message);
                });

                function authorComplete(data, status, headers, config) {
                    return data.data;
                }
       };

       /**
        * Sort Articles by the cookie data
        * @return {object} [description]
        */
       function sortArticles() {
            var url  = topicUrl;
            return $http.get(url)
                .then(sortComplete)
                .catch( function (message) {
                    errors.catcher('Sorry we could not sort the articles right now')(message);
                });

                function sortComplete(data, status, header, config) {
                    return data.data;
                }
       };


        /*
        |--------------------------------------------------------------------------
        | Cookie Methods
        |--------------------------------------------------------------------------
        |
        |
        */

        /**
         * Check if cookies have topics
         * @return {Boolean} 
         */
        function hasTopics() {
            if ($cookieStore.get('articleTopics') != undefined || $cookieStore.get('articleTopics') != null) {
                return true;
            } else {
                return false;
            }
        }

        /**
         * Get the Topics from the Cookie
         * @return {object} 
         */
        function getTopics() {
            return $cookieStore.get('articleTopics');
        }

        /**
         * Store the Topics in a cookie
         * @param  {object} data 
         * @return {null}      
         */
        function storeTopics(data) {
            $cookieStore.put('articleTopics', data)
        }

        /**
         * Remove the topics from the cookie
         * @return {null} 
         */
        function removeTopics() {
            $cookieStopre.remove('surveyData');
        }


    }
})();


