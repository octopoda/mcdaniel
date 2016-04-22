/*
|--------------------------------------------------------------------------
| Google Analytics Click Events Directive
|--------------------------------------------------------------------------
|
|  Will registerd a click event with Google Analytics
|  @note universal Analytics variable _ga
|  @category - category of event
|  @action = action the user is performing
|  @name = name of the click event in Google Analytics.
|  @value = Value you place for click
*/
(function() {
    'use strict';

    angular
        .module('mcdaniel.shared')
        .directive('googleClick', googleClick);

    /* @ngInject */
    function googleClick () {
        // Usage:
        // <div google-click category="" action=""  name=""></div>
        // Example
        // <div google-click category="survey" action="open-survey" name="homepage-open-survey" value=""></div>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	category: '@',
            	action: '@',
            	name: '@',
            	value: '@'
            }
        };
        return directive;

        function link(scope, element, attrs) {
        	element.on('click', function () {
        		_ga('send', 'event', scope.category, scope.action, scope.name, scope.value);
        	});
        }
    }

  
})();