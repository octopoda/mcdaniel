(function() {
    'use strict';

    angular
        .module('mcdaniel.shared')
        .directive('open', open);

    /* @ngInject */
    function open () {
        // Usage:
        //  <div slide-down target-id="{{ target id attribute }}"></div>
        
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	targetId: "@"
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
        	var target = jq('#' + scope.targetId);

        	jq(element).on('click', function () {
        		target.toggleClass('open');
            });	
        
        }
    }

    
})();