/*
|--------------------------------------------------------------------------
| Service to get Topics for Article Sidbar
|--------------------------------------------------------------------------
|
| @note stored in JSON in the /json folder for now.
| @note $cookieService is deprecated in 1.4 
| you will need to replace this service 
|
| 
*/
(function() {
    'use strict';

    angular
        .module('mcdaniel.api')
        .factory('topicService', topicService);

   topicService.$inject = ['$http', '$cookieStore', 'errors', 'flash', '$cookies'];

    /* @ngInject */
    function topicService($http, $cookieStore, errors, flash,  $cookies) {
        var jsonUrl = "/json/topics.json";

        var service = {
            getSortingData: getSortingData,
            getAll: getAll,
            //hasTopics: hasTopics,
            storeData : storeData,
            getTopics : getTopics,
            getAuthors : getAuthors,
            getDates : getDates,
        };

        activate();
        
        return service;

        ////////////////

/*
|--------------------------------------------------------------------------
| Data Methods
|--------------------------------------------------------------------------
 */

        /**
         * Get the Sorting Data from the JSON File
         * @return {object} 
         */
        function getSortingData() {
        	return $http.get(jsonUrl)
        		.then(completeSortingData)
        		.catch(function (message) {
        			errors.catcher("Could not find the Topics for Sorting the Articles")(message);
        		});

        		function completeSortingData(data, status, headers, config) {
        		    return data.data;
        		}
        }

/*
|--------------------------------------------------------------------------
| Cookie Store Methods
|--------------------------------------------------------------------------
 */
        
        /**
         * Create the cookie and store with nothing if no cookie
         * @return {null}
         */
        function activate() {
        	// $cookieStore.remove('articleData');
        	if ($cookieStore.get('articleData') === undefined) {
        		
        		storeData([], [],[]);
					} else {
        		return false;	
        	}
				}

        /**
         * Store Date in the cookie
         * @param  {object} _topics  
         * @param  {object} _authors 
         * @param  {object} _dates   
         * @return {null}          
         */
        function storeData(_topics, _authors, _dates) {
        	var data = {
    			topics: _topics,
    			dates: _dates,
    			authors: _authors
        	};

        
        	$cookieStore.put('articleData', data);
        }

        /**
         * Return all Cookie Data on Articles
         * @return {object} 
         */
        function getAll() {
        	return $cookieStore.get('articleData');
        }

				/**
         * Get topics from the cookie.
         * @return {object} 
         */
        function getTopics() {
        	return $cookieStore.get('articleData').topics;
        }

        /**
         * Get the AuthorData from articleData Cookie
         * @return {object} 
         */
        function getAuthors() {
        	return $cookieStore.get('articleData').authors;
        }


        /**
         * Get the Date from from the article data cookie
         * @return {[type]} [description]
         */
        function getDates() {
        	return $cookieStore.get('articleData').dates;
        }

        function hasTopics() {
            return false;
        }


        
    }
})();


/**
 * @note code for 1.4.0 to set expiration of cookies
 
 var now = new Date(),
 // this will set the expiration to 12 months
 exp = new Date(now.getFullYear()+1, now.getMonth(), now.getDate());

	$cookies.put('someToken','blabla',{
  	expires: exp
	});
*/