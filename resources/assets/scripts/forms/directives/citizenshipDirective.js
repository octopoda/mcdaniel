/*
|--------------------------------------------------------------------------
| U.S. CitizenShip Checkbox Directive	
|--------------------------------------------------------------------------
|
| Validates and returns US Citizenship checkbox
|
*/

(function() {
    'use strict';

    angular
        .module('assetbuilder.forms')
        .directive('citizenship', citizenship);

    /* @ngInject */
    function citizenship () {
        // Usage:
        // <input citizenship type="checkbox" ng-model="">
        var directive = {
            link: link,
            restrict: 'A',
            require: 'ngModel'
        };
        
        return directive;

        function link(scope, element, attrs, ngModel) {
        		
        		ngModel.$parsers.push(checkCitizenship);
        		ngModel.$formatters.push(checkCitizenship);

        		/**
        		 * Check Value of citizen ship and return validity
        		 * @param  {boolean} value 
        		 * @return {boolean}       
        		 */
        		function checkCitizenship(value) {
        			if (angular.isUndefined(value)) { value = false; }
 							if (value === true) {
 								ngModel.$setValidity('citizenship', true);
 								return value;
 							} else {
 								ngModel.$setValidity('citizenship', false);	
 								return value;
 							}
 	       		}
        }
    }

    
})();