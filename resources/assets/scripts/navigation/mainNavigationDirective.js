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
            var el = document.querySelector('.main-navigation-wrapper'),
              menuButton = jq('.navigation__menu');

             /**
      		 * Fixed Navigation
      		 * Waypoints http://imakewebthings.com/waypoints/ 
      		 */
      		var sticky = new Waypoint({
      			element: el,
      			handler: function () {
              jq('body').toggleClass('nav-fixed');
      			},
      			offset:-10
      		});

      		//var mobileMenu = document.querySelector('navigation__menu');

      		//mobileMenu.addEventListener('touchend', function () {
      		//    document.querySelector('mobile-navigation-button').classList.toggle('active');
      		//    document.querySelector('main-navigation').classList.toggle('open');
            //    document.body.classList.toggle('nav-open')
      		//});

          menuButton.on('click', function (e) {
            jq('.mobile-navigation-button').toggleClass('active');
            jq('.main-navigation').toggleClass('open');
            jq('body').toggleClass('nav-open');
          });

  			}
    }


   
})();