(function() {
    'use strict';

    angular
        .module('global.modal')
        .service('modalService', modalService);

    modalService.$inject = ['$rootScope', '$q'];

    /* @ngInject */
    function modalService($rootScope, $q) {
        var modal = {
					deferred: null,
					params: null
				};

				this.open = open;
				this.params = params;
				this.proceedTo = proceedTo;
				this.reject = reject;
				this.resolve = resolve;

        ////////////////

        function open( type, params, pipeResponse ) {
					var previousDeferred = modal.deferred;
					
					modal.deferred = $q.defer();
					modal.params = params;

					if ( previousDeferred && pipeResponse ) {
						modal.deferred.promise.then( previousDeferred.resolve, previousDeferred.reject );
					} else if ( previousDeferred ) {
						previousDeferred.reject();
					}

					$rootScope.$emit( "modalService.open", type );
					return modal.deferred.promise;
				}


				
				function params() {
					return ( modal.params || {} );
				}


				function proceedTo( type, params ) {
					return open(type, params, true) ;
				}


				
				function reject( reason ) {
					if ( ! modal.deferred ) {return; }
					modal.deferred.reject( reason );
					modal.deferred = modal.params = null;

					$rootScope.$emit( "modalService.close" );
				}


				
				function resolve( response ) {
					if (!modal.deferred) {return; }
					
					modal.deferred.resolve(response);
					modal.deferred = modal.params = null;

					$rootScope.$emit( "modalService.close" );
				}

    }
})();





