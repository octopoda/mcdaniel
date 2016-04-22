/*
|--------------------------------------------------------------------------
| Ng Repeat Render Finalizer Driective
|--------------------------------------------------------------------------
|
| Tells the parent scope that the ng-repeat has finialized
| Wrapped in timeout instead of .ready so the $apply
| will run in the digest loop. 
|
| @note only used with ng-repeat {https://docs.angularjs.org/api/ng/directive/ngRepeat}
| Example at rangeSliderLabelsDirective.js
|
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.shared')
        .directive('onFinishRender', onFinishRender);

    /* @ngInject */
    function onFinishRender () {
        // Usage:
        // <div ng-repeat="" on-finish-render="callbackFunction"></div>
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
			if (scope.$last === true) {
                scope.$evalAsync(attrs.onFinishRender);
			}
        }
    }



})();