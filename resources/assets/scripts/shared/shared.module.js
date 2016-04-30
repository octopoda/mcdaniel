/**
 * All Shared Modules inserted here. 
 *   
 * 
 */

/*
|--------------------------------------------------------------------------
| All Share Modules For AB
|--------------------------------------------------------------------------
|
| Globals are site wide modules that are no specific
| to AssetBuilder Functionality. Angular Modules called first. Third party angular components called last. 
| 
|
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.shared', [
        	/** Angular  */
            'ngMessages',  'ngCookies', 'ngAnimate', 'ngTouch',

            /** Globals */
            'global.flash', 'global.errors', 'global.modal', 'global.share', 'global.sidemenu',  'global.loading',

            /** Third Party */
            'angular-loading-bar'
        ]);
})();