/*
|--------------------------------------------------------------------------
| Survey Module Controller
|--------------------------------------------------------------------------
|  Controls the Overlay and Click buttons for Survey.
|  @note Looking for the Form.  Check out the SurveyFormDirective.js 
|  
*/

(function() {
    'use strict';

    angular
        .module('assetbuilder.survey')
        .controller('SurveyController', SurveyController);

    SurveyController.$inject = ['$scope', '$window', 'surveyService', 'common'];

    /* @ngInject */
    function SurveyController($scope, $window, surveyService, common) {
        //Vars
        var vm = this;
        vm.title = 'SurveyController';
        vm.investmentType = 'us';
        
        

        //Methods
        vm.changeInvestmentType = changeInvestmentType;
        vm.checkInvestmentType = checkInvestmentType;
        
        activate();

        ////////////////

        /**
         * Activate the Controller
         * @return {Function} 
         */
        function activate() {
            
        }

        
        /**
         * Change the investment type to expat
         * @return {none} 
         */
        function changeInvestmentType() {
            vm.investmentType = 'expat';
            vm.expat = true;
        }


        /**
         * Check the investment type and return the class name
         * @return {string} 
         */
        function checkInvestmentType() {
            if (vm.expat === true) {
                return 'expat';
            } else {
                return 'c-gray-lightest-background';
            }
        }



/*
|--------------------------------------------------------------------------
| Helpers
|--------------------------------------------------------------------------
|
|
*/
       


        
    }
})();