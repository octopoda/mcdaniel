(function() {
    'use strict';

    angular
        .module('mcdaniel.shared')
        .factory('common', common);

    common.$inject = ['$location', '$q', '$rootScope', '$timeout', 'flash'];

    /* @ngInject */
    function common($location, $q, $rootScope, $timeout, flash) {
        var dev = true;
        var testing = true;


        var service = {
            $broadcast: $broadcast,
            $q: $q,
            $timeout: $timeout,

            //Setup Helpers Here
            isTesting : isTesting(),
            parseDate: parseDate,
            flash : flash,
            apiUrl: apiUrl(),
            portfolioUrl : portfolioUrl(),
            isNumber: isNumber,
            addCommas: addCommas,
            removeCommas: removeCommas,
            addZeroes: addZeroes,
            toTitleCase : toTitleCase,
            scrollToElement : scrollToElement,
            debounce: debounce,
            setupOptimizely: setupOptimizely,
            isEmpty: isEmpty
        };
        
        return service;

        ////////////////
        
        function isTesting() {
            if (testing) {
                console.warn('Test Mode.  Please Turn off in common.js');    
            }
            return testing;
        }

        /**
         * Wath the broadcast or bubbling for communication
         * @return {$broadcast} 
         */
        function $broadcast() {
        	return $rootScope.$broadcast.apply($rootScope, arguments);
        };


        /**
         * Set the API URL
         * @return {string} 
         */
        function apiUrl() {
            if (dev)
                //return 'https://192.168.0.111:3000/api/v1.0/';
                return '/api/v1';
              
        	
            return '/api/v1';
        };


        function portfolioUrl() {
            if (dev) 
                return 'our-portfolios.php';
            
            return 'our-model-portfolios';
        };


        /**
         * Return Positive or Negative Number
         * @param  {int}  val 
         * @return {Boolean}     
         */
        function isNumber(value) {
            var reg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/;
            return reg.test(value);
        };


        /**
         * Parse the JSON Date format that .Net Returns
         * @param  {string} jsonDate 
         * @return {string}          
         */
        function parseDate(jsonDate) {
        	var d =  new Date(parseInt(jsonDate.replace(/\/Date\((\d+)\)\//gi, "$1"))); 
			return d.toUTCString();
        };

        /**
         * Add Commas to a number
         * @param {int} num 
         * @return {string}
         */
        function addCommas(num) {
            if (!num) return num;
            var parts = num.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        };

        /**
         * Remove Commas from a string
         * @param  {string} str
         * @return {int}        
         */
        function removeCommas(str) {
            if (!str) return str;
            var parts = str.toString().split(".");
            parts[0] = parts[0].replace(/,/g, '');
            return parseFloat(parts[0]);
        };

        /**
         * Add Zeros to the Number to make it a price.
         * @param {int/string} num 
         */
        function addZeroes( num ) {
           // Cast as number
           var num = Number(num);
           // If not a number, return 0
           
           if (isNaN(num)) {
                return 0;
           }
           // If there is no decimal, or the decimal is less than 2 digits, toFixed
           if (String(num).split(".").length < 2 || String(num).split(".")[1].length<=2 ){
               num = num.toFixed(2);
           }
           
           // Return the number
           return num;
        }

        /**
         * Turn String to Title Case
         * @param  {string} str 
         * @return {string}     
         */
        function toTitleCase(str) {
            return str.replace(/\w\S*/g, function(txt){
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        };


        /** 
         * Scroll to the Anchor
         * @param  {string} target   id of anchor
         * @param  {int} offset      navigation height
         * @param  {int} duration    in ms
         * @return {DOM}          
         */
        function scrollToElement(target, offset, duration) {
            
            var pixel = jq('#'+target).offset().top + offset;
            
            /** @note use body and html for safari */
            jq('html, body').animate({
                scrollTop: pixel
            }, duration);

            return;
        }

        
        /**
         * Debounce Function to Limit function calls 
         * @param  {function} func  -functon call
         * @param  {int} wait       -time to wait
         * @param  {flag} immediate -override
         * @return {callback} 
         */
        function debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        };



        /**
         * Run Optimizley Manual Acitivation for Experiements
         * @param {int} experiment Id
         */
        function setupOptimizely(id) {
            window.optimizely.push(["activate", id]);
        }


        /**
         * Speed up calls to hasOwnProperty
         * @type {Boolean}
         */
        var hasOwnProperty = Object.prototype.hasOwnProperty;

        /**
         * Check to see if many types of objects are emoty
         * @param  {array, object}   object
         * @return {Boolean}        
         */
        function isEmpty(object) {
            // null and undefined are "empty"
            if (object == null) return true;

            // Assume if it has a length property with a non-zero value
            // that that property is correct.
            if (object.length > 0)    return false;
            if (object.length === 0)  return true;

            // Otherwise, does it have any properties of its own?
            // Note that this doesn't handle
            // toString and valueOf enumeration bugs in IE < 9
            for (var key in object) {
                if (hasOwnProperty.call(object, key)) return false;
            }

            return true;
        }

    }
})();