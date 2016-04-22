/*
|--------------------------------------------------------------------------
| Utility Factory for Range Slider
|--------------------------------------------------------------------------
|
| Needs to be moved into shared/common.hs
|
*/

(function() {
    'use strict';

    angular
        .module('global.rangeslider')
        .factory('sliderUtils', sliderUtils);

    sliderUtils.$inject = ['$window'];

    /* @ngInject */
    function sliderUtils($window) {
        var service = {
            offset: offset,
            browser : browser
        };
        
        return service;

        ////////////////

        /**
         * Return offset of element
         * @note should be replaced with JQuery
         * @param  {dom} element 
         * @return {offset.left, offset.top}         
         */
        function offset(element) {
          var rawDom = element[0]; 
          var _x = 0; 
          var _y = 0; 
          var body = document.documentElement || document.body; 
          var scrollX = window.pageXOffset || body.scrollLeft; 
          var scrollY = window.pageYOffset || body.scrollTop; 
          _x = rawDom.getBoundingClientRect().left + scrollX; 
          _y = rawDom.getBoundingClientRect().top + scrollY; 
          return { left: _x, top:_y };
        }

        /**
         * Browser Detection
         * @note angularAwesomeSlider author daul not finished yet
         * @return {string} 
         */
        function browser() {
          var userAgent = $window.navigator.userAgent;        
          var browsers = {mozilla: /mozilla/i, chrome: /chrome/i, safari: /safari/i, firefox: /firefox/i, ie: /internet explorer/i};
          for(var key in browsers) {
            if (browsers[key].test(userAgent)) {
              return key;
            }
          }
          return 'unknown';
        }
    }
})();