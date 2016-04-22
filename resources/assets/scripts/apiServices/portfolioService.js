(function() {
    'use strict';

    angular
        .module('assetbuilder.api')
        .factory('portfolioService', portfolioService);

    portfolioService.$inject = ['$http', '$location', 'common', 'errors', 'flash'];

    /* @ngInject */
    function portfolioService($http, $location, common, errors, flash) {
        var apiUrl = common.apiUrl + 'Portfolios/';


        var service = {
        	getPortfolioForGroupTicker: getPortfolioForGroupTicker,
            getPortfolioCount: getPortfolioCount
        };
        
        return service;

        ////////////////

        
        /**
         * Get the Portfolio From the Group Ticker
         * @param  {string} groupTicker 
         * @return {Object}             
         */
        function getPortfolioForGroupTicker(groupTicker) {
        	return $http.get(apiUrl + groupTicker)
        		.then(portfolioComplete)
        		.catch( function (message) {
        			errors.catcher('Sorry we are not able to get the Portfolio information right now.')(message);
        			//Redirect? 
        		});

        		function portfolioComplete(data, status, headers, config) {
        			if (!data.data.Portfolios) return false;
                    return data.data.Portfolios;
        		}
        }

        
        
        /**
         * Get the Count of the Portfolios in a Group
         * @param  {string} groupTicker 
         * @return {int}             
         */
        function getPortfolioCount(groupTicker) {
            return $http.get(apiUrl + groupTicker)
                .then(portfolioCountComplete)
                .catch( function(message) {
                    errors.catcher('XHR Failed For getPortfolioCount')(messsage);
                });

                function portfolioCountComplete(data, status, headers, config) {
                    return data.data.Count;
                }
        }

        
    }
})();