(function() {
    'use strict';

    angular
        .module('assetbuilder.survey')
        .factory('surveyUtilities', surveyUtilities);

    surveyUtilities.$inject = ['common'];

    /* @ngInject */
    function surveyUtilities(common) {
        var service = {
            formatReturn : formatReturn,
           	printCurrency :	printCurrency,
            tween : tween
        };
        
        return service;

        ////////////////

				/**
				 * Format the Return Values for Y Axis
				 * @param  {int} num 
				 * @return {string}     
				 */
				function formatReturn(num) {
				    num = num.toFixed(0);

				    if (num.length <= 6) {
				        num = formatHundreds(num)
				    } else  if (num.length > 6) {
				        num = formatMillions(num); 
				    }

				    return num;
				}

					/**
				 * Tween the properties
				 * @param  {Objbect}   b        data to be tweened
				 * @param  {Function} callback  function to tween to
				 * @return {Function}            
				 */
				function tween(b, callback) {
				    return function (a) {
				        var i = d3.interpolateArray(a, b);
				        return function (t) {
				            return callback(i(t));
				        }
				    }
				}

				/**
				 * Print int into a currency
				 * @param  {int} amount 
				 * @return {string}        
				 */
				function printCurrency(amount) {
					return '$' + common.addCommas(amount);
				}


/*
|--------------------------------------------------------------------------
| Private Methods
|--------------------------------------------------------------------------
|
*/


				/**
				 * Format for the 10 thousands (ie.  50,000 to 50K)
				 * @param  {int} num 
				 * @return {string}     
				 */
				function formatTens(num) {
				    var str = num.toString();
				    return '$' + str + 'k';
				}

				/**
				 * Format for the 100 thousands (ie.  500,000 to 500K)
				 * @param  {int} num 
				 * @return {string}     
				 */
				function formatHundreds(num) {
					  num = num/1000;
					  var str = num.toString();
				    return '$' + str + 'k';
				}   


				/**
				 * Format for the 100 thousands (ie.  5,000,000 to 5M)
				 * @param  {int} num 
				 * @return {string}     
				 */
				function formatMillions(num) {
					  num = num/1000000;
					  var str = num.toString();
				    return '$' + str + 'M';
				}

				function formatTenMillions(num) {
					  num = num/1000000;
					  var str = num.toString();

				}


			
    }
})();