(function() {
    'use strict';

    angular
        .module('mcdaniel.navigation')
        .directive('mainNavigation', mainNavigation);

    mainNavigation.$inject = ['$document'];

    /* @ngInject */
    function mainNavigation ($document) {
        // Usage:
        // <div class="navigation" main-navigation></div>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
          var el = element[0],
              menuButton = jq('.mobile-navigation-button');

          
          /**
      		 * Fixed Navigation
      		 * Waypoints http://imakewebthings.com/waypoints/ 
      		 */
      		var sticky = new Waypoint({
      			element: el,
      			handler: function () {
              jq('body').toggleClass('nav-fixed');
      			},
      			offset: -100
      		});

      		menuButton.on('click', function (e) {
            jq('.mobile-navigation-button').toggleClass('active');
            jq('.navigation').toggleClass('open');
            jq('body').toggleClass('nav-open');
          });

  			}
    }


   
})();