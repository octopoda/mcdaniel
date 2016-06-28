(function() {
    'use strict';

    angular
        .module('mcdaniel.api')
        .factory('servicesService', servicesService);

     servicesService.$inject = ['$http', 'common', 'errors'];

    /* @ngInject */
    function servicesService($http, common,  errors) {
        var apiUrl = '/assets/data/services.json';
        
        var service = {
            // getAllServices : getAllServices, 
            getWeightServices : getWeightServices,
        //     // getMaternalServices : getMaternalServices
        };


        return service;

        ////////////////

        function getServices() {
            return $http.get(apiUrl)    
                .then(servicesComplete)
                .catch(function (message) {
                    errors.catcher('Cannot Download Services right now.  Please contact us')(message);
                });

                function servicesComplete(data, status, headers, config) {
                    return data;
                }  
        }

        
        function getAllServices () {
           
            // getServices.then(function (data) {
            //     return data;
            // } 
        }


        function getWeightServices() {
            return getServices.then(function (data) {
                return data.services.weight;
            });
           // getServices.then(function (data) {
           //      return data.services.weight;
           // });
        }


        // function getMaternalServices() {
        //     getServices.then(function (data) {
        //         return data.services.maternal;   
        //     })
        // }

        
        // function getSportsServices() {
        //     getServices.then(function (data) {
        //         return data.services.sports;
        //     })
        // }

        // function getCoporateServices() {
        //     getServices.then(function data () {
        //         return data.services.corporate;
        //     });
        // }
    }
})();