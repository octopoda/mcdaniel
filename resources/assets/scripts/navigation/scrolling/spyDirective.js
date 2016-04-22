(function() {
    'use strict';

    angular
        .module('mcdaniel.navigation')
        .directive('spy', spy);

    /* @ngInject */
    function spy () {
        // Usage:
        // <a spy="id"></a>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
            require: "^scrollSpy",
        };
        return directive;

        function link(scope, element, attrs, scrollSpy) {
    		
            /**
    		 * Add Spy Attribute to the Scroll Spy Directive Watch List
    		 * @return {object}
    		 */
    		return scrollSpy.addSpy({
    			id: attrs.spy,
    			"in": function () {
    				return element.addClass('active');
    			},
    			out: function () {
    				return element.removeClass('active');
    			}
            });
		}
    }

})();