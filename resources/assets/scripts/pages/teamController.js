/*
|--------------------------------------------------------------------------
| Team Page Controller
|--------------------------------------------------------------------------
|
| Controller to operate the team page.
| Kennon will be featured if no path has been detected.
|
*/

(function() {
    'use strict';

    angular
        .module('assetbuilder.pages')
        .controller('teamController', teamController);


    teamController.$inject = ['$scope', 'teamService', '$filter', '$location', 'common'];

    /* @ngInject */
    function teamController($scope, teamService, $filter, $location, common) {
        var vm = this;
		vm.title = 'teamController';
        vm.Team = [];
		vm.featured = 0;
        vm.Featured = [];
        vm.urlPath;
        
        //Methods
        vm.isFeatured = isFeatured;
        vm.changeFeatured = changeFeatured;

        activate();

        ////////////////
        
        /*
        |--------------------------------------------------------------------------
        | Data Methods
        |--------------------------------------------------------------------------
        */

        /** Activate Controller */
        function activate() {
            return getTeamData().then(function () {
        		makeLinks();
                if (checkUrl()) {
                  var name = linkToName(vm.urlPath);
                  vm.Featured = findFeaturedByName(vm.Team, name);
                } else {
                  vm.Featured = setFeatured(vm.Team, vm.featured);
                }
                
            });
        }


        /**
         * Check the URL and return set the final string
         * @return {boolean} 
         */
        function checkUrl() {
            var url =  $location.absUrl();
            var parts = url.toString().split('/');
            
            if (angular.isDefined(parts[4])) {
                vm.urlPath = parts[4];
                return true;
            }

            return false;
        }

        
        /**
         * Get the Team Data from the TeamService in API 
         * @return {Object} 
         */
        function getTeamData() {
        	return teamService.getTeamInformation().then(function (data) {
        		vm.Team = data.team;
                return vm.Team;
        	})
        }

        /*
        |--------------------------------------------------------------------------
        | Setting Featured Methods
        |--------------------------------------------------------------------------
        */
        
        /**
         * Filter Data to show only featured person
         * @param {object} data 
         * @param {int} id
         */
        function setFeatured(data, team_name) {
        	var featuredArray  = $filter('filter')(data, team_name);
            return featuredArray[0];
        }


        /**
         * Change the Featured Value
         * @param  {int} team_id 
         * @return {$scope.$apply function}         
         */
        function changeFeatured(team_name) {
            vm.Featured = findFeaturedByName(vm.Team, team_name);
            scrollTop();
        }

        /**
         * Check if small team member matches featured team member
         * @param  {int}  team_id 
         * @return {string}         
         */
        function isFeatured(team_id) {
            return (team_id === vm.Featured.id) ? "featured" : '';
        }

        /**
         * Find the featured team member by link name
         * @param  {object} data       
         * @param  {string} memberName 
         * @return {int}            
         */
        function findFeaturedByName(data, memberName) {
           for (var i =0; i < data.length; i++) {
                if (data[i].name === memberName) {
                    break;
                }
            }

            return data[i];
        }

        /*
        |--------------------------------------------------------------------------
        | Dom Methods
        |--------------------------------------------------------------------------
        */

        /**
         * Scroll Back to the Top
         * @return {DOM} 
         */
        function scrollTop() {
            jq('html, body').animate({
                scrollTop: 0
            }, 500);
        }


      

        /*
        |--------------------------------------------------------------------------
        | Helper Methods
        |--------------------------------------------------------------------------
        */

        /**
         * Make links out of names
         * @return {object}
         */
        function makeLinks() {
            for(var i = 0; i < vm.Team.length; i++) {
                var parts = vm.Team[i].name.split(' ');
                for (var j = 0; j < parts.length; j++) {
                    parts[j] = parts[j].toLowerCase();
                }
                vm.Team[i].link = parts.join('-');
            }

            return vm.Team;
        }


        /**
         * Turn the Links back to names
         * @param  {string} memberName 
         * @return {[type]}            [description]
         */
        function linkToName(memberName) {
            var name = memberName.replace(/-/g, ' ');
            name = common.toTitleCase(name);
            return name;
        }

        
      

    }
})();