/// <reference path="navigationURIWatcherDirective.js" />
/* 
|-----------------------------------------------------------------
| Navigation URI Watcher Directive
|-----------------------------------------------------------------
|
| Watches the uri and scroll the page if it detects a hashbang
|
*/

(function () {
    'use strict';

    angular
        .module('mcdaniel.navigation')
        .directive('navigationUriWatcher', navigationUriWatcher);

    navigationUriWatcher.$inject = ['$location'];

    function navigationUriWatcher($location) {
        //Usage
        // <div navigation-Uri-Watcher
        var directive = {
            link: link,
            restrict: "A"
        }

        return directive;

        function link(scope, element, attr) {
           var vm = scope;
           vm.hashBang = null;

           if (checkLink()) {
                scrollToElement(vm.hashBang, 110, 300);
            } else {
                return false;
            }

            function checkLink() {
                var url = $location.absUrl();
                var parts = url.toString().split('#');

                if (parts.length > 1) {
                    var getHashbang = parts[1].toString().split('/');
                    vm.hashBang = getHashbang[1];
                    return true;
                } else {
                    return false;
                }
            }


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