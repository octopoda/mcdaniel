/*
|--------------------------------------------------------------------------
| Range Slider Template
|--------------------------------------------------------------------------
|
| The template to inject in the rangeslider
| Not included in regular templates because it 
| needs be injected into sliderDirective
*/

(function() {
  'use strict';

  angular
    .module('global.rangeslider')
    .run(rangeSliderTemplate);

    rangeSliderTemplate.$inject = ['$templateCache'];

    function rangeSliderTemplate ($templateCache) {
       $templateCache.put('range-slider/range-slider.html',
        '<span ng-class="mainSliderClass" id="{{sliderTmplId}}">' +
          '<table><tr><td>' +
            '<div class="jslider-bg">' +
              '<i class="left"></i>'+
              '<i class="right"></i>'+
              '<i class="range"></i>'+
              '<i class="before"></i>'+
              '<i class="default"></i>'+
              '<i class="default"></i>'+
              '<i class="after"></i>'+          
            '</div>' +
            '<div class="jslider-pointer"></div>' +
            '<div class="jslider-pointer jslider-pointer-to"></div>' +
            '<div class="jslider-label" ng-show="options.limits"><span ng-bind="limitValue(options.from)"></span>{{options.dimension}}</div>' +
            '<div class="jslider-label jslider-label-to" ng-show="options.limits"><span ng-bind="limitValue(options.to)"></span>{{options.dimension}}</div>' +
            '<div class="jslider-value"><span></span>{{options.dimension}}</div>' +
            '<div class="jslider-value jslider-value-to"><span></span>{{options.dimension}}</div>' +
            '<div class="jslider-scale" id="{{sliderScaleDivTmplId}}"></div>' +
          '</td></tr></table>' +
        '</span>');
    }  
})();