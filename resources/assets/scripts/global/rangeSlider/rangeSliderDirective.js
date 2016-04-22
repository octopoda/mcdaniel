(function () {
  'use strict';

  angular
    .module('global.rangeslider')
    .directive('rangeSlider', rangeSlider);

    rangeSlider.$inject = ['$compile', '$templateCache', '$timeout', '$window', 'sliderObject']    

    /** @ngInject */
    function rangeSlider($compile, $templateCache, $timeout, $window, sliderObject) {    
      // Usage: 
      // <input range-slider type="text" ng-model="" options="">
      var directive = {
          restrict : 'A',
          require: '?ngModel',
          scope: { 
            options:'=', 
          },
          priority: 1,
          link: link
        }
       
      return directive;    

      function link (scope, element, attrs, ngModel) {

        /** No Ng Model */
        if(!ngModel) return;

        /** No Options */
        if (!scope.options)
          throw new Error('You must provide a value for "options" attribute.');

        /** Options in String from */
        if (angular.isString(scope.options)) {
          scope.options = angular.toJson(scope.options);
        }

        /** @type {String} Set up the Class  !! Lets Remove this shit !! */
        scope.mainSliderClass = 'jslider';
        
        /** @type {object} Handle Limits and visibilty */
        scope.options.limits = angular.isDefined(scope.options.limits) ? scope.options.limits : true;

        /** Get the template and compile it. */
        element.after($compile($templateCache.get('range-slider/range-slider.html'))(scope, function(clonedElement, scope) {
          scope.tmplElt = clonedElement;
        }));

        
        /** @type {Boolean} Flag to initialize only once */
        var initialized = false;

        /**
         * Initialize the Directive
         * @return {[type]} [description]
         */
        var init = function() {
          /** @type {Object} Setup Options */
          scope.from = ''+scope.options.from;
          scope.to = ''+scope.options.to;
          
          if (scope.options.calculate && typeof scope.options.calculate === 'function') {
            scope.from = scope.options.calculate(scope.from);
            scope.to = scope.options.calculate(scope.to);
          }            

          /** @type {Object} !! Remove a lot of these */
          var OPTIONS = {
            from: !scope.options.round ? parseInt(scope.options.from, 10) : parseFloat(scope.options.from),
            to: !scope.options.round ? parseInt(scope.options.to, 10) : parseFloat(scope.options.to),
            step: scope.options.step,
            smooth: scope.options.smooth,
            limits: scope.options.limits,
            round: scope.options.round || false,
            value: ngModel.$viewValue,
            dimension: "",
            scale: scope.options.scale,
            modelLabels: scope.options.modelLabels,              
            vertical: scope.options.vertical,
            css: scope.options.css,
            className: scope.options.className,
            realtime: scope.options.realtime,
            cb: forceApply,
            threshold: scope.options.threshold
          };

          OPTIONS.calculate = scope.options.calculate || undefined;
          OPTIONS.onstatechange = scope.options.onstatechange || undefined;

          /** @type {Slider} Setup the Slider Object */
          scope.slider = !scope.slider ? slidering(element, scope.tmplElt, OPTIONS) : scope.slider.init(element, scope.tmplElt, OPTIONS);

          /** Setup window listener */
          if (!initialized) {
            initListener();
          }

          /**  Setup Scale */
          var scaleDiv = scope.tmplElt.find('div')[7];
          angular.element(scaleDiv).html(scope.slider.generateScale());
          scope.slider.drawScale(scaleDiv);

          initialized = true;
       
        };

        
        /**
         * Listen for Window Reszie
         * @return {EventListener} 
         */
        function initListener() {
          angular.element($window).bind('resize', function(event) {
            scope.slider.onresize();
          });
        }

        // model -> view
        ngModel.$render = function () {
          //elm.html(ctrl.$viewValue);
          var singleValue = false;

          if (!ngModel.$viewValue && ngModel.$viewValue !== 0) {
            return;
          }

          if (typeof(ngModel.$viewValue) === 'number') {
            ngModel.$viewValue = ''+ngModel.$viewValue;
          }

          if( !ngModel.$viewValue.split(";")[1]) {
            scope.mainSliderClass += ' jslider-single';
          }

          if (scope.slider) {
            scope.slider.getPointers()[0].set(ngModel.$viewValue.split(";")[0], true);
            if (ngModel.$viewValue.split(";")[1]) {
              scope.slider.getPointers()[1].set(ngModel.$viewValue.split(";")[1], true);
            }
          }
        };

        /**
         * Forcefully run the digest loop on the callback in Options
         * @param  {ngModel} value    
         * @param  {function} released
         * @return {callabck}          
         */
        var forceApply = function(value, released) {
          if (scope.disabled) return;
          
          scope.$apply(function() {
            ngModel.$setViewValue(value);
          });
          
          if (scope.options.callback){
            scope.options.callback(value, released);
          }
        };

        /** Watch Options for Changes then rerun init.   
         * @note -Timeout set to 0 to help changes Load. 
        **/
        scope.$watch('options', function(value) {
          $timeout(function(){
            init();
          });
        }, true);

       
        
        /**
         * Setup the Model Label Array
         * @note this will change the value of a label to a string
         * @param  {array} value 
         * @return {string}       
         */
        scope.limitValue = function(value) {
          if (scope.options.modelLabels) {
            if (angular.isFunction(scope.options.modelLabels)) {
              return scope.options.modelLabels(value);
            }              
            return scope.options.modelLabels[value] !== undefined ? scope.options.modelLabels[value] : value;              
          }
          return value;
        };

        
        /**
         * Setup the Slider
         * @param  {dom} inputElement 
         * @param  {templatecache} element
         * @param  {object} settings     [OPTIONS]
         * @return {object}              
         */
        var slidering = function( inputElement, element, settings) {
          return new sliderObject(inputElement, element, settings);
        };
      }
      
    } //End RangeSlider Function

})();
