/*
|--------------------------------------------------------------------------
| Currency Input Directive
|--------------------------------------------------------------------------
|
| Handels Currency input for a text input box
| Add min, max, and precision values
| 
|
*/
(function() {
    'use strict';

    angular
        .module('assetbuilder.survey')
        .directive('currencyInput', currencyInput);

    currencyInput.$inject = ['common'];

    /* @ngInject */
    function currencyInput (common) {
        // Usage:
        // <input currency-input type="text" min="" max="">
        
        var directive = {
            link: link,
            restrict: 'A',
            require: "ngModel",
        };
        
        return directive;

        function link(scope, element, attrs, ngModel) {
            var min, max, precision, lastValidValue, preRoundValue;

            /**
             * Using Parsers to validate the ngModel
             * @param  {int} value
             * @return {array}   
             * @note will return last value if non int is entered.
             */
            ngModel.$parsers.push(function (value) {
                if (angular.isUndefined(value)) { value = ''; }
                var empty = ngModel.$isEmpty(value);

                if (common.isNumber(value)) {
                    lastValidValue = (value === null) ? null : (empty ? formatView(value) : parseInt(value));
                } else if (!empty) {
                    ngModel.$setViewValue(formatView(lastValidValue)); 
                    ngModel.$render();
                } else {
                   return undefined;
                }
                

                ngModel.$setValidity('number', true);
                return lastValidValue;

                return value
            }); 


            /**
            * After Parsing the information from above add the format of commas and decimal points;
            * @note should run last.
            */
            ngModel.$formatters.push(formatView);

          
            /**
             * Grab the min attributes and validate the input
             * @param  {int} value 
             * @return {int}        
             */
            if (angular.isDefined(attrs.min)) {
                attrs.$observe('min', function(value) {
                    min = parseInt(value || 0);
                    minValidator(ngModel.$modelValue);
                });

                ngModel.$parsers.push(minValidator);
                ngModel.$formatters.push(minValidator);
            }

            
            /**
             * Grab the max attributes and validate the input
             * @param  {int} value)  
             * @return {validator}        
             */
            if (angular.isDefined(attrs.max)) {
                attrs.$observe('max', function (val) {
                    max = parseInt(val);
                    maxValidator(ngModel.$modelValue);
                })

                ngModel.$parsers.push(maxValidator);
                ngModel.$formatters.push(maxValidator);
            }       

            /**
             * Round off the number based on precision attribute
             * @param  {int} value
             * @return {mixed}        
             */
            if (angular.isDefined(attrs.precision)) {
                attrs.$observe('precision', function (value) {
                    var parsed = parseInt(value);
                    precision = !isNaN(parsed) ? parsed : 2;
                });     
            }

            /**
             * Format the Value
             * @param  {int} value
             * @return formatted Values
             */
            ngModel.$formatters.push(function (value) {
                return value ? formatPrecision(value) : value;
            })

            
            /** 
             * Set the Last Valid Value
             * @param  {int} value)
             * @return {int} 
             */
            ngModel.$parsers.push(function (value) {
                if (value && value >= attrs.min || value === 0) {
                    lastValidValue = round(value);
                    return lastValidValue;
                } else {
                    return undefined;
                }
            });


            /**
             * Format Input on Blur
             * @param  {ngModel} 
             * @return {int} 
             */
            jq(element).on('blur', function () {
                var value = ngModel.$modelValue;
                if (value) {
                    ngModel.$viewValue = formatPrecision(value);
                    ngModel.$render();
                }
            });


            jq(element).on('focus', function () {
                var value = ngModel.$modelValue;
                if (value) {
                    ngModel.$viewValue = '';
                    ngModel.$render();
                }
            });

            

            /*
            |--------------------------------------------------------------------------
            | In Link Helper
            |--------------------------------------------------------------------------
            |
            | Helper functions that will work on the model
            | Do not remove from link function.
            | 
            |
            */


            /**
             * Add Decimal Points to Value
             * @param  {int} value 
             * @return {float}       
             */
            function formatView(value) {
                var val =  ngModel.$isEmpty(value) ? '' : '' + common.addCommas(value);
                return val;
            }

           
             /**
             * Check to see if input is less than min
             * @param  {int} value [input value]
             * @return {validator} 
             */
            function minValidator(value) {
                if (!ngModel.$isEmpty(value) && value < min) {
                    ngModel.$setValidity('min', false);
                    return undefined;
                } else {
                    ngModel.$setValidity('min', true);
                    return value;
                }
            }

            /**
             * Check to see if input is more than max
             * @param  {int} value [Input value]
             * @return {validator}      
             */
            function maxValidator(value) {
                if (!ngModel.$isEmpty(value) && value > max) {
                    ngModel.$setValidity('max', false);
                    return undefined;
                } else {
                    ngModel.$setValidity('max', true);
                    return value;
                }
            }

             /**
             * Get a rounded number based on the precision setup. 
             * @param  {Int} num  [Number to be Rounded]
             * @return {int} Rounded Number 
             */
            function round(num) {
                var d = Math.pow(10, precision);
                return Math.round(num * d) / d;
            }

            /**
             * REturn a string that respresents the rounded number
             * @param  {Int} value [Number to be rounded]
             * @return {String} 
             */
            function formatPrecision(value) {
                var val =  value.toFixed(precision);
                val = common.addCommas(val);
                return val;
            }


            
        
        } //End Link
    } //End Directive


})();