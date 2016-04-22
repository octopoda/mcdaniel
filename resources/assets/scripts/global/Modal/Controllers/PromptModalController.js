(function() {
    'use strict';

    angular
        .module('global.modal')
        .controller('PromptModalController', PromptModalController);

    PromptModalController.$inject = ['$scope', 'modalService'];

    /* @ngInject */
    function PromptModalController($scope, modalService) {
        var vm = this;
        vm.title = 'PromptModalController';

				vm.message = ( modalService.params().message || "Give me." );
				vm.form = {
					input: ( modalService.params().placeholder || "" )
				};

				vm.errorMessage = null;
				vm.cancel = modalService.reject;

				$scope.submit = function() {
					if (!vm.form.input) { 
						return $scope.errorMessage = "Please provide something!"; 
					}
					modalService.resolve($scope.form.input);
				};

    }
})();