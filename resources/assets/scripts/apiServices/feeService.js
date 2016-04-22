/*
|--------------------------------------------------------------------------
| Service for Fee Calculator
|--------------------------------------------------------------------------
|
| Get the fees for the fee calculator
| @note in Dev mode and using fake JSON
| 
|
*/

(function() {
    'use strict';

    angular
        .module('assetbuilder.api')
        .factory('feeService', feeService);

    feeService.$inject = ['$http', '$location', 'common', 'errors', 'flash'];

    /* @ngInject */
    function feeService($http, $location, common, errors, flash) {
        var apiUrl = common.apiUrl + 'PricingForPortfolio/'
        
        var service = {
            getFeesForPortfolioAndAmount: getFeesForPortfolioAndAmount
        };
        
        return service;


        /**         * Get the fees associated with model portfolio and amount
         * @param  {string} modelPortfolio  
         * @param  {int} amountInvesting 
         * @return {object}                 
         */
        function getFeesForPortfolioAndAmount(modelPortfolio, amountInvesting) {
            return $http.get(apiUrl + amountInvesting + '/' + modelPortfolio)
        		.then(feesComplete)
        		.catch(function (message) {
        		    message.insertedObject = "amount Invested:" + amountInvesting + " model Portfolio: " + modelPortfolio;
        			errors.catcher('Sorry, but are not able to get our Fees at this time.')(message);
        		});

        		function feesComplete(data, status, headers, config) {
        			return data.data;
        		}
        }
    }
})();