(function() {
    'use strict';

    angular
        .module('mcdaniel.pages')
        .directive('tabbedServices', tabbedServices);

    /* @ngInject */
    function tabbedServices () {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	target: "@"
            }
        };
        return directive;

        function link(scope, element, attrs) {
        	var el = jq(element);
        	var target = jq('#' + scope.target);
            var indicator = jq('.tab-indicator');


        	el.on('click', function (e) {
        		e.preventDefault();
				target.addClass('open').siblings('.m-tabbed-info').removeClass('open');
        		el.addClass('active').siblings('.active').removeClass('active');

                jq.each(indicator, function () {
                    if (jq(this).hasClass(scope.target)) {
                        jq(this).addClass('active').siblings('.active').removeClass('active')
                    }
                });
        	});
        }
    }

    
})();