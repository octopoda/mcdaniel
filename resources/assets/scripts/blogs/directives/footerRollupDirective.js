(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('footerRollup', footerRollup);

    /* @ngInject */
    function footerRollup () {
        // Usage:
        // <div footer-rollup></div>
        var directive = {
            bindToController: true,
            controller: FooterRollupController,
            controllerAs: 'vd',
            link: link,
            restrict: 'A',
            replace:true,
            templateUrl: '/templates/blog/footer-rollup.html',
        };
        
        return directive;

        function link(scope, element, attrs) {
        	
        	var el = jq('.article__footer')
          
					
					/**
      		 * Fix to bottom of page
      		 * Waypoints http://imakewebthings.com/waypoints/ 
      		 */
      		var sticky = new Waypoint({
      			element: document.querySelector('body'),
      			handler: function () {
              if (el.hasClass('off')) return;
      				el.toggleClass('open');
      			},
      			offset:-200
      		});

      		/**
           * Removes when footer comes onto the page.
           * Waypoints http://imakewebthings.com/waypoints/ 
           */
          sticky = new Waypoint({
      			element: document.querySelector('.site-footer'),
      			handler: function () {
              if (el.hasClass('off')) return;
      				el.toggleClass('open');
      			},
      			offset:'100%'
      		});


          jq('.article__footer--close').on('click', function (e) {
            e.preventDefault();
            el.removeClass('open').addClass('off');
          });


        }
    }

    FooterRollupController.$inject = ['$scope', '$element', '$attrs', 'mailChimpService'];

    function FooterRollupController($scope, $element, $attrs, mailChimpService) {
        var vd = $scope.vd;

        vd.formData = {
          email : '',
        }

        vd.loading = false;
        vd.success = false;
        vd.message = false;

        vd.submitMailChimp = submitMailChimp;


        ///////
        

        function submitMailChimp() {
          vd.loading = 'sending',

          mailChimpService.sendToMailChimp(vd.formData)
            .then(function (data) {
              vd.loading = false;
              vd.success = true;
              vd.message = data;

              setTimeout(function () {
                jq('.article__footer').removeClass('open');
              }, 3000)
              
            })
        }


        function subscribed(data) {
          //Add to 3 month cookie and leave them alone
        }
        
    }

    
})();