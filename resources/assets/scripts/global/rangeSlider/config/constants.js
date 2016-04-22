/*
|--------------------------------------------------------------------------
| Range Slider Constants 
|--------------------------------------------------------------------------
|
| Replaces Scope options and sets default when options are null
|
*/
(function(){
  'use strict';
  angular
    .module('global.rangeslider')
    .constant('sliderConstants', {
      SLIDER: {
        settings: {
          from: 1,
          to: 40,
          step: 1,
          smooth: true,
          limits: false,
          round: false,	
          value: "3",
          dimension: "",
          vertical: false,
          calculate: false,
          onstatechange: false,
          callback: false,
          realtime: false
        },
        className: "jslider",
        selector: ".jslider-",
        css: {
          visible : { visibility: "visible" },
          hidden : { visibility: "hidden" }
        }
      },
      EVENTS: {
        
      }
  });

}());