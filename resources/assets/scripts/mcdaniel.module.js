
/** NoConflict Mode in JQuery */
var jq = $.noConflict(); 


(function() {
    'use strict';

    /** Build Our Applications - Vroom Vroom  Lets Go Speedracer!  */
    angular
        .module('mcdaniel', [
            //All Share Modules;
            'mcdaniel.shared',

            //Larger AB Specific Modules
            'mcdaniel.api', 
            'mcdaniel.navigation',
            'mcdaniel.blog',
            'mcdaniel.pages',
            'mcdaniel.faq',
            'mcdaniel.forms',
            'mcdaniel.getstarted',
            'mcdaniel.templates'
        ]);
})();