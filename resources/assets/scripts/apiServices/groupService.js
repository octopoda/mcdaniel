(function() {
    'use strict';

    angular
        .module('assetbuilder.api')
        .factory('groupService', groupService);

    groupService.$inject = ['$http', 'common', 'errors'];

    /* @ngInject */
    function groupService($http, common, errors) {
        var apiUrl = common.apiUrl;

        var service = {
            getGroupInformation: getGroupInformation
        };
        return service;

        ////////////////

        /**
         * Get the Information for All Groups
         * @return {object} 
         */
        function getGroupInformation() {
        	return $http.get(apiUrl + "/Groups?showAB=False")
        		.then(groupInformationComplete)
        		.catch(function (message) {
        			errors.catcher('Sorry, we cannot get the group information for the portfolios at this time.')(message);
        		});
	
				function groupInformationComplete(data, status, header, config) {
					return data.data.Groups;
				}
        }


        
    }
})();