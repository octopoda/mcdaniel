/*
|--------------------------------------------------------------------------
| Service for AssetBuilder Team Members
|--------------------------------------------------------------------------
|
| @note stored in JSON in the /json folder for now.
|
*/

(function() {
    'use strict';

    angular
        .module('assetbuilder.api')
        .factory('teamService', teamService);

    teamService.$inject = ['$http', 'errors'];

    /* @ngInject */
    function teamService($http, errors) {
        var jsonUrl = '/json/team.json';

        var service = {
            getTeamInformation: getTeamInformation
        };
    
        return service;

        ////////////////

        function getTeamInformation() {
    			return $http.get(jsonUrl)
    				.then(teamComplete)
    				.catch(function (message) {
    					errors.catcher('Sorry, we cannot get the team information at this time.')(message);
    				});

    				function teamComplete(data, status, headers, config) {
    					return data.data;
    				}

        }
    }
})();