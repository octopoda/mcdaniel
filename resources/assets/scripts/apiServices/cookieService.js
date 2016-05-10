(function() {
    'use strict';

    angular
        .module('mcdaniel.api')
        .factory('cookieService', cookieService);

    cookieService.$inject = ['$http', '$location', '$cookies'];

    /* @ngInject */
    function cookieService($http, $location, $cookies) {
        var cookieName = 'mcdanielNutrition';
        var now = new Date();

        var service = {
        	haveCookie : haveCookie,
            getCookie: getCookie,
            storeCookie : storeCookie,
            storeMailChimp : storeMailChimp,
            storeService : storeService,
            removeCookie : removeCookie
        };
        
        return service;

        ////////////////

        /**
         * Check to see if there is a cookie. 
         * @return {boolean} 
         */
        function haveCookie() {
        	if ($cookies.get(cookieName) != undefined || $cookies.get(cookieName) != null) {
        		return true;
        	} else {
        		return false;
        	}	
        }


        /**
         * Get the Cookie
         * @return {object}
         */
        function getCookie() {
        	var data = $cookies.get(cookieName);

        	if (data !== undefined) {
        		return JSON.parse(data);
        	} else {
        		return false;
        	}
        }

        /**
         * Store the Cookie Information
         * @param  {object} data
         * @return {object} 
         */
        function storeCookie(data) {
           var exp = new Date(now.getFullYear(), now.getMonth()+ 12, now.getDate());
           var json = JSON.stringify(data);
           
           return $cookies.put(cookieName, json, {
             path: '/',
             expires: exp
           });
        }

        /**
         * Store the Mail Chimp
         * @return {null}
         */
        function storeMailChimp() {
            var data = getCookie();
            data.subscribedToMailChimp = true;
            var json = JSON.stringify(data);
            return $cookies.put(cookieName, json);
        }

        /**
         * Store the Services
         * @param  {string} service 
         * @return {null}         
         */
        function storeService(service) {
            var data = getCookie();
            data.lastInterestedService = service;
            var json = JSON.stringify(data);
            return $cookies.put(cookieName, json);
        }


        /**
         * Store the last read article
         * @param  {string} articleTitle 
         * @return {null}
         */
        function storeLastArticle(articleTitle) {
            var data = getCookie();
            data.lastReadArticle = true;
            var json = JSON.stringify(data);
            return $cookies.put(cookieName, json);
        }


        /**
         * [removeCookie description]
         * @return {[type]} [description]
         */
        function removeCookie() {
        	 var exp = new Date(now.getFullYear(), now.getMonth(), now.getDate()-1);
            return $cookies.remove(cookieName, {
                path: '/',
                expires: exp
            });
        }
    }
})();