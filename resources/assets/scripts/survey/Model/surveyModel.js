(function() {
    'use strict';

    angular
        .module('assetbuilder.survey')
        .factory('surveyModel', surveyModel);

    surveyModel.$inject = ['$filter'];

    /* @ngInject */
    function surveyModel($filter) {
        var service = {
            formatSurveyData : formatSurveyData 
        };
    
        return service;

        ////////////////

        /**
         * Format the Survey Data in Arrays instead of ambigious key values
         * @param  {object} data 
         * @return {Object}      
         */
        function formatSurveyData(data) {
    			var surveyData = {
    				models: [],
    				fees: []
    			}	

    			if (data.Model1 != undefined) {
						surveyData.models.push(data.Model1);
    			}

    			if (data.Model2 != undefined) {
    				surveyData.models.push(data.Model2);
    			}

    			if (data.Model3 != undefined) {
    				surveyData.models.push(data.Model3);
    			}

    			if (data.Fees1 != undefined) {
    				surveyData.fees.push(data.Fees1);
    			}

    			if (data.Fees2 != undefined) {
    				surveyData.fees.push(data.Fees2);
    			}

    			if (data.Fees3 != undefined) {
    				surveyData.fees.push(data.Fees3);
    			}

    			return surveyData;

        }
    }
})();