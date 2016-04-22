(function() {
    'use strict';

    angular
        .module('global.errors')
        .provider('errorHandler', exceptionHandlerProvider)
        .config(config);

    
    /**
     * Must Configure the exception handling
     */
     function exceptionHandlerProvider() {
        /* jshint validthis:true */
        this.config = {
            appErrorPrefix: undefined
        };

        this.configure = function (appErrorPrefix) {
            this.config.appErrorPrefix = appErrorPrefix;
        };

        this.$get = function() {
            return {config: this.config};
        };
    }

    config.$inject = ['$provide'];

	/**
     * Configure by setting an optional string value for appErrorPrefix
     * @param  {object} $provide 
     * @ngInject
     */
    function config($provide) {
        $provide.decorator('$exceptionHandler', extendExceptionHandler);
    }


    extendExceptionHandler.$inject = ['$delegate', 'errorHandler'];

    /**
     * Extend the $exceptionHandler servie to also display our Flash
     * @param  {Object} $delegate        
     * @param  {Object} exceptionHandler 
     * @param  {Object} flash            
     * @return {function} the decorated $exceptionHandler service
     */
     function extendExceptionHandler($delegate, errorHandler) {
        return function(exception, cause) {
            var appErrorPrefix = errorHandler.config.appErrorPrefix || '';
            var errorData = {exception: exception, cause: cause};
            exception.message = appErrorPrefix + exception.message;
            $delegate(exception, cause);
           // flash.error(exception.message, errorData);
        };
    }

   
})();