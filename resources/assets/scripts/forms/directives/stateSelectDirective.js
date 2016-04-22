/*
|--------------------------------------------------------------------------
| Build a state select box in a form
|--------------------------------------------------------------------------
|
|
*/
(function() {
    'use strict';

    angular
        .module('assetbuilder.forms')
        .directive('stateSelect', stateSelect);

    /* @ngInject */
    function stateSelect (helperService) {
        // Usage:
        // <div state-select></div>
        var directive = {
            bindToController: true,
            controller: StateSelectController,
            controllerAs: 'vd',
            link: link,
            restrict: 'A',
            replace:true,
            required: true,
            templateUrl: '/ngViews/forms/state-select.html',
            scope: {
            	name: "&",
            	selectedState: "="
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
        	
        }
    }


     /* @ngInject */
    function StateSelectController (helperService) {
      var vd = this;

       activate();
            
        /**
         * Activate the directive
         * @return {promise} 
         */
        function activate() {
          return getStates().then(function () {
            
          });
        }

        /**
         * Get the States from the Helper Service
         * @return {object} 
         */
        function getStates() {
            return helperService.getStates().then(function (data) {
                vd.states = data.States;
                return vd.states;
            });
        }
    }


})();



