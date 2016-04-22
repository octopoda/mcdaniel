(function() {
    'use strict';

    angular
        .module('assetbuilder.forms')
        .directive('zipcode', zipcode);

    zipcode.$inject = ['common'];    

    /* @ngInject */
    function zipcode (common) {
        // Usage:
        // <input zipcode type="text" ng-model="">
        var directive = {
            link: link,
            restrict: 'A',
        		require: "ngModel"
        };
        
        return directive;

        function link(scope, element, attrs, ngModel) {
        		
			    ngModel.$parsers.push(checkZipCode)
        	 	ngModel.$formatters.push(checkZipCode)


        	 	/**
        	 	 * Check to make sure Zip Code
        	 	 * @param  {string} value 
        	 	 * @return {boolean}   
        	 	 */
        	  function checkZipCode(value) {
        	  	var reg = /^\d{5}(?:[-\s]\d{4})?$/;
        	  	if (reg.test(value)) {
        	  		ngModel.$setValidity('zipcode', true);
        	  		return value;
        	  	} else {
        	  		ngModel.$setValidity('zipcode', false);
        	  		return undefined;
        	  	}
        	  }
        }
    }

    
})();