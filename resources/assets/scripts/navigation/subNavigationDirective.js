(function() {
    'use strict';

    angular
        .module('mcdaniel.navigation')
        .directive('subNavigation', subNavigation);

    /* @ngInject */
    function subNavigation () {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: subNavigationController,
            controllerAs: 'vd',
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
            var el = element[0];
            
            /**
             * Fixed Navigation
             * Waypoints http://imakewebthings.com/waypoints/ 
             */
            var sticky = new Waypoint({
                element: el,
                handler: function () {
                    jq(el).toggleClass('fixed');
                },
                offset:105
            });
        }
    }

    /* @ngInject */
    function subNavigationController () {

    }
})();