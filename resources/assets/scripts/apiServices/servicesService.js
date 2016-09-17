(function() {
    'use strict';

    angular
        .module('mcdaniel.api')
        .factory('servicesService', servicesService);

     servicesService.$inject = ['$http', 'common', 'errors', '$location'];

    /* @ngInject */
    function servicesService($http, common,  errors, $location) {
        var apiUrl = '/assets/data/services.json';
        var serviceCode = null;
        
        var service = {
            getServices : getServices,
            getServiceCategory  : getServiceCategory,
            getService : getService,
            clearServiceFromURL: clearServiceFromURL
        };


        return service;

        ////////////////

        function getServices() {
            return $http.get(apiUrl)    
                .then(servicesComplete)
                .catch(function (message) {
                    errors.catcher('Cannot Download Services right now.  Please contact us')(message);
                });

                function servicesComplete(data, status, headers, config) {
                    return data.data;
                }  
        }

        /**
         * Get all Services under type
         * @param  {string} category 
         * @return {object}          
         */
        function getServiceCategory(category) {
            return getServices().then(function (data) {
                var array = [];
                switch(category) {
                    case 'weight' :
                        return removeAllService(data.services.weight);
                    case 'sports' :
                        return removeAllService(data.services.sports);
                    case 'maternal' :
                        return removeAllService(data.services.maternal);
                    case "metabolic" : 
                        return removeAllService(data.services.metabolic);
                    case "sustain" : 
                        return removeAllService(data.services.sustain);
                    case "corporate" :
                        return removeAllService(data.services.corporate);
                }

                return array;
           })
        }


        /**
         * Remove the All Services Services from the Data
         * @param  {array} array 
         * @return {aray}       
         */
        function removeAllService(array) {
            var data = [];
            array.forEach(function (object) {
                if (object.code !== null) {
                    data.push(object);
                }
            })
            return data;
        }

        /**
         * Get a Specific Service inside a category
         * @param  {string} category 
         * @param  {string} code     
         * @return {array}          
         */
        function getService(category, code) {
            serviceCode = code;
            
            return getServiceCategory(category).then(function (data) {
                return data.filter(filterCode);
            })
        }

        /**
         * Filter the Object Array based on the code of the service (uses polyfill below)
         * @param  {object} object 
         * @param  {string} code   
         * @return {object}        
         */
        function filterCode(object) {
            if (object.code === serviceCode) {
                return object;
            } else {
                return false;
            }
        }

        /**
         * Check the URL and clear the category if needed
         * @param  {object} service 
         * @return {object}         
         */
        function clearServiceFromURL(service) {
            var path = $location.absUrl().split('/')[4]
            var corporateArray = ['corporate', 'sustain'];
            var category = null;

            /** Reset Weight */
            if (path === 'weight-loss' && (service.category !== "weight" || service.category === null )) {
                category = "weight";
            } 
            
            /** Rest Corporate Wellness */
            if (path === 'corporate-wellness'  && (corporateArray.indexOf(service.category) === -1 || service.category === null)) {
                category = "corporate";
            } 

            /** Reset Matenal */
            if (path === 'maternal-nutrition' && (service.category !== 'maternal' || service.category === null))  {
                category = "maternal";
            } 

            /** Reset Sports Nutition */
            if (path === 'sports-nutrition' && (service.category !== 'sports' || service.category === null))  {
                  category = "sports";
            }     

            /** Reset RMR Testing */
            if (path === 'rmr-testing' && (service.category !== 'metabolic' || service.category === null))  {
                category = "rmr";
            } 

            
            return service =  {
              category: (category === null) ? service.category : category,
              code: service.code
            }
        }



        /*
        |--------------------------------------------------------------------------
        | PolyFill
        |--------------------------------------------------------------------------
        |
        | Adding a filter Polyfill since this is ES5
        |
        */
       
       if (!Array.prototype.filter) {
          Array.prototype.filter = function(fun/*, thisArg */) {
            'use strict';

            if (this === void 0 || this === null) {
              throw new TypeError();
            }

            var t = Object(this);
            var len = t.length >>> 0;
            if (typeof fun !== 'function') {
              throw new TypeError();
            }

            var res = [];
            var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
            for (var i = 0; i < len; i++) {
              if (i in t) {
                var val = t[i];

                // NOTE: Technically this should Object.defineProperty at
                //       the next index, as push can be affected by
                //       properties on Object.prototype and Array.prototype.
                //       But that method's new, and collisions should be
                //       rare, so use the more-compatible alternative.
                if (fun.call(thisArg, val, i, t)) {
                  res.push(val);
                }
              }
            }

            return res;
          };
        }



    }
})();