(function() {
    'use strict';

    angular
        .module('assetbuilder.survey')
        .controller('LineController', LineController);

    LineController.$inject = ['$scope', 'surveyService', 'surveyUtilities'];

    /* @ngInject */
    function LineController($scope, surveyService, surveyUtilities) {
        var vm = this;
        vm.title = 'LineController';
        vm.Data = [];
        vm.returnsData = [];
        vm.portfolioId = [45, 46, 47];
        vm.End;
        vm.Add; 
        vm.Years;
        vm.primed = true;
        vm.Plots = false;

        activate();

        ////////////////

        /**
         * Activate the Controller
         * @return {} [description]
         */
        function activate() {
        	return getExpectedReturns().then(function () {
            if (angular.isUndefined(vm.Data.PlotPoints)) { return; }
        		vm.Plots = Math.ceil(vm.Data.PlotPoints.length/2);
        		setupPlotData();
            setupDisplayData();
        	});
        }

        /**
      	 * Get Expected Returns
      	 * @return {object} 
      	 */
      	function getExpectedReturns() {
      		return surveyService.getExpectedReturns(vm.portfolioId[0]).then(function (data) {
      			vm.Data = data;
      			vm.Data.SurveyData = surveyService.getSurveyCookie();
            return vm.Data;
          });
      	}


        /**
         * Setup the Date to go to the line chart directive
         * @return {object} 
         */
      	
        function setupPlotData() {
          vm.returnsData = {
            plotData: vm.Data.PlotPoints, 
            end: vm.Data.EndAmount,
            add: vm.Data.SurveyData.addMonthly,
            years: vm.Data.PlotPoints[vm.Data.PlotPoints.length-1].Year,
            lastYear: vm.Data.LastYear,
            performance: vm.Data.Performance
          };
        
          return vm.returnsData;
      	}


        /**
         * Setup the Display Data above the chart
         */
        function setupDisplayData() {
          var w = (vm.returnsData.add < 0) ? 'withdrawn' : 'added'

          vm.Years = vm.returnsData.years;
          vm.Add = surveyUtilities.printCurrency(vm.returnsData.add) + ' ' + w;
          vm.portfolioTitle;
        }

        
        /*
        |--------------------------------------------------------------------------
        | Scope Methods
        |--------------------------------------------------------------------------
        */

        /**
         * Watch Plots and Make Changes
         * @param  {vm.Plots ) 
         */
      	$scope.$watch('vm.Plots', function () {
            if (vm.Plots === undefined) return;
          	vm.returnsData = vm.Data.PlotPoints;    
        }, true)
    }
})();