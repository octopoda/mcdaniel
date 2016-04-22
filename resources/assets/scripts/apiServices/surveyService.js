/*
|--------------------------------------------------------------------------
| Service to connect with the SurveyController in the API
|--------------------------------------------------------------------------
| 
|
*/
(function() {
    'use strict';

    angular
        .module('assetbuilder.api')
        .factory('surveyService', surveyService);

    surveyService.$inject = ['$http', '$location', '$cookies', 'flash', 'common', 'errors'];

    /* @ngInject */
    function surveyService($http, $location, $cookies, flash, common, errors) {
        var apiUrl = common.apiUrl + 'FindModels/'
        var expectedUrl = common.apiUrl + 'ExpectedReturns';
        var now = new Date();

        var service = {
            isSurveyComplete : isSurveyComplete,
            getSurveyCookie : getSurveyCookie,
            storeSurveyCookie : storeSurveyCookie,
            removeSurveyCookie : removeSurveyCookie,
            storeSelectedPortfolio : storeSelectedPortfolio,
            getSelectedPortfolio : getSelectedPortfolio,
            removeSelectedPortfolio : removeSelectedPortfolio,
            getSurveyInformation : getSurveyInformation,
            getExpectedReturns : getExpectedReturns
        };
        
        return service;



        ////////////////
 
 /*
|--------------------------------------------------------------------------
| ME WANT COOKIE !!!!!
|--------------------------------------------------------------------------
    Survey Cookie Object
    vd.inputs =  {
        initialInvestment : null,
        addMonthly: null,
        investmentTimeline: 13,
        investmentRisk: 2,
        investmentType: vd.investmentType,
        date: new Date(),
        expire: setExpire()
        }


*/       

        /**
         * Check if Survey has been completed
         * @return {Boolean} 
         */
        function isSurveyComplete() {
            if ($cookies.get('surveyData') != undefined || $cookies.get('surveyData') != null) {
                return true;
            } else {
                return false;
            }
        }


        /**
         * Get the information from the Cookie 
         * @return {Object} 
         */
        function getSurveyCookie() {
            var data = $cookies.get('surveyData');
            
            if (data !== undefined) {
                return JSON.parse(data);
            }
        }

        
        /**
         * Store the Survey Information in the Cookie
         * @param  {object} data 
         * @return {null}
         */
        function storeSurveyCookie(data) {
           var exp = new Date(now.getFullYear(), now.getMonth()+ 3, now.getDate());
           var json = JSON.stringify(data);
           
           return $cookies.put('surveyData', json, {
             path: '/',
             expires: exp
           });
        }

        
        /**
         * Remove the Survey Information from the Cookie
         * @return {null} 
         */
        function removeSurveyCookie() {
            var exp = new Date(now.getFullYear(), now.getMonth(), now.getDate()-1);
            return $cookies.remove('surveyData', {
                path: '/',
                expires: exp
            });
        }



        /**
         * Store the selected Portfolio for Contact/Open account forms
         * @param  {string} name 
         * @return {null}      
         */
        function storeSelectedPortfolio(name) {
            var exp = new Date(now.getFullYear(), now.getMonth(), now.getDate()+10);
            return $cookies.put('selectedPortfolio', name, {
                path: '/',
                expires: exp
            });
        }

        /**
         * Get the selected portfolio name from the cookie
         * @return {string} 
         */
        function getSelectedPortfolio() {
           return $cookies.get('selectedPortfolio');
        }

        /**
         * Remove the Selected Portfolio From the Cookie
         * @return {null}
         */
        function removeSelectedPortfolio() {
            var exp = new Date(now.getFullYear(), now.getMonth(), now.getDate()-1);
            return $cookies.remove('selectedPortfolio', {
                path: '/',
                expires: exp
            });
        }

        /**


/*
|--------------------------------------------------------------------------
| API Data Calls
|--------------------------------------------------------------------------
*/

        /**
         * Get the Survey Information
         * @param  {Object} surveyInformation [information from Survey Post stored in Cookie]
         * @return {Object}                
         */
        function getSurveyInformation() {
            if (!isSurveyComplete) { return; }
            var surveyInformation = getSurveyCookie();
        
            return $http.get(apiUrl +  surveyInformation.initialInvestment + '/' + surveyInformation.investmentTimeline + '/' + surveyInformation.investmentRisk)
        		.then(surveyComplete)
        		.catch(function (message) {
        		    message.insertedObject = " Inital Investement: " + surveyInformation.initialInvestment + " survey timeline:" + surveyInformation.investmentTimeline + " survey risk" + surveyInformation.investmentRisk;
        			errors.catcher('Sorry, we cannot process your survey information at this time.')(message);
        		});

        		function surveyComplete(data, status, headers, config) {
        			return data.data;
        		}
        }

        
        /**
         * Get the Expected Return Data 
         * @param {Object} surveyInforamtion [information from Survey Post stored in Cookie]
         * @param {int} portfolioId
         * @return {object} 
         * @note - Expecting a Post not a get!
         */
        function getExpectedReturns(portfolio_id) {
            if (!isSurveyComplete) { return; }
            
            /** @type {object} Get Survey Information */    
            var surveyInformation = getSurveyCookie();

            /** @type {Objec} Convert Survey Information for Post */
            var postData  = {
                initialInv: surveyInformation.initialInvestment,
                years: surveyInformation.investmentTimeline,
                monthlyChange: surveyInformation.addMonthly, 
                portfolioID: portfolio_id
            };

            return $http.post(expectedUrl, postData)
                .then(expectedComplete)
                .catch(function (message) {
                    errors.catcher('We could not retrieve your expected Returns.')(message);
                });
            
            function expectedComplete(data, status, headers, config) {
                data.data.portfolioId = portfolio_id;
                return data.data;
            }  

        }
    }
})();