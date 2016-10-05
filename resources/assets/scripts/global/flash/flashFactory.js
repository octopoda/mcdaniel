(function() {
    'use strict';

    angular
        .module('global.flash')
        .factory('flash', flash);

    flash.$inject = ['$log', '$rootScope'];

    /* @ngInject */
    function flash($log, $rootScope) {
        
        var service = {
            error: error,
            info: info,
            success: success,
            warning: warning,

            log: $log.log
        };
        return service;

        ////////////////


        function error(message, data, title) {
            $log.error('Error: ' + message, data);
            $rootScope.$emit('flash.error', message, data);
        }

        function info(message, data, title) {
        	$log.info('Info: ' + message, data);
            $rootScope.$emit('flash.info', message);
        }

        function success(message, data, title) {
        	$log.info('Success: ' + message, data);
            $rootScope.$emit('flash.success', message);
        }

        function warning(message, data, title) {
        	$log.warn('Warning: ' + message, data);
            $rootScope.$emit('flash.warning', message);
        }
    }
})();