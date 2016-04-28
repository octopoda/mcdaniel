/*
|--------------------------------------------------------------------------
| Article Sidebar Directive
|--------------------------------------------------------------------------
|
| Handles the searching of articles and topics
| dynamic attribute set to 1 to change out 
| articles in the background of the sidebar.
|
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('articleSidebar', articleSidebar);

    /* @ngInject */
    function articleSidebar () {
        // Usage:
        // <div article-sidebar dynamic="0||1"></div>
        var directive = {
            bindToController: true,
            controller: articleSidebarController,
            controllerAs: 'vd',
            restrict: 'A',
            templateUrl: '/ngViews/knowledge/article-sidebar.html',
            replace:true,
        };
        
        return directive;
    }

    articleSidebarController.$inject = ['$scope', '$attrs', '$rootScope', 'topicService', '$window'];

    /* @ngInject */
    function articleSidebarController ($scope, $attrs, $rootScope, topicService, $window) {
    	var vd = $scope.vd;
			vd.TopicData = [];
			vd.activeTopics = [];
			
			//Methods 
			vd.sortByTopic = sortByTopic;
			vd.isActiveTopic = isActiveTopic;
            vd.applyTopics = applyTopics;
			
            activate();

    	/////////
    	
    	function activate() {
            // topicService.removeTopics();
    		return getTopicalData().then(function () {
    		    getCookieData();
    		});
    	}

/*
|--------------------------------------------------------------------------
| Topic Data methods
|--------------------------------------------------------------------------
|
*/

    	/**
    	 * Grab the topics from the service.
    	 * @return {object} 
    	 */
    	function getTopicalData() {
    	    return topicService.getSortingData().then(function (data) {
    	       vd.TopicData = data.Sorting.topics;
                return vd.TopicData;
    		})
    	}

    	/**
    	 * Get the articleDate Cookie and split into active groups
    	 * ! TopicServivece.hasTopics is not defined because of TFS re-write. 
    	 * @return {objects} 
    	 */
    	function getCookieData() {
            //if (topicService.hasTopics()) {
            //   vd.activeTopics = topicService.getTopics(); 
            //} else {
            //   vd.activeTopics = [];
            //}
        }

/*
|--------------------------------------------------------------------------
| Sorting Methods
|--------------------------------------------------------------------------
|
*/

    	/**
    	 * Add Topic to the Cookie
    	 * @param  {string} topicName 
    	 * @return {null}
    	 */
    	function sortByTopic(topicName, event) {
            vd.activeTopics = checkSortData(topicName, vd.activeTopics, event);
    		//console.dir(vd.activeTopics);
            topicService.storeTopics(vd.activeTopics);
    	}

    	

    	
    	/**
		 * Check the Sort Data and make Appropriate actions for array and DOM
		 * @param  {string|int} sort  
		 * @param  {array} array 
		 * @param  {element} event 
		 * @return {array}       
		 */
		function checkSortData(sort, array, event) {
			var target = event.currentTarget;
			
			if (sort === "All") {
				array = [];
				clearAllTopicsInSection(target);
			} else if (checkArray(sort, array)) {
				array.splice(array.indexOf(sort), 1);
				makeTopicInactive(target);
			} else {
				array.push(sort);
				makeTopicActive(target);
			}

			return array;
		}



     
/*
|--------------------------------------------------------------------------
| DOM Methods
|--------------------------------------------------------------------------
|
*/
    	
    	/**
    	 * Make the Checkmark Visible
    	 * @param  {element} target 
    	 * @return {DOM}
    	 */
    	function makeTopicActive(target) {
    		jq(target).prev('i').addClass('fa-check');
    	}


    	/**
    	 * Make the Checkmark invisible
    	 * @param  {element} target 
    	 * @return {DOM}        
    	 */
    	function makeTopicInactive(target) {
    		jq(target).prev('i').removeClass('fa-check');	
    	}

    	
    	/**
    	 * Clear all the topic checkmarks in one section
    	 * @return {DOM} 
    	 */
    	function clearAllTopicsInSection(target) {
    		jq(target).parent('li').siblings('li').children('i').removeClass('fa-check');
    	}


    	/**
    	 * Send the topcis to the root to change the background
    	 * @return {$rootScope.$emit} 
    	 * @note only called on dynamic sidebars
    	 */
    	function sendToRoot() {
    		$rootScope.$emit('topics.changed');
    	}

        /**
         * Apply the topics by reloading the page
         * @return {$location}
         */
        function applyTopics() {
            $window.location.reload();
        }

/*
|--------------------------------------------------------------------------
| Helper Methods
|--------------------------------------------------------------------------
|
*/

    	/**
    	 * Check if the topic is active in the cookie
    	 * @param  {string} topic 
    	 * @return {boolean}       
    	 */
    	function isActiveTopic(topic) {
            if (checkArray(topic, vd.activeTopics)) {
    			return 'fa-check';
    		} else {
    			return false;
    		}
    	}

    	
        /**
    	 * Check if word is in array and return index 	
    	 * @param  {string|int} needle   
    	 * @param  {array} haystack 
    	 * @return {int}          
    	 */
    	function checkArray(needle, haystack) {
    		if (haystack.indexOf(needle) != -1) {
    			return true;
    		} else {
    			return false;
    		}
    	} 


    }
})();