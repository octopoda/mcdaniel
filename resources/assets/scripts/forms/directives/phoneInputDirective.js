/*
|--------------------------------------------------------------------------
| Directive for Phone Input
|--------------------------------------------------------------------------
|
| Validates and creates slide downs for Phone Input
|
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.forms')
        .directive('phoneInput', phoneInput);

    /* @ngInject */
    function phoneInput () {
        // Usage:
        // <input phone-input type="tel">
        var directive = {
            link: link,
            restrict: 'A',
            require: 'ngModel',
            scope: {
            	targetId: "@"
            }
        };
        
        return directive;

        function link(scope, element, attrs, ngModel) {
        	var tar = jq('#' + scope.targetId);
            

        	/**
             * On focus check for validation and then add best time to call. 
             */
            jq(element).on('focusout', function () {
        		if (jq(this).val() != '') {
        			tar.slideDown(500);
        		} else {
        			tar.slideUp(500);
        		}
        	});



            /**
             * Validate the Phone
             * @param  {string} value 
             * @return {boolean}       
             * @note - not validating phone number.  going to trust the user will need it. 
             */
            // function phoneValidator(value) {
            //     var reg = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
            //     valid = reg.test(value)
            //     if (!ngModel.$isEmpty(value) && valid) {
            //         ngModel.$setValidity('phone', true);
            //         return value;
            //     } else {
            //         ngModel.$setValidity('phone')
            //     }
            // }

            

        }
    }

    
})();