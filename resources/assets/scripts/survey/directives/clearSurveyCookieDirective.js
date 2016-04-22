/*
|--------------------------------------------------------------------------
| Clear Survey Cookie Directive
|--------------------------------------------------------------------------
|
| clears the survey cookie and reloads the page. 
*/
(function() {
    'use strict';

    angular
        .module('assetbuilder.survey')
        .directive('clearSurveyCookie', clearSurveyCookie);

   clearSurveyCookie.$inject = ['surveyService', '$window', 'common'];

    /* @ngInject */
    function clearSurveyCookie (surveyService, $window, common) {
        // Usage:
        // <a clear-survey-cookie></a>
        var directive = {
            link: link,
            restrict: 'A',
        };
        return directive;

        function link(scope, element, attrs) {
			jq(element[0]).on('click', function (e) {
                e.preventDefault();
				surveyService.removeSurveyCookie();
                $window.location = common.portfolioUrl;	
			});    
        }
    }

    
})();