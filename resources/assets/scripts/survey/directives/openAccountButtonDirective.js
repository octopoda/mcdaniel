(function() {
    'use strict';

    angular
        .module('assetbuilder.survey')
        .directive('openAccountButton', openAccountButton);

    openAccountButton.$inject = ['surveyService', '$window'];

    /* @ngInject */
    function openAccountButton (surveyService, $window) {
        // Usage:
        // <div open-account-button></div>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	portfolio: "="
            }
        };
        return directive;

        function link(scope, element, attrs) {
        	//Add name to cookie 
        	jq(element).on('click', function (e) {
        		e.preventDefault();
        		surveyService.storeSelectedPortfolio(scope.portfolio);
                $window.location = '/open-account';
            });
        
        }
    }

    
})();