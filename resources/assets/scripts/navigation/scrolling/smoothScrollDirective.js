(function() {
    'use strict';

    angular
        .module('mcdaniel.navigation')
        .directive('smoothScroll', smoothScroll);

    smoothScroll.$inject = ['$window', 'common'];
    
    /* @ngInject */
    function smoothScroll ($window, common) {
        // Usage:
        //	<a smooth-scroll></a>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
            var vm = scope;
            vm.hashbang = null;

            var _duration = 300,
                _offset = 110;

            /** Bind to Click  */
            jq(element).on('click', function () {
                var id = attrs.spy;
                scrollToElement(id, _offset, _duration);
            });

          
            /** 
             * Scroll to the Anchor
             * @param  {string} target   id of anchor
             * @param  {int} offset      navigation height
             * @param  {int} duration    in ms
             * @return {DOM}          
             */
            function scrollToElement(target, offset, duration) {
              
                var pixel = jq('#' + target).offset().top - offset;
                
                /** @note use body and html for safari */
                jq('html, body').animate({
                    scrollTop: pixel
                }, duration);

                return;
            }


         
        }
    }

})();