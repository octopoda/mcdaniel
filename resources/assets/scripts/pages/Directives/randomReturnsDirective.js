/*
|--------------------------------------------------------------------------
| Random Returns Directive
|--------------------------------------------------------------------------
|
| Show the Random Returns Appliaction
| Built for Annual Letter each year
| 
|
*/
(function() {
    'use strict';

    angular
        .module('assetbuilder.pages')
        .directive('randomReturns', randomReturns);

    /* @ngInject */
    function randomReturns () {
        // Usage:
        // <div random-returns></div>
        var directive = {
            bindToController: true,
            controller: RandomReturnsController,
            controllerAs: 'vm',
            templateUrl: '/ngViews/pages/random-return.html',
            restrict: 'A',
        };
        
        return directive;

        
    }

	RandomReturnsController.$inject = ['$scope', '$attrs', 'randomReturnsService'];


    /* @ngInject */
    function RandomReturnsController ($scope, $attrs, randomReturnsService) {
    	var vm = $scope.vm;
    		vm.assetClasses = {};
    		vm.years = [];
    		vm.numYears = 16;
    		vm.jsonYears = {};
    		vm.sorted = [];


    	console.dir(vm);
    	activate();
    	
    	/////////
    	

    	/**
    	 * Activate The Controller
    	 */
    	function activate() {
    		return getRandomData().then(function () {
    			setYearsToDisplay(2015);
    			enumerateJson();
    		});
    	}

/*
|--------------------------------------------------------------------------
| Data Methods
|--------------------------------------------------------------------------
|
*/

    	/**
    	 * Get the returns from the services
    	 * @return {object} 
    	 */
    	function getRandomData() {
    		return randomReturnsService.getRandomReturns().then(function (data) {
    			vm.assetClasses = data.asset_classes;
    			vm.jsonYears = data.years;
    			return vm.assetClasses;
    		});
    	}



    	/**
    	 * Build an Object based on the amount of years to display
    	 * @param {int} firstYear 
    	 * @return {object}
    	 */
    	function setYearsToDisplay(firstYear) {
    		for (var i = 0; i < vm.numYears; i++) {
    			vm.years.push(firstYear);
    			firstYear--;
    		}

    		return vm.years;
    	}


    	/**
    	 * Sort the Data for each Year
    	 * @param  {int} year 
    	 * @return {array}      
    	 */
    	function sortYear(year) {
    		var y = vm.jsonYears[year];
    		var sortable = [];

			for (var id in y) {
    			sortable.push([id, y[id]]);
    			sortable.sort(function (a,b ) { return b[1] - a[1]});
    		}

    		return sortable;
    	}


    	/**
    	 * Enumerate JSON and build out object for HTML
    	 * @return {object} 
    	 */
    	function enumerateJson() {
    		angular.forEach(vm.years, function (key, value) {
    			
    			var sorted =  {
    				"year" : key, 
    				"data" : sortYear(key)
    			}

    			vm.sorted[value] = sorted;
    		});	
    		jq('.random-returns__block').on('mouseover', function () { console.log('fuck'); })
    		return vm.sorted;
    	}


    }
})();