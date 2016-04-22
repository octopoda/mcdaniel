    /*
|--------------------------------------------------------------------------
| Line Chart Directive
|--------------------------------------------------------------------------
|
| Draws the Line Chart for the Expected Returns
| Get Data from SurveyService
|
*/

		 	
(function() {
    'use strict';

    angular
        .module('assetbuilder.survey')
        .directive('lineChart', lineChart);

    lineChart.$inject = ['ExpectedChart'];

    /* @ngInject */
    function lineChart (ExpectedChart) {
        // Usage:
        // <div line-chart></div>
        var directive = {
            bindToController: true,
            controller: lineChartController,
            controllerAs: 'vd',
            restrict: 'A',
            replace:true,
            templateUrl: '/ngViews/survey/line-chart.html',
            scope: {
                portfolioId: "=",
                returnsData: "=",
                surveyData: "="
            }
        };
        
        return directive;
    
    }


    lineChartController.$inject = ['$scope', '$element', 'errors', 'surveyService', 'ExpectedChart'];

    /* @ngInject */
    function lineChartController ($scope, $element, errors, surveyService, ExpectedChart) {
        var vd = $scope.vd;
            vd.opts = [];
            vd.returnsData;
            vd.surveyCookie;
        
        ///////////////////////////

        /**
         * Activate the Controller
         */
        function activate() {
            vd.returnsData = setupPlotData(surveyService.getSurveyCookie());
            vd.returnsData.plotData.shift();

            setupOptions();
            
            if (vd.initailized) {
                updateChart();
            } else {
                runChart();    
            }
            

        }

        /**
         * Build and Run the Chart
         * @return {D3} 
         */
        function runChart() {
            vd.chart = new ExpectedChart(vd.opts);
            vd.initailized = true;
        }

        function updateChart() {
            vd.chart.update(vd.opts);
        }



        /*
        |--------------------------------------------------------------------------
        | Setup/Parse Data Methods
        |--------------------------------------------------------------------------
        |
        */
       
       /**
        * Setup options for the line chart.
        * @return {object} 
        */
        function setupOptions() {
            vd.opts = {
                containerEl: jq($element[0]),
                data: vd.returnsData.plotData,
                duration: 1000,
                handleDuration: 3000,
                delay: 200,
                withdrawl: false,//(vd.returnsData.lastMonth == (vd.returnsData.months)) ? false : true,
                lastMonth: vd.returnsData.lastMonth,
                performance: vd.returnsData.performance
            };

            return vd.opts;
        }

        /**
         * Setup the Plot Data;
         * @param  {object - from Cookie} surveyData 
         * @return {object}
         */
        function setupPlotData(surveyData) {
            vd.returnsData = {
                plotData:  vd.returnsData.PlotPoints,
                end: vd.returnsData.EndAmount,
                add: surveyData.addMonthly,
                months: vd.returnsData.PlotPoints[vd.returnsData.PlotPoints.length-1].Month,
                lastMonth: vd.returnsData.LastMonth,
                performance: vd.returnsData.Performance
            }

            return vd.returnsData;
        }

        

        /*
        |--------------------------------------------------------------------------
        | Scope Methods
        |--------------------------------------------------------------------------
        |
        |
        */

        /**
         * Watching the returns data to activate controller
         * after the main controller has returned that data;
         */
        $scope.$watch('vd.returnsData', function () {
            if (angular.isDefined(vd.returnsData.PlotPoints)) {
                activate();
            }
        })

    }
})();