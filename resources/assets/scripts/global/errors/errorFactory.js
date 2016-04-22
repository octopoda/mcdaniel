(function() {
    'use strict';

    angular
        .module('global.errors')
        .factory('errors', errors);

    errors.$inject = ['flash'];

    /* @ngInject */
    function errors(flash) {
        var errorReason = null;

        var service = {
            catcher: catcher,
            getReason: getReason
        };
        
        return service;

        ////////////////

        /**
         * Catch the Error and Display a Error Flash
         * @param {string} Message to display
         * @param {string} reason for Console.
         */
        function catcher(message) {
           return function (reason) {
                reason.insertedObject = (reason.insertedObject == null) ? 'none' : reason.insertedObject;
                errorReason = reason;
        		flash.error(message, reason);
        	}
        }

        /**
         * Get reason for mailing
         * @return {string} 
         */
        function getReason() {
            return errorReason;
        }
    }
})();