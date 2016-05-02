
/** NoConflict Mode in JQuery */
var jq = $.noConflict(); 


(function() {
    'use strict';

    /** Build Our Applications - Vroom Vroom  Lets Go Speedracer!  */
    angular
        .module('mcdaniel', [
            //All Share Modules;
            'mcdaniel.shared',

            //Larger AB Specific Modules
            'mcdaniel.api', 
            'mcdaniel.navigation',
            // 'mcdaniel.survey',
            'mcdaniel.blog',
            'mcdaniel.pages',
            'mcdaniel.faq',
            'mcdaniel.forms',
            // 'mcdaniel.admin',
            'mcdaniel.templates'
        ]);
})();
(function() {
    'use strict';

    angular.module('mcdaniel.api', []);
})();
(function() {
   'use strict';

    angular.module('mcdaniel.faq', []); 

 })();
(function() {
    'use strict';

    angular.module('mcdaniel.blog', []);
})();
(function() {
    'use strict';

    angular .module('mcdaniel.forms', []); 

  })();
(function() {
    'use strict';

    angular.module('mcdaniel.navigation', []);
})();
(function() {
    'use strict';

    angular.module('mcdaniel.pages', []);
})();
/**
 * All Shared Modules inserted here. 
 *   
 * 
 */

/*
|--------------------------------------------------------------------------
| All Share Modules For AB
|--------------------------------------------------------------------------
|
| Globals are site wide modules that are no specific
| to AssetBuilder Functionality. Angular Modules called first. Third party angular components called last. 
| 
|
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.shared', [
        	/** Angular  */
            'ngMessages',  'ngCookies', 'ngAnimate', 'ngTouch',

            /** Globals */
            'global.flash', 'global.errors', 'global.modal', 'global.share', 'global.sidemenu',  'global.loading',

            /** Third Party */
            'angular-loading-bar'
        ]);
})();
/*
|--------------------------------------------------------------------------
| Module for Survey 
|--------------------------------------------------------------------------
|
| Module for all survey partials.  
| Injection in main assetbuilder module
| 
|
*/
(function() {
    'use strict';

    angular.module('assetbuilder.survey', []);
})();
(function() {
    'use strict';

    angular.module('global.modal', []); 

})();
(function() {
    'use strict';

    angular.module('global.share', []);
})();
(function() {
    'use strict';

    angular.module('global.sidemenu', []);
})();
(function() {
    'use strict';

    angular.module('global.flash', []);
})();
(function() {
    'use strict';

    angular
        .module('global.errors', []);
})();
(function() {
    'use strict';

    angular.module('global.loading', []);
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.api')
        .factory('articleService', articleService);

    articleService.$inject = ['$http', '$location', 'flash', 'common', 'errors'];

    /* @ngInject */
    function articleService($http, $location, flash, common, errors) {
        var apiUrl = common.apiUrl + '/posts';
        var defaultPageSize = 24;

        var service = {
            getArticles: getArticles,
            getPaginatedArticles: getPaginatedArticles,
            getArticlesForBlogPreview: getArticlesForBlogPreview
        };
        
        return service;

        ////////////////

        /**
         * Get Articles
         * @param {int} pgSize;
         * @return {object} 
         */
        function getArticles(pgSize) {
            var pageSize = (pgSize === null) ? defaultPageSize : pgSize;
        	
            return $http.get(apiUrl + "?pgSize=" + pageSize)
        		.then(articleComplete)
        		.catch(function (message) {
        			errors.catcher('XHR for getArticles failed')(message);
        		}) 

        		function articleComplete(data, status, header, config) {
        			return data.data;
        		}
        }

        
        /**
         * Get article in pagnation style
         * @param  {int} pageNumber 
         * @return {object}            
         */
        function getPaginatedArticles(pageNumber, pgSize) {
            var pageSize = (pgSize === null) ? defaultPageSize : pgSize;
        	
            return $http.get(apiUrl + '?pageSize=' + pageSize + '&page=' + pageNumber)
        		.then(articleComplete)
        		.catch(function (message) {
        			errors.catcher('Sorry we are not able to retrieve the articles at this time.')(message);
        		})

        		function articleComplete(data, status, header, config) {
        			return data.data;
        		}
        }


       function getArticlesForBlogPreview(number) {
            return $http.get(apiUrl + '/byNumber/' + number)
                .then(articleComplete)
                .catch(function (message) {
                    errors.catcher('Sorry we are not able to retrieve the articles at this time.')(message);
                });

                function articleComplete(data, status, headers, config) {
                    return data.data
                }
       }
    }
})();
(function() {
    'use strict';

  	var api = angular.module('mcdaniel.api');


  	var config = {
  		header: 'application/x-www-form-urlencoded;charset=utf-8',
  	}

	  api.value('config', config);
  	api.config(configure);

    configure.$inject = ['$httpProvider'];

  	/** @ngInject */
  	function configure($httpProvider) {
  		//Set heades to correct mimetype
  	    $httpProvider.defaults.headers.post['Content-Type'] = config.header;
  	    $httpProvider.defaults.cache = true;
      
      //Serialize The Data on send
      $httpProvider.defaults.transformRequest = [function(data) {
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
      }];
    }

    /**
     * Serialize the Post Object for the api application
     * @param  {object} obj 
     * @return {string}     
     */
    function param(obj) {
      var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
          
        for(name in obj) {
          value = obj[name];
            
          if(value instanceof Array) {
            for(i=0; i<value.length; ++i) {
              subValue = value[i];
              fullSubName = name + '[' + i + ']';
              innerObj = {};
              innerObj[fullSubName] = subValue;
              query += param(innerObj) + '&';
            }
          }
          else if(value instanceof Object) {
            for(subName in value) {
              subValue = value[subName];
              fullSubName = name + '[' + subName + ']';
              innerObj = {};
              innerObj[fullSubName] = subValue;
              query += param(innerObj) + '&';
            }
          }
          else if(value !== undefined && value !== null)
            query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }
          
        return query.length ? query.substr(0, query.length - 1) : query;
    }


})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.api')
        .factory('cookieService', cookieService);

    /* @ngInject */
    function cookieService($http, $location, $cookies) {
        var cookieName = 'mcdaniel-nutrition';
        var now = new Date();

        var service = {
        	haveCookie : haveCookie,
            getCookie: getCookie,
            storeCookie : storeCookie,
            removeCookie : removeCookie
        };
        
        return service;

        ////////////////

        /**
         * Check to see if there is a cookie. 
         * @return {boolean} 
         */
        function haveCookie() {
        	if ($cookies.get(cookieName) != undefined || $cookie.get(cookieName) != null) {
        		return true;
        	} else {
        		return false;
        	}	
        }


        /**
         * Get the Cookie
         * @return {object}
         */
        function getCookie() {
        	var data = $cookies.get(cookieName);

        	if (data !== undefined) {
        		return JSON.parse(data);
        	} else {
        		return false;
        	}
        }


        /**
         * Store the Cookie Information
         * @param  {object} data
         * @return {object} 
         */
        function storeCookie(data) {
           var exp = new Date(now.getFullYear(), now.getMonth()+ 12, now.getDate());
           var json = JSON.stringify(data);
           
           return $cookies.put(cookieName, json, {
             path: '/',
             expires: exp
           });
        }


        /**
         * [removeCookie description]
         * @return {[type]} [description]
         */
        function removeCookie() {
        	 var exp = new Date(now.getFullYear(), now.getMonth(), now.getDate()-1);
            return $cookies.remove(cookieName, {
                path: '/',
                expires: exp
            });
        }
    }
    cookieService.$inject = ["$http", "$location", "$cookies"];
})();
/*
|--------------------------------------------------------------------------
| Explore Service for Explore API
|--------------------------------------------------------------------------
|
| Query Options: 
| ?page= [Page Number for Pagination]
| ?pgSize= [Number of rows to pull back]
| ?srtBy= [Sorting by DATE, AUTHOR, TITLE, RANK]
| ?notBeforeMnth = int {needs to be in days}
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.api')
        .factory('exploreService', exploreService);

    exploreService.$inject = ['$http', '$location', 'flash', 'common', 'errors', '$cookieStore'];

    /* @ngInject */
    function exploreService($http, $location, flash, common, errors, $cookieStore) {
        var apiUrl = common.apiUrl + 'quickExplore/',
            topicUrl = common.apuUrl + 'sort/',
            pageSize = 5;

        var service = {
            exploreByKeyword: exploreByKeyword,
            paginateExploreKeyword: paginateExploreKeyword
        };
        
        return service;

        ////////////////
        

        /*
        |--------------------------------------------------------------------------
        | Keyword Methods
        |--------------------------------------------------------------------------
        |
        |
        */

        /**
         * Explore Service by Keyword
         * @param  {string} keyword 
         * @return {object}         
         */
        function exploreByKeyword(keyword, pgSize) {
            if (pgSize == null) { pgSize = pageSize; }	
            
            return $http.get(apiUrl + keyword + '?pageSize=' + pgSize)
        		.then(exploreComplete)
        		.catch(function (message) {
        			errors.catcher('Sorry we are not able to search our site at this time.')(message);
        		});

        		function exploreComplete(data, status, header, config) {
        			return data.data;
        		}
        }

        
        /**
         * Pagination of Explore Service
         * @param  {string} keyword 
         * @param  {int} page    
         * @return {object}         
         */
        function paginateExploreKeyword(keyword, page, pgSize) {
            if (pgSize == null) { pgSize = pageSize; }	
        	
            return $http.get(apiUrl + keyword + '?pageSize=' + pgSize + '&page=' + page)
        		.then(exploreComplete)
        		.catch(function (message) {
        			errors.catch('XHR for exploreByKeyword Failed')(message);
        		});

        		function exploreComplete(data, status, header, config) {
        			return data.data;
        		}
        }


        /*
        |--------------------------------------------------------------------------
        | Topic Methods
        |--------------------------------------------------------------------------
        |
        |
        */
       
        /**
         * Get the articles for topic(s)
         * @param  {object} topics 
         * @return {object}       
         */
       function getArticlesForTopic(topics) {
            return $http.get(topicUrl)
                .then(topicComplete)
                .catch( function (message) {
                    errors.catcher('Sorry we could not sort articles by topics right now')(message);
                });

                function topicComplete(data, status, headers, config) {
                    return data.data;
                }
       }

       /**
        * Get articles for Date
        * @param {int} days
        * @return {object}
        */
       function getArticlesForDate(days) {
            return $http.get(topicUrl)
                .then(dateComplete)
                .catch( function (message) {
                    errors.catcher('Sorry we could not sort articles by date right now')(message);
                });

                function dataComplete(data, status, headers, config) {
                    return data.data;
                }
       }

       /**
        * Get articles for Author
        * @param {string} author
        * @return {[type]} [description]
        */
       function getArticlesForAuthor(author) {
            return $http.get(topicUrl)
                .then(authorComplete)
                .catch(function (message) {
                    errors.catcher('Sorry we could not sort articles by author right now')(message);
                });

                function authorComplete(data, status, headers, config) {
                    return data.data;
                }
       };

       /**
        * Sort Articles by the cookie data
        * @return {object} [description]
        */
       function sortArticles() {
            var url  = topicUrl;
            return $http.get(url)
                .then(sortComplete)
                .catch( function (message) {
                    errors.catcher('Sorry we could not sort the articles right now')(message);
                });

                function sortComplete(data, status, header, config) {
                    return data.data;
                }
       };


        /*
        |--------------------------------------------------------------------------
        | Cookie Methods
        |--------------------------------------------------------------------------
        |
        |
        */

        /**
         * Check if cookies have topics
         * @return {Boolean} 
         */
        function hasTopics() {
            if ($cookieStore.get('articleTopics') != undefined || $cookieStore.get('articleTopics') != null) {
                return true;
            } else {
                return false;
            }
        }

        /**
         * Get the Topics from the Cookie
         * @return {object} 
         */
        function getTopics() {
            return $cookieStore.get('articleTopics');
        }

        /**
         * Store the Topics in a cookie
         * @param  {object} data 
         * @return {null}      
         */
        function storeTopics(data) {
            $cookieStore.put('articleTopics', data)
        }

        /**
         * Remove the topics from the cookie
         * @return {null} 
         */
        function removeTopics() {
            $cookieStopre.remove('surveyData');
        }


    }
})();



/*
|--------------------------------------------------------------------------
| Service for FAQ questions
|--------------------------------------------------------------------------
|
| Service to grab and return FAQ questions
| @note in Dev mode and using fake questions
| 
|
*/
(function() {
    'use strict';

    angular
        .module('mcdaniel.api')
        .factory('faqService', faqService);

    faqService.$inject = ['$http', 'common',  'errors']

    /* @ngInject */
    function faqService($http, common,  errors) {
        var apiUrl = common.apiUrl + 'faq';

        var service = {
            getFaqs: getFaqs
        };
        
        return service;

        ////////////////

        /**
         * Get the FAQs
         * @return {object} 
         */
        function getFaqs() {
        	return $http.get(apiUrl)
        		.then(faqComplete)
        		.catch(function (message) {
        			errors.catcher('Sorry but we cannot connect to the FAQ service')(message);
        		});

        		function faqComplete(data, status, headers, config) {
        			return data.data;
        		}
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.api')
        .factory('mailChimpService', mailChimpService);

    mailChimpService.$inject = ['$http', 'common', 'flash', 'errors'];

    /* @ngInject */
    function mailChimpService($http, common, flash, errors) {
        var apiUrl = common.apiUrl + '/mailchimp/subscribe';

        var service = {
            sendToMailChimp: sendToMailChimp
        };
        
        return service;

        ////////////////

        
        /**
         * Send email address to mailchimp
         * @param  {string} email 
         * @return {string}       
         */
        function sendToMailChimp(data) {
        	return $http.post(apiUrl, data)
        		.then(mailChimpComplete)
        		.catch(function (message) {
        			errors.catcher('Sorry, we cannot connect to MailChimp')(message);
        		});

        		function mailChimpComplete(data, status, headers, config) {
        			console.dir(data);
                    return data.data;
        		}
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.api')
        .factory('mailService', mailService);

    mailService.$inject = ['$http', 'common', 'errors'];

    /* @ngInject */
    function mailService($http, common,  errors) {
        var apiUrl = common.apiUrl + "Mail";
        
        var service = {
            sendToMailer: sendToMailer,
            sendAlert: sendAlert
        };
        
        return service;

        ////////////////

        /**
         * Post Request to Mail API
         * @param  {object} data Mailing Object
         * @return {statusCode }
         */
        function sendToMailer(data) {
        	return $http.post(apiUrl, data)
                .then(mailSent)
                .catch(function (message) {
                    errors.catcher('Mail cannot be sent at this time.  Please contact us at 972.535.4040')(message);
                });

                //Mark hides the status inside the data.
                function mailSent(data, status, headers, config) {
                    return data;
                }
        }

        /**
         * 
         * @param {object} data Alert Object
         * @return {statusCode}
         */
        function sendAlert(data) {
            return $http.post(apiUrl, data)
                .then(alertSent)
                .catch(function (message) {
                    errors.catcher('Our Alert Service is down.  Please contact us by phone at 972.535.4040')(message);
                });

            //Mark hides the status inside the data.
            function alertSent(data, status, headers, config) {
                return data;
            }
        }


        
       
     }
})();
/*
|--------------------------------------------------------------------------
| Service to get Topics for Article Sidbar
|--------------------------------------------------------------------------
|
| @note stored in JSON in the /json folder for now.
| @note $cookieService is deprecated in 1.4 
| you will need to replace this service 
|
| 
*/
(function() {
    'use strict';

    angular
        .module('mcdaniel.api')
        .factory('topicService', topicService);

   topicService.$inject = ['$http', '$cookieStore', 'errors', 'flash', '$cookies'];

    /* @ngInject */
    function topicService($http, $cookieStore, errors, flash,  $cookies) {
        var jsonUrl = "/json/topics.json";

        var service = {
            getSortingData: getSortingData,
            getAll: getAll,
            //hasTopics: hasTopics,
            storeData : storeData,
            getTopics : getTopics,
            getAuthors : getAuthors,
            getDates : getDates,
        };

        activate();
        
        return service;

        ////////////////

/*
|--------------------------------------------------------------------------
| Data Methods
|--------------------------------------------------------------------------
 */

        /**
         * Get the Sorting Data from the JSON File
         * @return {object} 
         */
        function getSortingData() {
        	return $http.get(jsonUrl)
        		.then(completeSortingData)
        		.catch(function (message) {
        			errors.catcher("Could not find the Topics for Sorting the Articles")(message);
        		});

        		function completeSortingData(data, status, headers, config) {
        		    return data.data;
        		}
        }

/*
|--------------------------------------------------------------------------
| Cookie Store Methods
|--------------------------------------------------------------------------
 */
        
        /**
         * Create the cookie and store with nothing if no cookie
         * @return {null}
         */
        function activate() {
        	// $cookieStore.remove('articleData');
        	if ($cookieStore.get('articleData') === undefined) {
        		
        		storeData([], [],[]);
					} else {
        		return false;	
        	}
				}

        /**
         * Store Date in the cookie
         * @param  {object} _topics  
         * @param  {object} _authors 
         * @param  {object} _dates   
         * @return {null}          
         */
        function storeData(_topics, _authors, _dates) {
        	var data = {
    			topics: _topics,
    			dates: _dates,
    			authors: _authors
        	};

        
        	$cookieStore.put('articleData', data);
        }

        /**
         * Return all Cookie Data on Articles
         * @return {object} 
         */
        function getAll() {
        	return $cookieStore.get('articleData');
        }

				/**
         * Get topics from the cookie.
         * @return {object} 
         */
        function getTopics() {
        	return $cookieStore.get('articleData').topics;
        }

        /**
         * Get the AuthorData from articleData Cookie
         * @return {object} 
         */
        function getAuthors() {
        	return $cookieStore.get('articleData').authors;
        }


        /**
         * Get the Date from from the article data cookie
         * @return {[type]} [description]
         */
        function getDates() {
        	return $cookieStore.get('articleData').dates;
        }

        function hasTopics() {
            return false;
        }


        
    }
})();


/**
 * @note code for 1.4.0 to set expiration of cookies
 
 var now = new Date(),
 // this will set the expiration to 12 months
 exp = new Date(now.getFullYear()+1, now.getMonth(), now.getDate());

	$cookies.put('someToken','blabla',{
  	expires: exp
	});
*/
/*
|--------------------------------------------------------------------------
| FAQ controller.  
|--------------------------------------------------------------------------
|
| Grabs FAQs from API and presents them on the page. 
|
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.faq')
        .controller('FaqController', FaqController);

    /* @ngInject */
    function FaqController(faqService) {
        var vm = this;
        vm.title = 'FaqController';
        vm.Faqs =[];

        // activate();

        ////////////////

        /**
         * Activate the Controller and wait for Promise
         * @return {object} 
         */
        function activate() {
        	return getFaqData().then(function () {
               
        	});
        }


        /**
         * Get FAQ Data 
         * @return {oibject} 
         */
        function getFaqData () {
        	return faqService.getFaqs().then(function (data) {
        		vm.Faqs = data;
                return vm.Faqs;
        	});
        }



    }
    FaqController.$inject = ["faqService"];
})();
/*
|--------------------------------------------------------------------------
| Article List
|--------------------------------------------------------------------------
|
| Controls the homepage of the knowledge center
|
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .controller('ArticleListController', ArticleListController);

    ArticleListController.$inject = ['articleService'];

    /* @ngInject */
    function ArticleListController(articleService) {
        var vm = this;
        vm.title = 'ArticleListController';
        vm.Articles = [];
        vm.Total;
        vm.isTrending = isTrending;
        vm.pageNumber = 0;
        vm.pageSize = 20;
        vm.pages;
        vm.ArticlesLoaded = false;


        //Methods 
        vm.nextPage = nextPage;
        vm.prevPage = previousPage;

        activate();


        ////////////////

        function activate() {
            return getData().then(function () {
                vm.ArticlesLoaded = true;
                vm.Articles[0].trending = true;
                countPages();
            });
        }

        /**
         * Get article data
         * @return {[type]} [description]
         */
        function getData() {
            return articleService.getPaginatedArticles(vm.pageNumber, vm.pageSize).then(function (data) {
                vm.Total = data.Count;
                vm.Articles = data.Articles;
                return vm.Articles;
            })
        }

        /**
         * If article is trending return featured class
         * @param  {boolean}  trending 
         * @return {string}          
         */
        function isTrending(trending) {
            if (trending) return 'trending';
            return;
        }


        function countPages() {
            vm.pages = Math.round(vm.Total/vm.pageSize);
            return vm.pages;
        }

        function nextPage() {

        }

        function previousPage() {

        }
    
    }
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .controller('ExploreListController', ExploreListController);

    /* @ngInject */
    function ExploreListController(exploreService) {
        var vm = this;
        vm.title = 'ExploreListController';

        activate();

        ////////////////

        function activate() {
        }
    }
    ExploreListController.$inject = ["exploreService"];
})();
/*
|--------------------------------------------------------------------------
| Knowledge Center Controller
|--------------------------------------------------------------------------
|
| Controls the homepage of the knowledge center
|
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .controller('KnowledgeCenterController', KnowledgeCenterController);

    KnowledgeCenterController.$inject = ['$scope', '$rootScope', '$window', 'articleService'];

    /* @ngInject */
    function KnowledgeCenterController($scope, $rootScope, $window, articleService) {
        var vm = this;
        vm.title = 'KnowledgeCenterController';
        vm.Articles = [];
        vm.pageNumber = 0;
        vm.ArticleAmount = 24;
        vm.TrendingAmount = 8;
        vm.includeInternal = true;
        vm.pages;
        vm.ArticlesLoaded = false;
        vm.loading = false;


        //Methods 
        vm.ArticlesLoaded = false;
        vm.goToLink = goToLink;

        activate();

        ////////////////

        function activate() {
        	return getData().then(function () {
                vm.ArticlesLoaded = true;
            });
        }

         /**
         * Get article data
         * @return {[type]} [description]
         */
        function getData() {
            return articleService.getArticlesForHomepage(vm.ArticleAmount, vm.TrendingAmount, vm.includeInternal).then(function (data) {
                vm.Total = data.Count;
                vm.Articles = data.Articles;
                return vm.Articles;
            })
        }

      

       

        /*
        |--------------------------------------------------------------------------
        | $scope listener methods
        |--------------------------------------------------------------------------
        |
        |
        */
       
        $rootScope.$on('articleSearch.loading', function handleLoading(event, keyword) {
            //TODO Throw loading Directive
        });


        /**
         * If user is searching in the background 
         * @param  {event} event 
         * @param  {object} data)
         * @return {object}
         */
        $rootScope.$on('articleSearch.results', function handleLoading(event, data) {
            vm.Articles = data.Articles;
        });


        /**
         *  Go to Link for Touch Devices
         * @return {page redirect}
         */
        function goToLink(link) {
            $window.location = link;
        }
    
    }
})();
/*
|--------------------------------------------------------------------------
| Contact Form Controller
|--------------------------------------------------------------------------
|
| This controller should be used for all contacts forms on the AssetBuilder 6.0 site
| By adding more variables to the formData object it should allow anything
| to be sent to the mailService
| 
|
*/
(function() {
    'use strict';

    angular
        .module('mcdaniel.forms')
        .controller('ContactFormController', ContactFormController);

    ContactFormController.$inject = ['$scope', 'mailService', 'flash', 'common'];

    /* @ngInject */
    function ContactFormController($scope, mailService, flash, common) {
        var vm = this;
        vm.title = 'ContactFormController';
        
        /** @type {Vars} Scope Vars */
        vm.loading = false;

        /** @type {Methods} Scope Methods */
        vm.submitForm = submitForm;

        vm.successMessage = "Thanks for Contacting Us. Your email is important to us and one of our team members will get back to you in 1 to 2 business days.";

        /**
         * Data for All contact Forms.  Just add to here if not in form already. 
         * @type {Object}
         */
        vm.formData = {
        	first: null,
            last: null,
        	email: null, 
        	phone: null,
        	bestContactTime: null,
        	subject: null,
        	message: null,
            formType: null,
            question: null,
            lastViewedPortfolio: null,
            alertMessage: null,
        }

        /**
         * If Testing Fill out form
         * @param  {boolean} common.isTesting 
         */
        if (common.isTesting) {
            fillForm();
        }

        activate();

        ////////////////

        /*
        |--------------------------------------------------------------------------
        | Startup Methods
        |--------------------------------------------------------------------------
        |
        */

        /**
         * Active Controller if needed
         * @return {[type]} [description]
         */
        function activate() {
        
        }

        

        /*
        |--------------------------------------------------------------------------
        | Submit Methods
        |--------------------------------------------------------------------------
        |
        */


        /**
         * Submit the Mail Form
         * @param PortfolioNAme  name of last viewed portfolio.  Set null for most forms. 
         * @return {[type]} [description]
         */
        function submitForm(portfolioName) {
            
            vm.loading = 'loading'

            vm.formData.subject = setupEmailSubject();
            vm.formData.lastViewedPortfolio = portfolioName;

            
            mailService.sendToMailer(vm.formData)
                .then(function (data) {
                    mailSent(data);
                });

            function mailSent(data) {
                console.dir(data);
                if (data.status == 200) {
                    flash.success(vm.successMessage);
                    clearForm();
                }
            }
        }


        /**
         * Change the subject out based on the formType
         * @return {string} subject
         */
        function setupEmailSubject() {
            switch (vm.formData.formType) {
                case "expatsForm":
                    return 'Expats Contact Form';
                    break;
                case "faqForm":
                    return 'A Question has been submitted';
                    break;
                case "portfolioForm":
                    return 'A customer has submitted a request from the Portfolio Page';
                    break;
                case "contactForm":
                    return 'A customer has submitted a Contact Request';
                    break;
                case "expatsPortfolioForm":
                    return 'An expat customer has submitted a request from the Portfolio Page';
                    break;
                default: 
                    return 'A form was submitted on the site';
                    break;
            }
        }
    


        /**
         * Clear the Form for next submission
         * @return {DOM} 
         */
        function clearForm() {
            vm.loading = false

            vm.formData =  {
                name: null,
                email: null, 
                phone: null,
                bestContactTime: null,
                subject: null,
                message: null,
                formType: null,
                question: null,
                alertMessage: null,
            }
        }

       
        /*
        |--------------------------------------------------------------------------
        | Testing Methods
        |--------------------------------------------------------------------------
        |
        */

        function fillForm() {
           vm.formData = { 
                name: 'Bob Dole',
                email: 'bobd@assetbuilder.com', 
                phone: '972.535.4040',
                bestContactTime: {
                    'afternoon' : true,
                    'morning' : true
                },
                subject: "Big Gulp Huh?",
                message: 'alright\' ... we\'ll see you later',
                formType: null,
                question: 'Big Gulps Huh?',
                alertMessage: null,
                lastViewedPortfolio: 'portfolio 10',
            }
        }


    }
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.navigation')
        .directive('mainNavigation', mainNavigation);

    mainNavigation.$inject = ['$document'];

    /* @ngInject */
    function mainNavigation ($document) {
        // Usage:
        // <div class="navigation" main-navigation></div>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
            

          var el = document.getElementById('navigation'),
              menuButton = jq('.mobile-navigation-button');

          
          /**
      		 * Fixed Navigation
      		 * Waypoints http://imakewebthings.com/waypoints/ 
      		 */
      		var sticky = new Waypoint({
      			element: el,
      			handler: function () {
              jq('body').toggleClass('nav-fixed');
      			},
      			offset: -100
      		});

      		menuButton.on('click', function (e) {
            jq('.mobile-navigation-button').toggleClass('active');
            jq('.navigation').toggleClass('open');
            jq('body').toggleClass('nav-open');
          });

  			}
    }


   
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.navigation')
        .directive('subNavigation', subNavigation);

    /* @ngInject */
    function subNavigation () {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: subNavigationController,
            controllerAs: 'vd',
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
            var el = element[0];
            
            /**
             * Fixed Navigation
             * Waypoints http://imakewebthings.com/waypoints/ 
             */
            var sticky = new Waypoint({
                element: el,
                handler: function () {
                    jq(el).toggleClass('fixed');
                },
                offset:105
            });
        }
    }

    /* @ngInject */
    function subNavigationController () {

    }
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.shared')
        .factory('common', common);

    common.$inject = ['$location', '$q', '$rootScope', '$timeout', 'flash'];

    /* @ngInject */
    function common($location, $q, $rootScope, $timeout, flash) {
        var dev = true;
        var testing = true;


        var service = {
            $broadcast: $broadcast,
            $q: $q,
            $timeout: $timeout,

            //Setup Helpers Here
            isTesting : isTesting(),
            parseDate: parseDate,
            flash : flash,
            apiUrl: apiUrl(),
            portfolioUrl : portfolioUrl(),
            isNumber: isNumber,
            addCommas: addCommas,
            removeCommas: removeCommas,
            toTitleCase : toTitleCase,
            scrollToElement : scrollToElement,
            debounce: debounce,
            setupOptimizely: setupOptimizely,
            isEmpty: isEmpty
        };
        
        return service;

        ////////////////
        
        function isTesting() {
            if (testing) {
                console.warn('Test Mode.  Please Turn off in common.js');    
            }
            return testing;
        }

        /**
         * Wath the broadcast or bubbling for communication
         * @return {$broadcast} 
         */
        function $broadcast() {
        	return $rootScope.$broadcast.apply($rootScope, arguments);
        };


        /**
         * Set the API URL
         * @return {string} 
         */
        function apiUrl() {
            if (dev)
                //return 'https://192.168.0.111:3000/api/v1.0/';
                return '/api/v1';
              
        	
            return '/api/v1';
        };


        function portfolioUrl() {
            if (dev) 
                return 'our-portfolios.php';
            
            return 'our-model-portfolios';
        };


        /**
         * Return Positive or Negative Number
         * @param  {int}  val 
         * @return {Boolean}     
         */
        function isNumber(value) {
            var reg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/;
            return reg.test(value);
        };


        /**
         * Parse the JSON Date format that .Net Returns
         * @param  {string} jsonDate 
         * @return {string}          
         */
        function parseDate(jsonDate) {
        	var d =  new Date(parseInt(jsonDate.replace(/\/Date\((\d+)\)\//gi, "$1"))); 
			return d.toUTCString();
        };

        /**
         * Add Commas to a number
         * @param {int} num 
         * @return {string}
         */
        function addCommas(num) {
            if (!num) return num;
            var parts = num.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        };

        /**
         * Remove Commas from a string
         * @param  {string} str
         * @return {int}        
         */
        function removeCommas(str) {
            if (!str) return str;
            var parts = str.toString().split(".");
            parts[0] = parts[0].replace(/,/g, '');
            return parseFloat(parts[0]);
        };

        /**
         * Turn String to Title Case
         * @param  {string} str 
         * @return {string}     
         */
        function toTitleCase(str) {
            return str.replace(/\w\S*/g, function(txt){
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        };


        /** 
         * Scroll to the Anchor
         * @param  {string} target   id of anchor
         * @param  {int} offset      navigation height
         * @param  {int} duration    in ms
         * @return {DOM}          
         */
        function scrollToElement(target, offset, duration) {
            
            var pixel = jq('#'+target).offset().top + offset;
            
            /** @note use body and html for safari */
            jq('html, body').animate({
                scrollTop: pixel
            }, duration);

            return;
        }

        
        /**
         * Debounce Function to Limit function calls 
         * @param  {function} func  -functon call
         * @param  {int} wait       -time to wait
         * @param  {flag} immediate -override
         * @return {callback} 
         */
        function debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        };



        /**
         * Run Optimizley Manual Acitivation for Experiements
         * @param {int} experiment Id
         */
        function setupOptimizely(id) {
            window.optimizely.push(["activate", id]);
        }


        /**
         * Speed up calls to hasOwnProperty
         * @type {Boolean}
         */
        var hasOwnProperty = Object.prototype.hasOwnProperty;

        /**
         * Check to see if many types of objects are emoty
         * @param  {array, object}   object
         * @return {Boolean}        
         */
        function isEmpty(object) {
            // null and undefined are "empty"
            if (object == null) return true;

            // Assume if it has a length property with a non-zero value
            // that that property is correct.
            if (object.length > 0)    return false;
            if (object.length === 0)  return true;

            // Otherwise, does it have any properties of its own?
            // Note that this doesn't handle
            // toString and valueOf enumeration bugs in IE < 9
            for (var key in object) {
                if (hasOwnProperty.call(object, key)) return false;
            }

            return true;
        }

    }
})();
(function () {
	'use strict';

	var shared = angular.module('mcdaniel.shared');

	var config = {
		appErrorPrefix: '[McDaniel Nutrition Website Error]',
		appTitle: 'mcdanielnutrition.com',
		version: '3.0.0'
	}

	shared.value('config', config);
	share.config(configure)

  configure.$inject = ['$logProvider', 'exceptionHandlerProvider', '$httpProvider'];

	/** @ngInject */
	function configure($logProvider, exceptionHandlerProvider, $httpProvider) {
		//Turn debugging off/on (no info or warn);
		if ($logProvider.debugEnabled) {
			$logProvider.debugEnabled(true);
		}

		//Configure the common exception handler
		exceptionHandlerProvider.configure(config.appErrorPrefix);


		$httpProvider.defaults.headers.post['Content-Type'] = config.header;
    $httpProvider.deafaults.headers.post['X-CSRF-TOKEN'] = jq('meta[name="csrf-token"]').attr('content')
    $httpProvider.defaults.transformRequest = [function(data) {
      return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
	}


	//Seralize Data for the HTTP Post Call
	function param(obj) {
		var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
          
        for(name in obj) {
          value = obj[name];
            
          if(value instanceof Array) {
            for(i=0; i<value.length; ++i) {
              subValue = value[i];
              fullSubName = name + '[' + i + ']';
              innerObj = {};
              innerObj[fullSubName] = subValue;
              query += param(innerObj) + '&';
            }
          }
          else if(value instanceof Object) {
            for(subName in value) {
              subValue = value[subName];
              fullSubName = name + '[' + subName + ']';
              innerObj = {};
              innerObj[fullSubName] = subValue;
              query += param(innerObj) + '&';
            }
          }
          else if(value !== undefined && value !== null)
            query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }
          
        return query.length ? query.substr(0, query.length - 1) : query;
	}

});
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
/*
|--------------------------------------------------------------------------
| Survey Module Controller
|--------------------------------------------------------------------------
|  Controls the Overlay and Click buttons for Survey.
|  @note Looking for the Form.  Check out the SurveyFormDirective.js 
|  
*/

(function() {
    'use strict';

    angular
        .module('assetbuilder.survey')
        .controller('SurveyController', SurveyController);

    SurveyController.$inject = ['$scope', '$window', 'surveyService', 'common'];

    /* @ngInject */
    function SurveyController($scope, $window, surveyService, common) {
        //Vars
        var vm = this;
        vm.title = 'SurveyController';
        vm.investmentType = 'us';
        
        

        //Methods
        vm.changeInvestmentType = changeInvestmentType;
        vm.checkInvestmentType = checkInvestmentType;
        
        activate();

        ////////////////

        /**
         * Activate the Controller
         * @return {Function} 
         */
        function activate() {
            
        }

        
        /**
         * Change the investment type to expat
         * @return {none} 
         */
        function changeInvestmentType() {
            vm.investmentType = 'expat';
            vm.expat = true;
        }


        /**
         * Check the investment type and return the class name
         * @return {string} 
         */
        function checkInvestmentType() {
            if (vm.expat === true) {
                return 'expat';
            } else {
                return 'c-gray-lightest-background';
            }
        }



/*
|--------------------------------------------------------------------------
| Helpers
|--------------------------------------------------------------------------
|
|
*/
       


        
    }
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.faq')
        .directive('faqBlock', faqBlock);

    /* @ngInject */
    function faqBlock () {
        // Usage:
        // <div ng-repeat="faq in fc.Faqs" ng-if="faq.featured" faq-block>
				// 		<h4 >{{ faq.question }} <i class="fa fa-angle-right"></i></h4>
				// 		<div ng-bind-html="faq.answer" class="faq-answer"></div>
				// </div>
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
        		
                var question = jq(element[0]);
        		var answer = question.children('.faq__answer');

        		question.on('click', function (e) {
        			if (question.hasClass('open')) {
        				answer.slideUp(200);
        				question.toggleClass('open');
        			} else {
        				answer.slideDown(200);
        				question.toggleClass('open');
        			}
        		});
        }
    }

    /* @ngInject */
    function Controller () {

    }
})();
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
(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('articleSmall', articleSmall);

    /* @ngInject */
    function articleSmall () {
        // Usage:
        // <div article-small></div>
        
        var directive = {
            bindToController: true,
            controller: ArticleSmallController,
            controllerAs: 'vd',
            templateUrl: '/templates/blog/article-small.html',
            replace:true,
            restrict: 'A',
            scope: {
     			title: "@",
     			image: "@",
     			link: "@"
            }
        };
        
        return directive;
	}

    ArticleSmallController.$inject = ['$scope', '$element', '$attrs'];

    /* @ngInject */
    function ArticleSmallController ($scope, $element, $attrs) {
    	var vd = $scope.vd;

    }
})();
/*
|--------------------------------------------------------------------------
| Blog Preview
|--------------------------------------------------------------------------
|
|  Creates a preview of the blog on information based pages.
|
*/
(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('blogPreview', blogPreview);

    /* @ngInject */
    function blogPreview () {
        // Usage:
        // <div blog-preview></div>
        var directive = {
            bindToController: true,
            controller: BlogPreviewController,
            controllerAs: 'vd',
            templateUrl: '/templates/blog/blog-preview.html',
            replace: true,
            restrict: 'A',
        };
        
        return directive;
	}


    BlogPreviewController.$inject = ['$scope', '$element', '$attrs', 'articleService']

    /* @ngInject */
    function BlogPreviewController ($scope, $element, $attrs, articleService) {
    	var vd = $scope.vd;
    		vd.mainArticle = {};
    		vd.otherArticles = [];

    	activate();


    	//////////////

    	function activate() {
    		getArticleData();
        }


        //Get the Main Article Data
    	function getArticleData() {
    		return articleService.getArticlesForBlogPreview(4).then(function (data) {
    			vd.mainArticle = data.data[0]

                if (vd.mainArticle.post_image == false) {
                    var rand = Math.floor(Math.random() * 4) + 1  
                    vd.mainArticle.post_image = 'https://s3-us-west-2.amazonaws.com/mcdaniel-staging/unsplash/' + rand + '.jpg'
                }
            
                for (var i = 1; i < data.data.length; i++) {
                    if (data.data[i].post_thumbnail == false) {
                        var rand = Math.floor(Math.random() * 22) + 1  
                        data.data[i].post_thumbnail = 'https://s3-us-west-2.amazonaws.com/mcdaniel-staging/unsplash/' + rand + '.jpg'
                    }
                    vd.otherArticles.push(data.data[i]);
                }

                
    		});
    	}
    }

})();
/*
|--------------------------------------------------------------------------
| Clear Search Directive
|--------------------------------------------------------------------------
|
| Sends to rootscope that search service needs to clear;
|
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('clearSearch', clearSearch);

    clearSearch.$inject = ['searchService'];

    /* @ngInject */
    function clearSearch (searchService) {
        // Usage:
        // <div clear-search></div>
        var directive = {
            link: link,
            restrict: 'A',
        };
   
        return directive;

        function link(scope, element, attrs) {
			
            /** Alert the Rootscope that Search is clearing */
            jq(element).on('click', function () {
        		searchService.clearSearchData();
        	});

        }
    }

    
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('footerRollup', footerRollup);

    footerRollup.$inject = ['cookieService'];

    /* @ngInject */
    function footerRollup (cookieService) {
        // Usage:
        // <div footer-rollup></div>
        var directive = {
            bindToController: true,
            controller: FooterRollupController,
            controllerAs: 'vd',
            link: link,
            restrict: 'A',
            replace:true,
            templateUrl: '/templates/blog/footer-rollup.html',
        };
        
        return directive;

        function link(scope, element, attrs) {
        	
        	var el = jq('.article__footer')
          
          /**
           * Aleready Subscribed so turn them off.
           * @param  {boolesn} cookieService.haveCookie 
           * @return {DOM}                          
           */
          if (cookieService.haveCookie) {
            var cookie = cookieService.getCookie();
            console.dir(cookie);
            if (cookie.subscribedToMailChimp) {
              el.addClass('off');
            }
          }
					
					/**
      		 * Fix to bottom of page
      		 * Waypoints http://imakewebthings.com/waypoints/ 
      		 */
      		var sticky = new Waypoint({
      			element: document.querySelector('body'),
      			handler: function () {
              if (el.hasClass('off')) return;
      				el.toggleClass('open');
      			},
      			offset:-200
      		});

      		/**
           * Removes when footer comes onto the page.
           * Waypoints http://imakewebthings.com/waypoints/ 
           */
          sticky = new Waypoint({
      			element: document.querySelector('.site-footer'),
      			handler: function () {
              if (el.hasClass('off')) return;
      				el.toggleClass('open');
      			},
      			offset:'100%'
      		});


          jq('.article__footer--close').on('click', function (e) {
            e.preventDefault();
            el.removeClass('open').addClass('off');
          });


        }
    }

    FooterRollupController.$inject = ['$scope', '$element', '$attrs', 'mailChimpService', 'cookieService'];

    function FooterRollupController($scope, $element, $attrs, mailChimpService, cookieService) {
        var vd = $scope.vd;

        vd.formData = {
          email : '',
        }

        vd.loading = false;
        vd.success = false;
        vd.message = false;

        vd.submitMailChimp = submitMailChimp;


        ///////
        

        function submitMailChimp() {
          vd.loading = 'sending',

          mailChimpService.sendToMailChimp(vd.formData)
            .then(function (data) {
              vd.loading = false;
              vd.success = true;
              vd.message = data;

              cookieService.storeCookie({
                subscribedToMailChimp : true
              })

              setTimeout(function () {
                jq('.article__footer').removeClass('open').addClass('off');
              }, 3000)
              
            })
        }


        function subscribed(data) {
          //Add to 3 month cookie and leave them alone
        }
        
    }

    
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('goBlog', goBlog);

    /* @ngInject */
    function goBlog () {
        // Usage:
        // <div go-blog></div>
        
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
        		
        	var el = jq(element[0]);

        	el.on('click', function () {
        		console.log('message');
        		window.location = '/posts';
        	});
        }
    }

    /* @ngInject */
    function Controller () {

    }
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('knowledgeCenter', knowledgeCenter);

    /* @ngInject */
    function knowledgeCenter () {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: knowledgeCenterController,
            controllerAs: 'vd',
            link: link,
            templateUrl: '/ngViews/knowledge/knowledge-center.html',
            replace:true,
            restrict: 'A',
            scope: {
            	articles: "="
            }
        };
        return directive;

        function link(scope, element, attrs) {
        	var vd = scope;
        	
        }
    }

    /* @ngInject */
    function knowledgeCenterController (scope) {

    }
    knowledgeCenterController.$inject = ["scope"];
})();
/*
|--------------------------------------------------------------------------
| Search Bar Directive
|--------------------------------------------------------------------------
|
| On submit will find results from search service and send to serach results
|
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('searchBar', searchBar);

    searchBar.$inject = ['$rootScope', 'exploreService', 'searchService'];

    /* @ngInject */
    function searchBar ($rootScope, exploreService, searchService) {
        // Usage:
        // <form search-bar></form>
        var directive = {
            link: link,
            restrict: 'A',
        };
       
        return directive;

        function link(scope, element, attrs) {
       			var vd = scope;
       				vd.keyword = null;

       			/** Catch form submit get keyword and send to service */
            jq(element).on('submit', function (e) {
       				e.preventDefault();
       				vd.keyword = jq(this).children('input').val();
       				if (vd.keyword === undefined) return;
       				sendToResults(vd.keyword);
       			});

            /** On search.clear empty input */
            $rootScope.$on('search.clear', function () {
              jq(element).children('input').val('')
            })

       		/**
             * Send keyword to search service
             * @param  {string} keyword 
             * @return {object} 
             */
            function sendToResults(keyword) {
    			return searchService.getKeywords(keyword);
    		}
        }
    }

})();	
/*
|--------------------------------------------------------------------------
| Search Result Directive
|--------------------------------------------------------------------------
|
| Displays search results on sidebar on changes article listing for
| to show search results based on dynamic attribute
| @note dynamic = 1 will send it to article-listing 
| @note dynamic = 0 will send it to sidebar;
|
*/
(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('searchResults', searchResults);

    searchResults.$inject = ['$rootScope', 'exploreService'];

    /* @ngInject */
    function searchResults ($rootScope, exploreService) {
        // Usage:
        // <div search-results dynamic="0||1"></div>
        var directive = {
            link: link,
            restrict: 'A',
            templateUrl: '/ngViews/knowledge/sidebar-search-results.html',
        };
        
        return directive;

        function link(scope, element, attrs) {
        	scope.loading = null;
        	scope.results = null;
        	scope.keyword = null

            sendToSidebar();
            

        	

            /*
            |--------------------------------------------------------------------------
            | Send Methods
            |--------------------------------------------------------------------------
            |
            */
           
           /**
            * Send Results to sidebar 
            * @return {DOM} 
            */
           function sendToSidebar() {
                /** Setup Loading and Keywords */
                $rootScope.$on('search.loading', function handleLoading(event, keyword) {
                    scope.loading = 1;
                    scope.keyword = keyword
                    scope.error = false;
                    scope.$apply(scope.loading);

                    //Fade Out Article Listing
                    jq('.article-listing').fadeOut(2000);
                });

                /** Fill In Search Results */
                $rootScope.$on('search.results', function handleResults(event, data) {
                    scope.loading = null;
                    if (data.Errors !== undefined) {
                        scope.error = true;
                    } else {
                        //console.log('good');
                        scope.results = data.Articles;
                    }
                    
                });

                /** Clear Search Results */
                $rootScope.$on('search.clear', function handleClear(event) {
                    scope.keyword = null;
                    scope.loading = null;
                    scope.results = null;

                    scope.$apply();

                    jq('.article-listing').fadeIn(100);
                });

           }
        }
    }


    
    
})();		
(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('textTransformer', textTransformer);

    /* @ngInject */
    function textTransformer () {
        // Usage:
        //  @param: id of item you want to transfor
        //  <div text-transformer selector="@param"></div>
        
        var directive = {
            bindToController: true,
            controller: textTransformerController,
            controllerAs: 'vd',
            templateUrl: '/ngViews/global/text-transformer.html',
            replace: true,
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
            var vd = scope.vd;
                vd.selector = attrs.selector;
                vd.textSize = 100;

            /**
             * Increse the Text
             * @return {DOM} 
             */
            vd.increaseText = function () {
               var kids = parseSelectorChildren(vd.selector);
               vd.textSize = transformText(vd.selector, kids, "+", vd.textSize);
            }

            /**
             * Decrese the Text
             * @return {DOM}
             */
            vd.decreaseText = function () {
               var kids = parseSelectorChildren(vd.selector);
               vd.textSize = transformText(vd.selector, kids, "-", vd.textSize);
            }
        }
    }

    textTransformerController.$inject = ['$scope'];

    /* @ngInject */
    function textTransformerController ($scope) {
        var vd = $scope.vd;
    }


    /**
     * Transform the text
     * @param  {string} selector  
     * @param  {array} kids      
     * @param  {string} increment 
     * @return {int}           
     */
    function transformText(selector, kids, increment, textSize) {
        var textSize = (increment === "+") ? textSize + 10 : textSize -10;
        var fontSize = textSize+"%",
            lineHeight = (textSize > 100) ? (textSize*1.7)+"%" : "170%";


        for (var i = 0; i < kids.length; i++) {
            jq('#'+selector+' '+kids[i]).css({fontSize: fontSize, lineHeight: lineHeight});
        }

        return textSize;
    }


    /**
     * Parse the children of the selector
     * @param  {string} selector 
     * @return {array}          
     */
    function parseSelectorChildren(selector) {
        var kiddos = [];
        
        jq('#'+selector).children().each(function () {
            var el = jq(this);
            if (kiddos.indexOf(el.context.localName) != -1) { return; }
            
            var filter = filterContext(el.context.localName);
            if (filter) { kiddos.push(filter); }
        });

        return kiddos;  
    }

    /**
     * Filter out namespaces we don't want to transform or change out ones that we need to transform
     * @param  {string} context 
     * @return {string} 
     */
    function filterContext(context) {
        //Remove Block Elements
        if (context === 'div' || context === 'img' || context === 'aside') {
            return false; 
        }


        
        //Trade out Table
        if (context === 'table') {
            context = 'td';
        }

        if (context === 'ul') {
            context = 'li';
        }

        return context;
    }



})();
/*
|--------------------------------------------------------------------------
| Topic Display Directive
|--------------------------------------------------------------------------
|
| Displays the topics from the cookie
|
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('topicDisplay', topicDisplay);

    topicDisplay.$inject = ['$rootScope',  'topicService'];

    /* @ngInject */
    function topicDisplay ($rootScope, topicService) {
        // Usage:
        //	<div topic-display></div>
        var directive = {
            link: link,
            restrict: 'A',
            replace: true,
            templateUrl: '/ngViews/knowledge/topic-display.html'
        };
        
        return directive;

        function link(scope, element, attrs) {
        	//Get the Topics
        	scope.notEmpty = false;
            //var stringTopics = topicService.getTopics();
            
            //if (stringTopics) {
            //    scope.notEmpty = true;
            //    scope.topics = JSON.parse(stringTopics);    
            //}

        	
            ////If Topics Change get them again
        	//$rootScope.$on('topics.changed', function handleChange(event) {
        	//	scope.topicData = topicService.getTopics();
        	//})
        }
    }

    
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('twitterCallout', twitterCallout);

    twitterCallout.$inject = ['$location'];

    /* @ngInject */
    function twitterCallout ($location) {
        // Usage:
        // <div twitter-callout></div>
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
        	var el = jq(element[0]),
				html = el.html(),
				url = $location.absUrl(),
				via = '- @mcdanielrdn',
				twitterLink = buildLink(url, via, html);

			el.append('<div class="m-post-content__callout--logo"><i class="fa fa-twitter"></i></div>')

        	el.on('click', function () {
        		popup(twitterLink, 700, 500);
        	})
        
        }
    }



     /**
     * Build Twitter Sharer Link
     * @param  {string} url 
     * @return {string}     
     */
    function buildLink(url, via, html) {
    	var text = truncateHTML(url, via, html);
    	return 'http://twitter.com/intent/tweet?url='+ url + '&text=' + text + via;
    }


    /**
     * Trucate the String to Match
     * @param  {string} url  
     * @param  {string} via  
     * @param  {string} html 
     * @return {string}
     */
    function truncateHTML(url, via, html) {
    	var full = url.length + via.length + 4;
    	var text = html.substr(0, (140-full));
    	return text + '...'
    }

     /**
     * Make the Popup Window
     * @param  {string} url    
     * @param  {int} width  
     * @param  {int} height 
     * @return {window.open}        
     */
    function popup(url, width, height) {
        window.open(url,'1429735674908','width='+width+',height='+height+',toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
    }

    
})();
/*
|--------------------------------------------------------------------------
| Search Service
|--------------------------------------------------------------------------
|
| Service to pass the search data between parameters
| 
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .service('searchService', searchService);


   searchService.$inject = ['$rootScope', 'exploreService'];

    /* @ngInject */
    function searchService($rootScope, exploreService) {
        var data =  {
        	KeywordData: null
        };

        var service = {
        	getKeywords: getKeywords,
        	clearSearchData: clearSearchData
        };

        return service;

        ////////////////

        /**
         * Call Loading Bar and setup results directive while grabbing data
         * @param  {string} keyword 
         * @return {object}         
         */
        function getKeywords(keyword) {
        	$rootScope.$emit('search.loading', keyword);
        	return getData(keyword).then(function (data) {
        		alertResultsDirective(data);
        	});
        }

        /**
         * Clear the search Results
         */
        function clearSearchData() {
        	$rootScope.$emit('search.clear');
        }

/*
|--------------------------------------------------------------------------
| Private Methods
|--------------------------------------------------------------------------
|
| Description 1
|  Description 2
| 
|
*/        

        /**
         * Alert searchResultsDirective when Explore is finished;
         * @return {object}
         */
        function alertResultsDirective(data) {
            $rootScope.$emit('search.results', data);
        }

        
        /**
         * Get Search Data from Explore API
         * @param  {string} keyword 
         * @return {object}         
         */
        function getData(keyword) {
        	return exploreService.exploreByKeyword(keyword).then(function (data) {
        		return data;
        	});
        }


       
    }
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.forms')
        .directive('mailChimp', mailChimp);

    /* @ngInject */
    function mailChimp () {
        // Usage:
        // <div mail-chimp color-type="black || green">
        var directive = {
            bindToController: true,
            controller: mailChimpInputController,
            controllerAs: 'vd',
            restrict: 'A',
            link: link,
            templateUrl: '/ngViews/forms/subscribe-button.html',
            scope: {
            	colorType: "@"
            }
        };
    
        return directive;

        function link (scope, element, attrs) {
        		var vd = scope.vd;
        		vd.getColor = getColor;

        		function getColor() {
        			if (vd.colorType === 'black') {
        				return 'bw';
        			} else if (vd.colorType == 'green') {
        				return 'open';
        			}
        		}
				}

    }

    mailChimpInputController.$inject = ['$scope', 'mailChimpService', 'common', 'flash'];

    /* @ngInject */
    function mailChimpInputController ($scope, mailChimpService, common, flash) {
    	var vd = $scope.vd;

    	if (common.isTesting) {
    	    vd.mailChimpInput = "zackd@assetbuilder.com";
    	}
			
			vd.mailChimpSubmit = mailChimpSubmit;
			vd.mailChimpMessage = null;

			function mailChimpSubmit() {
				if (vd.mailChimpInput === null) return;
				send(vd.mailChimpInput);
			};


			function send(email) {
				return mailChimpService.sendToMailChimp(email)
					.then(mailChimpComplete)
					.catch(mailChimpError);

					/**
					 * Dislay User Safe Results
					 * @param  {object} data 
					 * @return {string}      
					 */
					function mailChimpComplete(data) {
                        flash.success(data.ReturnResult);
					}

					/**
					 * Display User safe Error
					 * @return {string} 
					 */
					function mailChimpError() {
						console.log('error happendin in the controller');
						//Make up user error not CPU Error
					}
			}
    }
})();
/*
|--------------------------------------------------------------------------
| Directive for Phone Input
|--------------------------------------------------------------------------
|
| Validates and creates slide downs for Phone Input
|
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.forms')
        .directive('phoneInput', phoneInput);

    /* @ngInject */
    function phoneInput () {
        // Usage:
        // <input phone-input type="tel">
        var directive = {
            link: link,
            restrict: 'A',
            require: 'ngModel',
            scope: {
            	targetId: "@"
            }
        };
        
        return directive;

        function link(scope, element, attrs, ngModel) {
        	var tar = jq('#' + scope.targetId);
            

        	/**
             * On focus check for validation and then add best time to call. 
             */
            jq(element).on('focusout', function () {
        		if (jq(this).val() != '') {
        			tar.slideDown(500);
        		} else {
        			tar.slideUp(500);
        		}
        	});



            /**
             * Validate the Phone
             * @param  {string} value 
             * @return {boolean}       
             * @note - not validating phone number.  going to trust the user will need it. 
             */
            // function phoneValidator(value) {
            //     var reg = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
            //     valid = reg.test(value)
            //     if (!ngModel.$isEmpty(value) && valid) {
            //         ngModel.$setValidity('phone', true);
            //         return value;
            //     } else {
            //         ngModel.$setValidity('phone')
            //     }
            // }

            

        }
    }

    
})();

/*
|--------------------------------------------------------------------------
| Facebook Share Direcgive
|--------------------------------------------------------------------------
|
| Builds facebook share button and URL to shre the article on twitter
|
*/
(function() {
    'use strict';

    angular
        .module('global.share')
        .directive('facebookShare', facebookShare);

    facebookShare.$inject = ['$location'];

    /* @ngInject */
    function facebookShare ($location) {
        // Usage:
        // <div facebook-share></div>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                title: "@"
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
            var url = $location.absUrl(),
                fbLink = buildLink(url, scope.title);
                
            jq(element[0]).on('click', function (e) {
                popup(fbLink, 700, 500);
                //Send to Google Analytics
                _ga('send', 'event', 'knowledge-center', 'share', 'facebook', 0);
            });

        }
    }

    /**
     * Build Facebook Sharer Link
     * @param  {string} url 
     * @return {string}     
     */
    function buildLink(url, title) {
        //TODO: add description 
        // return 'http://www.facebook.com/dialog/feed?app_id=556572864519365&caption=' + title + '&display=popup&link=' + url;

        var url = 'https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F';
        var uri = 'https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer';

        return 'https://www.facebook.com/dialog/share?' +
                  'app_id=145634995501895' +
                  '&display=popup' +
                  '&href=' + url + 
                  '&redirect_uri=' + uri;
    }

    
    /**
     * Make the Popup Window
     * @param  {string} url    
     * @param  {int} width  
     * @param  {int} height 
     * @return {window.open}        
     */
    function popup(url, width, height) {
        window.open(url,'1429735674908','width='+width+',height='+height+',toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
    }


})();   


(function() {
    'use strict';

    angular
        .module('global.share')
        .directive('googleShare', googleShare);

    /* @ngInject */
    function googleShare ($location) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	
            }
        };
        return directive;

        function link(scope, element, attrs) {
        	var el = jq(element[0]),
        		url = $location.absUrl(),
        		googleLink = buildLink(url);

        	el.on('click', function () {
        		popup(googleLink, 700, 500);
        	})

        }
    }
    googleShare.$inject = ["$location"];

    
     /**
     * Build Pinterst Sharer Link
     * @param  {string} url 
     * @return {string}     
     */
    function buildLink(url) {
        //return 'http://www.linkedin.com/shareArticle?mini=true&url='+ url +'&title='+ title +'&summary='+ summary +'&source=http://mcndanielnutrition.com';
        return 'https://plus.google.com/share?url=' + url;
    }


    /**
     * Trucate the String to Match
     * @param  {string} url  
     * @param  {string} via  
     * @param  {string} html 
     * @return {string}
     */
    function truncateHTML(url, via, html) {
        var full = url.length + via.length + 4;
        var text = html.substr(0, (140-full));
        return text + '...'
    }

     /**
     * Make the Popup Window
     * @param  {string} url    
     * @param  {int} width  
     * @param  {int} height 
     * @return {window.open}        
     */
    function popup(url, width, height) {
        window.open(url,'1429735674908','width='+width+',height='+height+',toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
    }

})();
(function() {
    'use strict';

    angular
        .module('global.share')
        .directive('linkedinShare', linkedinShare);

    linkedinShare.$inject = ['$location'];
    
    /* @ngInject */
    function linkedinShare ($location) {
        // Usage:
        // <div data-linked-share>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	title:  "@",
            	summary: "@"
            }
        };
        return directive;

        function link(scope, element, attrs) {
    		var el = jq(element[0]),
    			url = $location.absUrl(),
    			title = scope.title,
    			summary = scope.summary,
    			linkedInLink = buildLink(url, title, summary);

    		el.on('click', function () {
    			popup(linkedInLink, 700, 500);
    		})

        }
    }


     /**
     * Build Pinterst Sharer Link
     * @param  {string} url 
     * @return {string}     
     */
    function buildLink(url, title, summary) {
        //return 'http://pinterest.com/pin/create/button/?url='+ url +'&description='+ title +'&media=' +  media;
        return 'http://www.linkedin.com/shareArticle?mini=true&url='+ url +'&title='+ title +'&summary='+ summary +'&source=http://mcndanielnutrition.com';
    }


    /**
     * Trucate the String to Match
     * @param  {string} url  
     * @param  {string} via  
     * @param  {string} html 
     * @return {string}
     */
    function truncateHTML(url, via, html) {
        var full = url.length + via.length + 4;
        var text = html.substr(0, (140-full));
        return text + '...'
    }

     /**
     * Make the Popup Window
     * @param  {string} url    
     * @param  {int} width  
     * @param  {int} height 
     * @return {window.open}        
     */
    function popup(url, width, height) {
        window.open(url,'1429735674908','width='+width+',height='+height+',toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
    }

    
})();
(function() {
    'use strict';

    angular
        .module('global.share')
        .directive('pinterestShare', pinterestShare);

    pinterestShare.$inject = ['$location']

    /* @ngInject */
    function pinterestShare ($location) {
        // Usage:
        // <li pinterest-share><li>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	title: '@',
            	media: '@'
            }
        };
        return directive;

        function link(scope, element, attrs) {
        	var el = jq(element[0]),
        		url = $location.absUrl(),
        		title = scope.title,
        		media = scope.media,
        		pinterstLink = buildLink(url, title, media)

        		el.on('click', function () {
        			popup(pinterstLink, 700, 500);
        		});
        }
    }


     /**
     * Build Pinterst Sharer Link
     * @param  {string} url 
     * @return {string}     
     */
    function buildLink(url, title, media) {
        return 'http://pinterest.com/pin/create/button/?url='+ url +'&description='+ title +'&media=' +  media;
    }


    /**
     * Trucate the String to Match
     * @param  {string} url  
     * @param  {string} via  
     * @param  {string} html 
     * @return {string}
     */
    function truncateHTML(url, via, html) {
        var full = url.length + via.length + 4;
        var text = html.substr(0, (140-full));
        return text + '...'
    }

     /**
     * Make the Popup Window
     * @param  {string} url    
     * @param  {int} width  
     * @param  {int} height 
     * @return {window.open}        
     */
    function popup(url, width, height) {
        window.open(url,'1429735674908','width='+width+',height='+height+',toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
    }
    
})();
(function() {
    'use strict';

    angular
        .module('global.share')
        .directive('twitterShare', twitterShare);

    twitterShare.$inject = ['$location'];

    /* @ngInject */
    function twitterShare ($location) {
        // Usage:
        // <div twitter-share></div>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                title: '@'
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
            var el = jq(element[0]),
                title = scope.title,
                url = $location.absUrl(),
                via = '- @mcdanielrdn',
                twitterLink = buildLink(url, via, title);

            el.on('click', function () {
                popup(twitterLink, 700, 500);
            })
        
        }
    }



     /**
     * Build Twitter Sharer Link
     * @param  {string} url 
     * @return {string}     
     */
    function buildLink(url, via, html) {
        var text = truncateHTML(url, via, html);
        return 'http://twitter.com/intent/tweet?url='+ url + '&text=' + text + via;
    }


    /**
     * Trucate the String to Match
     * @param  {string} url  
     * @param  {string} via  
     * @param  {string} html 
     * @return {string}
     */
    function truncateHTML(url, via, html) {
        var full = url.length + via.length + 4;
        var text = html.substr(0, (140-full));
        return text + '...'
    }

     /**
     * Make the Popup Window
     * @param  {string} url    
     * @param  {int} width  
     * @param  {int} height 
     * @return {window.open}        
     */
    function popup(url, width, height) {
        window.open(url,'1429735674908','width='+width+',height='+height+',toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
    }

    
})();
/*
|--------------------------------------------------------------------------
| Menu Toggle Directive
|--------------------------------------------------------------------------
|
| Adds the class to open any id that you specify in the menu-toggle attribute
|
*/
(function() {
    'use strict';

    angular
        .module('global.sidemenu')
        .directive('menuToggle', menuToggle);

    menuToggle.$inject = ['$rootScope'];

    /* @ngInject */
    function menuToggle ($rootScope) {
        // Usage:
        // <div menu-toggle="{id of element you wish to toggle}"></div>
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
        	jq(element).on('click', function () {
               toggleMenu(attrs.menuToggle);
               jq(this).toggleClass('active');
            });

            $rootScope.$on('menu.close', function handleClose( event ) { 
                toggleMenu(attrs.menuToggle);
            });

            $rootScope.$on('menu.open', function handleClose( event ) { 
                toggleMenu(attrs.menuToggle);
            });
		}
    }

    /**
     * Toggle Menu Element
     * @param  {string}  attr   
     * @param  {Boolean} isOpen 
     * @return {Boolean}         
     */
    function toggleMenu(attr) {
    	var target = jq('#'+attr);

        if (target.hasClass('open')) {
    		target.removeClass('open');
            return false;
        } else {
    	   target.addClass('open');	
           return true;
    	}
    };


})();
(function() {
    'use strict';

    angular
        .module('global.flash')
        .directive('abFlash', abFlash);

    abFlash.$inject = ['$rootScope', '$timeout', 'mailService', 'flash', 'errors'];

    /* @ngInject */
    function abFlash ($rootScope, $timeout, mailService, flash, errors) {
        // Usage:
        // <div ab-flash></div>
        var directive = {
            bindToController: true,
            controller: Controller,
            controllerAs: 'vd',
            link: link,
            templateUrl: '/ngViews/global/flash.html',
            restrict: 'A',
            scope: {
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
					 var el = jq(element);
					 var vd = scope.vd;
					 	    vd.closeFlash = closeFlash;
					 	    vd.close = false;
					 	    vd.actionButton = false;
					 	    vd.event = false;


					 	    vd.actionSubmit = actionSubmit;
                

					 /**
					  * Display the Flash in an Error Format with Close
					  * @note add button in flash to alert technology - will be sent through mailService
					  * 
					  */		 
					 $rootScope.$on('flash.error', function handleErrorFlash( event, message) {
					 		vd.close = true;
					 		el.addClass('error').addClass('open');
					 		vd.heading = message;
					 		vd.actionButton = true;
					 		vd.actionEvent = errors.getReason().status;
					 		vd.actionText = 'Alert Us'; 
					 });

					 /**
					  * Display the Flash in an Success Format
					  */
					 $rootScope.$on('flash.success', function handleSuccessFlash( event, message) {
					 		el.addClass('success').addClass('open');
					 		vd.heading = message;
					 		$timeout(closeFlash, 3000);
					 });

					 /**
					  * Display the Flash in an Warning Format ready for Close
					  */
					 $rootScope.$on('flash.warning', function handleWarningFlash( event, message) {
					 		vd.close = true;
					 		el.addClass('warning').addClass('open');
					 		vd.heading = message;
					 		$timeout(closeFlash, 3000);
					 });

					 /**
					  * Display the Flash in an Info Format
					  */
					 $rootScope.$on('flash.info', function handleInfoFlash( event, message) {
					 		el.addClass('info').addClass('open');
					 		vd.heading = message;
					 		$timeout(closeFlash, 3000);
					 });

					 /**
					  * Close the Flash
					  * @return {DOM} 
					  */
					 function closeFlash() {
					 		el.removeClass('open');
					 }

                    /**
                     * When Button is clicked send Allert Mail
                     * 
                     */
					 function actionSubmit() {
					    
					     var AlertData = {
					       name: 'hack master',
					       email: 'zackd@assetbuilder.com',
					       phone: null,
					       bestContactTime: null,
					       question: null,
                           survey: null,
					       subject: 'The Alert Button was pressed',
					       message: 'User saw a error message.   The status code is ' +  vd.actionEvent + '. ' +  errors.getReason().insertedObject,
					       formType: 'alertMessage',
					       alertMessage: vd.heading,
					    }


					     return mailService.sendAlert(AlertData)
                            .then(function (data) {
                      
                                if (data.status === 200) {
                                    closeFlash();
                                    $timeout(function () {
                                        flash.success('Thanks for alerting us.  Our team will look into the problem shortly.');
                                    }, 300);
                                    
                                }
                               
                                vd.actionButton = false;
                            });

                            
                            
					 }
        }
    }

    /* @ngInject */
    function Controller () {

    }

})();
(function() {
    'use strict';

    angular
        .module('global.flash')
        .factory('flash', flash);

    flash.$inject = ['$log', '$rootScope'];

    /* @ngInject */
    function flash($log, $rootScope) {
        
        var service = {
            error: error,
            info: info,
            success: success,
            warning: warning,

            log: $log.log
        };
        return service;

        ////////////////


        function error(message, data, title) {
            $log.error('Error: ' + message, data);
            $rootScope.$emit('flash.error', message);
        }

        function info(message, data, title) {
        	$log.info('Info: ' + message, data);
            $rootScope.$emit('flash.info', message);
        }

        function success(message, data, title) {
        	$log.info('Success: ' + message, data);
            $rootScope.$emit('flash.success', message);
        }

        function warning(message, data, title) {
        	$log.warn('Warning: ' + message, data);
            $rootScope.$emit('flash.warning', message);
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('global.errors')
        .factory('errors', errors);

    errors.$inject = ['flash'];

    /* @ngInject */
    function errors(flash) {
        var errorReason = null;

        var service = {
            catcher: catcher,
            getReason: getReason
        };
        
        return service;

        ////////////////

        /**
         * Catch the Error and Display a Error Flash
         * @param {string} Message to display
         * @param {string} reason for Console.
         */
        function catcher(message) {
           return function (reason) {
                reason.insertedObject = (reason.insertedObject == null) ? 'none' : reason.insertedObject;
                errorReason = reason;
        		flash.error(message, reason);
        	}
        }

        /**
         * Get reason for mailing
         * @return {string} 
         */
        function getReason() {
            return errorReason;
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('global.errors')
        .provider('errorHandler', exceptionHandlerProvider)
        .config(config);

    
    /**
     * Must Configure the exception handling
     */
     function exceptionHandlerProvider() {
        /* jshint validthis:true */
        this.config = {
            appErrorPrefix: undefined
        };

        this.configure = function (appErrorPrefix) {
            this.config.appErrorPrefix = appErrorPrefix;
        };

        this.$get = function() {
            return {config: this.config};
        };
    }

    config.$inject = ['$provide'];

	/**
     * Configure by setting an optional string value for appErrorPrefix
     * @param  {object} $provide 
     * @ngInject
     */
    function config($provide) {
        $provide.decorator('$exceptionHandler', extendExceptionHandler);
    }


    extendExceptionHandler.$inject = ['$delegate', 'errorHandler'];

    /**
     * Extend the $exceptionHandler servie to also display our Flash
     * @param  {Object} $delegate        
     * @param  {Object} exceptionHandler 
     * @param  {Object} flash            
     * @return {function} the decorated $exceptionHandler service
     */
     function extendExceptionHandler($delegate, errorHandler) {
        return function(exception, cause) {
            var appErrorPrefix = errorHandler.config.appErrorPrefix || '';
            var errorData = {exception: exception, cause: cause};
            exception.message = appErrorPrefix + exception.message;
            $delegate(exception, cause);
           // flash.error(exception.message, errorData);
        };
    }

   
})();
/*
|--------------------------------------------------------------------------
| Dropdown on click 
|--------------------------------------------------------------------------
|
| Mostly made for mobile but reveals dropdonw on clikc.  
| Desktop will show on hover;
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.navigation')
        .directive('dropdown', dropdown);

    /* @ngInject */
    function dropdown () {
        // Usage:
        // <li data-dropdown></li>
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
        	var trigger = jq(element[0]);
        	var menu = trigger.children('.dropdown-menu');

        	trigger.on('click', function (e) {
        		

        		if (trigger.hasClass('open')) {
        			menu.slideUp(500);
        			trigger.removeClass('open');
        		} else {
        			menu.slideDown(500);
        			trigger.addClass('open');
        		}
        	});
        }
    }

    
})();
/*
|--------------------------------------------------------------------------
| Go Home Directive
|--------------------------------------------------------------------------
|
| When someone clicks this directive it takes you back home.
| 
*/
(function() {
    'use strict';

    angular
        .module('mcdaniel.navigation')
        .directive('goHome', goHome);

    /* @ngInject */
    function goHome () {
        // Usage:
        // <a go-home></a>
        var directive = {
            link: link,
            restrict: 'A',
        };
        return directive;

        function link(scope, element, attrs) {
        	var home = jq(element[0]);

        	//Go Home
        	home.on('click', function () {
        		window.location = '/'
        	})

        }
    }

})();
/// <reference path="navigationURIWatcherDirective.js" />
/* 
|-----------------------------------------------------------------
| Navigation URI Watcher Directive
|-----------------------------------------------------------------
|
| Watches the uri and scroll the page if it detects a hashbang
|
*/

(function () {
    'use strict';

    angular
        .module('mcdaniel.navigation')
        .directive('navigationUriWatcher', navigationUriWatcher);

    navigationUriWatcher.$inject = ['$location'];

    function navigationUriWatcher($location) {
        //Usage
        // <div navigation-Uri-Watcher
        var directive = {
            link: link,
            restrict: "A"
        }

        return directive;

        function link(scope, element, attr) {
           var vm = scope;
           vm.hashBang = null;

           if (checkLink()) {
                scrollToElement(vm.hashBang, 110, 300);
            } else {
                return false;
            }

            function checkLink() {
                var url = $location.absUrl();
                var parts = url.toString().split('#');

                if (parts.length > 1) {
                    var getHashbang = parts[1].toString().split('/');
                    vm.hashBang = getHashbang[1];
                    return true;
                } else {
                    return false;
                }
            }


            /** 
            * Scroll to the Anchor
            * @param  {string} target   id of anchor
            * @param  {int} offset      navigation height
            * @param  {int} duration    in ms
            * @return {DOM}          
            */
            function scrollToElement(target, offset, duration) {

                var pixel = jq('#' + target).offset().top - offset;

                /** @note use body and html for safari */
                jq('html, body').animate({
                    scrollTop: pixel
                }, duration);

                return;
            }
        }
    }


})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.navigation')
        .directive('scrollSpy', scrollSpy);

    scrollSpy.$inject = ['$window', '$document', 'common'];
    scrollSpyController.$inject = ['$scope'];

    /* @ngInject */
    function scrollSpy ($window, $document, common) {
        // Usage:
        // <div scroll-spy></div>
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: scrollSpyController,
            controllerAs: 'vd',
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs, common) {
            var vd = scope.vd;
                vd.spyElements = [];
                vd.navigationHeight = 93;

            scope.$watch('vd.spies', watchSpies(vd.spies));

            return angular.element($window).bind('scroll', scrollWatcher);

            /**
             * Watch the Spies array and return the element that matches
             * @param  {array} spies 
             * @return {array}       
             */
            function watchSpies(spies) {
                var spy,
                    results = [];

                for (var i = 0; i < spies.length; i++) {
                    spy = spies[i];
                    if (vd.spyElements[spy.id] == null) {
                        results.push(vd.spyElements[spy.id] = jq('#'+spy.id));
                    } 
                }

                return results;
            }


            /**
             * Highlight the Spy
             * @return {function} 
             */
            function scrollWatcher() {
                var spy, activeSpy;
                

                for(var i = 0; i < vd.spies.length; i++) {
                    spy = vd.spies[i];
                    spy.out();

                    vd.spyElements[spy.id] = vd.spyElements[spy.id].length === 0 ? jq('#'+spy.id) : vd.spyElements[spy.id];
                    var pos = jq(vd.spyElements[spy.id]).offset().top
    
                    if (pos - $window.scrollY <= vd.navigationHeight) {
                        spy.pos = pos;
                        if (activeSpy == null) {
                            activeSpy = spy;
                        }

                        if (activeSpy.pos < spy.pos) {
                            activeSpy = spy;
                        }
                    }

                }
                return activeSpy != null ? activeSpy["in"]() : void 0;
            }

            
    

        } //Link
    } //Directive

    /* @ngInject */
    function scrollSpyController ($scope) {
        var vd = $scope.vd;
            vd.spies = [];
            vd.addSpy = addSpy;
            vd.scrollTo = scrollTo;
        


        return vd;

        /**
         * Add a spy to the spies array
         * @param {spy directive} spyObject 
         */
        function addSpy(spyObject) {
            return vd.spies.push(spyObject);
        }


        function scrollTo(spyObject) {

        }
    }
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.navigation')
        .directive('smoothScroll', smoothScroll);

    smoothScroll.$inject = ['$window', 'common'];
    
    /* @ngInject */
    function smoothScroll ($window, common) {
        // Usage:
        //	<a smooth-scroll></a>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
            var vm = scope;
            vm.hashbang = null;

            var _duration = 300,
                _offset = 110;

            /** Bind to Click  */
            jq(element).on('click', function () {
                var id = attrs.spy;
                scrollToElement(id, _offset, _duration);
            });

          
            /** 
             * Scroll to the Anchor
             * @param  {string} target   id of anchor
             * @param  {int} offset      navigation height
             * @param  {int} duration    in ms
             * @return {DOM}          
             */
            function scrollToElement(target, offset, duration) {
              
                var pixel = jq('#' + target).offset().top - offset;
                
                /** @note use body and html for safari */
                jq('html, body').animate({
                    scrollTop: pixel
                }, duration);

                return;
            }


         
        }
    }

})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.navigation')
        .directive('spy', spy);

    /* @ngInject */
    function spy () {
        // Usage:
        // <a spy="id"></a>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
            require: "^scrollSpy",
        };
        return directive;

        function link(scope, element, attrs, scrollSpy) {
    		
            /**
    		 * Add Spy Attribute to the Scroll Spy Directive Watch List
    		 * @return {object}
    		 */
    		return scrollSpy.addSpy({
    			id: attrs.spy,
    			"in": function () {
    				return element.addClass('active');
    			},
    			out: function () {
    				return element.removeClass('active');
    			}
            });
		}
    }

})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.pages')
        .directive('tabbedServices', tabbedServices);

    /* @ngInject */
    function tabbedServices () {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	target: "@"
            }
        };
        return directive;

        function link(scope, element, attrs) {
        	console.log('message');

        	var el = jq(element);
        	var target = jq('#' + scope.target);

        	el.on('click', function (e) {
        		e.preventDefault();
				target.addClass('open').siblings('.m-tabbed-info').removeClass('open');
        		el.addClass('active').siblings('.active').removeClass('active');
        	});
        }
    }

    
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.shared')
        .directive('browseHappy', browseHappy);


    
    function browseHappy () {
        // Usage:
        //     <div browse-happy></div>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'A',
            replace: true,
            templateUrl: '/ngViews/global/browse-happy.html'
        };
        return directive;

        function link(scope, element, attrs) {
                
        }
    }

})();
/*
|--------------------------------------------------------------------------
| Google Analytics Click Events Directive
|--------------------------------------------------------------------------
|
|  Will registerd a click event with Google Analytics
|  @note universal Analytics variable _ga
|  @category - category of event
|  @action = action the user is performing
|  @name = name of the click event in Google Analytics.
|  @value = Value you place for click
*/
(function() {
    'use strict';

    angular
        .module('mcdaniel.shared')
        .directive('googleClick', googleClick);

    /* @ngInject */
    function googleClick () {
        // Usage:
        // <div google-click category="" action=""  name=""></div>
        // Example
        // <div google-click category="survey" action="open-survey" name="homepage-open-survey" value=""></div>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	category: '@',
            	action: '@',
            	name: '@',
            	value: '@'
            }
        };
        return directive;

        function link(scope, element, attrs) {
        	element.on('click', function () {
        		_ga('send', 'event', scope.category, scope.action, scope.name, scope.value);
        	});
        }
    }

  
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.shared')
        .directive('instaFeed', instaFeed);

    /* @ngInject */
    function instaFeed () {
        // Usage:
        // <div instafeed></div>
        var directive = {
            link: link,
            restrict: 'A',
            templateUrl: '/templates/shared/instafeed.html'
        };
        
        return directive;

        function link(scope, element, attrs) {
        	 console.log('testing');

        	 var feed = new Instafeed({
        		get: 'user',
        		userId: 13141599,
        		sortBy: 'most-recent',
        		limit: 8,
        		clientId: 'b867a55a04494dd7a0a013ca52d35188'
			});
    		
    		feed.run();
        }
    }

    
})();
/*
|--------------------------------------------------------------------------
| Ng Repeat Render Finalizer Driective
|--------------------------------------------------------------------------
|
| Tells the parent scope that the ng-repeat has finialized
| Wrapped in timeout instead of .ready so the $apply
| will run in the digest loop. 
|
| @note only used with ng-repeat {https://docs.angularjs.org/api/ng/directive/ngRepeat}
| Example at rangeSliderLabelsDirective.js
|
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.shared')
        .directive('onFinishRender', onFinishRender);

    /* @ngInject */
    function onFinishRender () {
        // Usage:
        // <div ng-repeat="" on-finish-render="callbackFunction"></div>
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
			if (scope.$last === true) {
                scope.$evalAsync(attrs.onFinishRender);
			}
        }
    }



})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.shared')
        .directive('open', open);

    /* @ngInject */
    function open () {
        // Usage:
        //  <div slide-down target-id="{{ target id attribute }}"></div>
        
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	targetId: "@"
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
        	var target = jq('#' + scope.targetId);

        	jq(element).on('click', function () {
        		target.toggleClass('open');
            });	
        
        }
    }

    
})();
/*
|--------------------------------------------------------------------------
| Overlay Directive
|--------------------------------------------------------------------------
|
| Creates Overlay of Site for
| Full screen interaction.
| 
|
*/			
(function() {
    'use strict';

    angular
        .module('mcdaniel.shared')
        .directive('overlay', overlay);

    /* @ngInject */
    function overlay () {
        // Usage:
        // <div overlay></div>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	targetId: "@"
            }
        };
       
        return directive;

        function link(scope, element, attrs) {
        	jq(element).on('click', function (e) {
        		e.preventDefault();
        		openOverlay(scope.targetId);
        		jq(this).toggleClass('active');
                jq('body').toggleClass('nav-open');
        	})
        }
    }

    function openOverlay(target) {
    	var element = jq('#'+ target);

    	if (element.hasClass('open')) {
    		element.removeClass('open');
    	} else {
    		element.addClass('open');
    	}

    }
    
})();
/*
|--------------------------------------------------------------------------
| Slide Down Directive
|--------------------------------------------------------------------------
|
| Will add the Class open and slide-down to any id on the page listing in the target-id attribute
| @note to just add the open class use the open directive.
|
*/
(function() {
    'use strict';

    angular
        .module('mcdaniel.shared')
        .directive('slideDown', slideDown);

    /* @ngInject */
    function slideDown () {
        // Usage:
        //  <div slide-down target-id="{{ target id attribute }}"></div>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	targetId: "@"
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
        	var target = jq('#' + scope.targetId);


            /**
             * On Click Find the the element and toggle the class
             * @param  {target}  element
             * @param  {event} e
             * @return {DOM} 
             */
        	jq(element).on('click', function (e) {
                e.preventDefault();
        		if (target.hasClass('open')) {
        			target.slideUp(500)
        		} else {
        			target.slideDown(100, function () {
                        scrollToTarget(target.offset().top);    
                    });
                    
        		}
        
        		target.toggleClass('open');
                jq(this).toggleClass('active');

                
        	});	

            
            /**
             * Scroll to the Target {mainly for mobile}
             * @return {DOm}
             */
            function scrollToTarget(top) {
                jq('html, body').animate({
                    scrollTop: (top-96)
                }, 200);
            }
        
        }
    }

    
})();
/*
|--------------------------------------------------------------------------
| Line Chart Object Factory
|--------------------------------------------------------------------------
|
|
*/
(function() {
  'use strict';

  angular
      .module('assetbuilder.survey')
      .factory('ExpectedChart', runChart);

        runChart.$inject = ['surveyUtilities', 'common'];

        /* @ngInject */
        function runChart(surveyUtilities, common) {
              /**
               * Constructor
               */
              function ExpectedChart () {
                this.init.apply(this, arguments);
        
              };

        /*
        |--------------------------------------------------------------------------
        | Setup Initial Data
        |--------------------------------------------------------------------------
        |
        */

              /**
               * Set the Size of the container
               * @return {int} 
               */
              ExpectedChart.prototype.updateSize = function () {
      	        this.margin = {top: 1, right: 20, bottom:40, left:20};
      	        this.elWidth = this.settings.containerEl.outerWidth();
      	        this.elHeight = this.settings.containerEl.outerHeight();

                this.width = this.elWidth - this.margin.left - this.margin.right;
      	        this.height = this.elHeight - this.margin.top - this.margin.bottom;
              };


 
      
              /**
               * Render the container for the chart
               * @return {[type]} [description]
               */
              ExpectedChart.prototype.renderContainer = function () {
                this.container = this.container || d3.select(this.settings.containerEl[0]);
                this.outerSVG =  this.outerSVG  || this.container.select('svg');

                var padding = 20;

                this.outerSVG
                  .attr('width', this.width - padding)
                  .attr('height', this.height - padding);
              };


  
              /**
               * Setup the Initial Data for Animation Transition
               * @return {object} 
               */
              ExpectedChart.prototype.setupStartData = function () {
                var self = this;

        
                this.startData =  this.startData || this.settings.data.map( function (datum) {
                  return {
                    Year: datum.Year,
                    ExpectedReturn: self.settings.data[0].ExpectedReturn,
                    lowerBoundSTDev1: self.settings.data[0].ExpectedReturn,
                    upperBoundSTDev1: self.settings.data[0].ExpectedReturn,
                    lowerBoundSTDev2: self.settings.data[0].ExpectedReturn,
                    upperBoundSTDev2: self.settings.data[0].ExpectedReturn
                  }  
                });
              }


              ExpectedChart.prototype.updateStartData = function () {
                var self = this;

                var last = self.settings.data.length-1;
                this.startData = this.settings.data.map(function (datum) {
                  return {
                    Year: datum.Year,
                    ExpectedReturn: self.settings.data[0].ExpectedReturn,
                    lowerBoundSTDev1: self.settings.data[0].lowerBoundSTDev1,
                    upperBoundSTDev1: self.settings.data[0].upperBoundSTDev1,
                    lowerBoundSTDev2: self.settings.data[0].lowerBoundSTDev2,
                    upperBoundSTDev2: self.settings.data[0].upperBoundSTDev2,
                  }
                });    
              }

        /*
        |--------------------------------------------------------------------------
        | Render the Scales and Setup Axiseseses.
        |--------------------------------------------------------------------------
        |
        */

              /**
               * Render D3 Scales to setup chart
               * @return {} [description]
               */
              ExpectedChart.prototype.renderScales = function () {
      	        //X Axis 
      	        this.xScale = this.xScale || d3.scale.linear()
                this.xYearScale = this.xYearScale || d3.scale.linear();
      	
                this.xScale
                  .domain([this.settings.data[0].Month, this.settings.data[this.settings.data.length-1].Month])
                  .range([0, this.width]); 

                this.xYearScale
                  .domain([this.settings.data[0].Year, this.settings.data[this.settings.data.length-2].Year])
                  .range([0, this.width]);

                this.xScale.reverse;
        
        
                //Y Axis
      	        this.yScale = this.yScale || d3.scale.linear();
        
                /** Change Domain for Withdrawl */
      	        if (!this.settings.withdrawl) {
                  var yStart = d3.min(this.settings.data, function (d) { return d.lowerBoundSTDev2});
                  var yEnd = d3.max(this.settings.data, function (d) { return d.upperBoundSTDev2 });
                  this.yScale
                    .domain([yStart, yEnd]);
                } else {
                  this.yScale
                    .domain([0,  this.settings.data[0].upperBoundSTDev2])
                }


      	
        

                this.yScale
                  .range([(this.height - this.margin.top), 0]);

        
              };

              /**
               * Render the X Axis
               * @return {SVG} 
               */
              ExpectedChart.prototype.renderXAxis = function () {
                this.xAxis =  this.xAxis || d3.svg.axis().scale(this.xYearScale).orient('bottom');
      	        this.xAxisDraw = this.xAxisDraw || this.outerSVG.append('g'); 

                this.xAxisDraw
      		        .attr('class', 'line-chart__xAxis')
      		        .attr( 'transform', 'translate(0, ' + (this.height) + ')' )
        	        .call(this.xAxis);
              };


              /**
               * Render the Y Axis;
               * @return {SVG} 
               */
              ExpectedChart.prototype.renderYAxis = function () {
                this.yAxisDraw = this.yAxisDraw || this.outerSVG.append('g');


                this.yAxis =  this.yAxis || d3.svg.axis().scale(this.yScale).orient('left').tickFormat(function (d) { return surveyUtilities.formatReturn(d) }),
                this.yAxisTicks = this.yAxisTicks || d3.svg.axis().scale(this.yScale).orient('left').ticks(this.settings.data.length-1).tickSize(-this.height).tickFormat('');

                this.yAxisDraw
                  .attr('class', 'line-chart__yAxis')
                  .attr('transform', 'translate('+ 0 +')') //Might need to be this.margin.left but I didn't like it. 
                  .call(this.yAxis);
              }


      


        /*
        |--------------------------------------------------------------------------
        | Main Lin and Area Rendering
        |--------------------------------------------------------------------------
        |
        |
        */


              /**
               * Render the Expected Return Link
               * @return {SVG Path} 
               */
              ExpectedChart.prototype.renderMainLine = function () {
                var self = this;

                this.expectedReturnLine = this.expectedReturnLine || d3.svg.line();
                this.expectedReturnPath = this.expectedReturnPath || this.outerSVG.append('path');

                this.expectedReturnLine
                  .interpolate('cardinal')
                  .defined(function (d) { return d.ExpectedReturn > 0; })
                  .x(function (d) {return self.xScale(d.Month) })
                  .y(function (d) {return self.yScale(d.ExpectedReturn) });

    
                this.expectedReturnPath
                  .datum(this.startData)
                  .attr('class', 'line-chart__expected-return')
                  .attr('d', this.expectedReturnLine(this.settings.data))
                  .transition()
                  .duration(function (d) {
                    if (self.isResizing) return 0;
                    return self.settings.duration
                  })
                  .delay(this.settings.delay)
                  .attrTween('d', surveyUtilities.tween(this.settings.data, this.expectedReturnLine));
              }

              /**
               * Render Standard Deviation 1 Area
               * @return {SVG Path} 
               */
              ExpectedChart.prototype.renderMainArea = function () {
                var self = this;

                this.expectedReturnArea = this.expectedReturnArea || d3.svg.area();
                this.STDevOneArea = this.STDevOneArea  || this.outerSVG.append('path');

 
     
                this.expectedReturnArea
                  .interpolate('basis')
                  .defined(function (d) {return d.ExpectedReturn > 0; })
                  .x(function (d) { return self.xScale(d.Month) })
                  .y0(function (d) { return self.yScale(d.lowerBoundSTDev1) })
                  .y1(function (d) {return self.yScale(d.upperBoundSTDev1) });

                this.STDevOneArea
                  .datum(this.startData)
                  .attr('class', 'line-chart__expected-return--area')
                  .attr('fill', 'url(#areaOneGradient)')
                  .attr('d', this.expectedReturnArea(this.settings.data))
                  .transition()
                  .duration(function (d) {
                   if (self.isResizing) return 0;
                   return self.settings.duration
                  })
                  .delay(this.settings.delay)
                  .attrTween('d', surveyUtilities.tween(this.settings.data, this.expectedReturnArea));

              }


              /**
               * Render Standard Deviation 2 Area
               * @return {SVG Path} 
               */
              ExpectedChart.prototype.renderSecondaryArea = function () {
                var self = this;

                this.expectedReturnTwoArea = this.expectedReturnTwoArea || d3.svg.area();
                this.STDevTwoArea = this.STDevTwoArea  || this.outerSVG.append('path');

                this.expectedReturnTwoArea
                  .interpolate('basis')
                  .defined(function (d) {return d.ExpectedReturn > 0; })
                  .x(function (d) {return self.xScale(d.Month) }.bind(this))
                  .y0(function (d) {return self.yScale(d.lowerBoundSTDev2) }.bind(this))
                  .y1(function (d) {return self.yScale(d.upperBoundSTDev2) }.bind(this));


                this.STDevTwoArea
                  .datum(this.startData)
                  .attr('class', 'line-chart__expected-return--secondary')
                  .attr('fill', 'url(#areaTwoGradient)')
                  .attr('d', this.expectedReturnTwoArea(this.settings.data))
                  .transition()
                  .duration(function (d) {
                   if (self.isResizing) return 0;
                   return self.settings.duration
                  })
                  .delay(this.settings.delay)
                  .attrTween('d', surveyUtilities.tween(this.settings.data, this.expectedReturnTwoArea));

              }


        /*
        |--------------------------------------------------------------------------
        | Circle/Handel Methods
        |--------------------------------------------------------------------------
        |
        |
        */

              /**
               * Draw the Handle and Transition it.
               * @return {SVG:circle} 
               * @note transition needs to be called through this method.
               */
              ExpectedChart.prototype.drawHandle = function () {
                var self = this;
                this.handle = this.handle || this.outerSVG.append('circle');

                this.handle
                  .datum(this.settings.data)
                  .attr('class', 'line-chart__circle')
                  .attr('r', 6)
                  .attr('cx', 0)
                  .attr('cy', 0)
                  .attr('fill', 'url(#handleGradient)')
                  .attr('filter', 'url(#dropshadow)')
                  .transition()
                  .delay(100)
                  .duration(1000)
                  .attr('r', 8)
                  .attr('transform', 'translate('+ this.settings.data[0].ExpectedReturn+')');

                this.transition(this.handle);
              }

              /**
               * Setup of Transistion for Handle to Move
               * @param  {svg:circle} handle 
               * @return {transition()}        
               */
              ExpectedChart.prototype.transition = function (handle) {
                  var self = this;

                  handle
                    .transition()
                    .duration(function (d) {
                      if (self.isResizing) return 0;
                      return self.settings.handleDuration;
                    })
                    .attrTween('transform', this.translateAlongPath(this.expectedReturnPath.node()))
                    .each('end', null);
              }

              /**
               * Move the Handle up the MainLine
               * @param  {mainRenderLine} path 
               * @return {int}      
               */
              ExpectedChart.prototype.translateAlongPath = function (path){
                var self = this;
         
                 var length = path.getTotalLength();
                  return function (d, i, a) {
                      return function (t) {
                          var points = path.getPointAtLength(t * length);
                          var amount = (self.yScale.invert(points.y) <= 0) ? 0 : self.yScale.invert(points.y); 
                          self.updateMoneyLabel(parseInt(amount));
                          return "translate(" + points.x + ',' + points.y + ")";
                      }
                  }
              }


        /*
        |--------------------------------------------------------------------------
        | Labels
        |--------------------------------------------------------------------------
        |
        */

            /**
             * Draw the Label to show Money value of expected Return;
             * @note start with lowest value;
             * @return {SVG Text} 
             */
            ExpectedChart.prototype.drawLabel = function () {
                this.moneyLabel = this.moneyLabel || this.outerSVG.append('g');

                var placement = {
                  width: 50,
                  height: 50
                }
        
                if (this.settings.withdrawl) {
                  placement.width = this.width - 150;
                  placement.height = 50
                }

                this.moneyLabel
                  .append('text')
                  .datum(this.settings.data)
                  .attr('x', placement.width)
                  .attr('y', placement.height)
                  .attr('class', 'line-chart__money')
                  .text('')
                  .text(function (d) { 
                    return surveyUtilities.printCurrency(parseInt(d[0].ExpectedReturn));
                   });
            }

            /**
             * Drew the withdrawl label to alert user to how many years portfolio will last
             * @return {svg:text} 
             */
            ExpectedChart.prototype.drawWithdrawlLabel = function () {
              this.withdrawlLabel = this.withdrawlLabel || this.moneyLabel.append('text');

              var placement =  {
                width: this.width - 230,
                height: 80
              };

              var year  = parseInt(this.settings.lastMonth/12);
              var month = this.settings.lastMonth%12;
              var pluralYear = (year < 2) ? "Year" : "Years";
              var pluralMonth = (month < 2) ? "Month" : "Months";
      
              this.withdrawlLabel
                .attr('class', 'line-chart__portfolio-last')
                .attr('x', placement.width)
                .attr('y', placement.height)
                .text("We estimate your Portfolio will last " + year + ' ' + pluralYear + ' and ' + month + ' ' + pluralMonth);
            }

            /**
             * Draw the performance Label
             * @return {svg:text} [description]
             */
            ExpectedChart.prototype.drawPerformanceLabel = function () {
              this.performanceLabel = this.performanceLabel || this.moneyLabel.append('text');

              var placement = {
                width: this.width-215,
                height: -40
              }


     

              var performanceNumber = this.settings.performance * 100;
                  performanceNumber = parseFloat(performanceNumber).toFixed(2)

              this.performanceLabel
                .attr('class', 'line-chart__performance-label')
                .attr('x', placement.width)
                .attr('y', placement.height)
                .text('Based on a performance: ' + (performanceNumber) + '%');
            }


            /**
             * Update the money label onthe transition of the handle
             * @param  {int} amount     
             * @return {svg:text}
             */
            ExpectedChart.prototype.updateMoneyLabel = function (amount) {
              d3.select('.line-chart__money').text(surveyUtilities.printCurrency(amount));
            }

    
            /**
             * Draw the Years Label
             * @return {svg:text} 
             */
            ExpectedChart.prototype.drawXAxisLegend = function () {
              this.xAxisLegend = this.xAxisLegend || this.xAxisDraw.append('text');

              this.xAxisLegend
                .attr('class', 'line-chart__yaxis-legend')
                .attr('x', (this.width/2))
                .attr('y', 50)
                .text('Year');
            }





        /*
        |--------------------------------------------------------------------------
        | Initalization and Object Return
        |--------------------------------------------------------------------------
        | This needs to stay the botttom
        |
        */


              /**
               * Initalize the Object and run the methods
               * @param  {object} opts 
               * @return {null}      
               */
              ExpectedChart.prototype.init = function (opts) {
                var self = this;
                this.settings = this.settings || opts
        
                this.update(opts);

                //Only Resizing evey call evey 350ms 
                var resizeCallback = common.debounce(function () {
                  self.isResizing = false;
                }, 350);

                //On Window Resize
                jq(window).on('resize', function() {
                    this.resize();
                    resizeCallback();
                 }.bind(this));


                this.initialized = true;
              }

              /**
               * Update Function
               * @return 
               */
              ExpectedChart.prototype.update = function (opts) {
                  if (opts) this.settings = opts;

                  this.updateSize();
                  this.renderContainer();
          
                  this.renderScales();
                  this.renderXAxis();
                  this.drawXAxisLegend();
                  this.renderYAxis();
          
                  if (this.initialized == undefined) {
                    this.setupStartData();
                  }

          
                  this.setupAreaGradients();
                  this.setupSecondaryAreaGraident();
                  this.setupHandleGradient()
          
                  this.renderSecondaryArea();
                  this.renderMainArea();
                  this.renderMainLine();
                  this.drawHandle();
          
          
                  if (!this.isResizing && this.initialized == undefined) { 
                    this.drawLabel();  
                  } 
          
                  this.drawPerformanceLabel();
          
                  if (this.settings.withdrawl) {
                    this.drawWithdrawlLabel()  
                  } 

                  // this.updateStartData();
              }


        /*
        |--------------------------------------------------------------------------
        | Window Functions
        |--------------------------------------------------------------------------
        |
        |  Updates to the Window and Mobile Changes
        |
        */

            ExpectedChart.prototype.resize = function () {
              this.isResizing = true;
              this.update();
            }


        /*
        |--------------------------------------------------------------------------
        | Data Changes
        |--------------------------------------------------------------------------
        |
        | Changing Data from Portfolio Changes
        |
        */






        /*
        |--------------------------------------------------------------------------
        | Gradients and Colors
        |--------------------------------------------------------------------------
        | 
        |
        */

              /**
               * Setup the Graident for the main area around the line. 
               * @return {graident filter #areaOneGradient} 
               * @note graident set with CSS.
               */
              ExpectedChart.prototype.setupAreaGradients = function () {
                this.mainAreaGradient = this.mainAreaGradient  || this.outerSVG.append("svg:defs").append("svg:linearGradient");

                this.mainAreaGradient
                    .attr("id", "areaOneGradient")
                    .attr("x1", "0%")
                    .attr("y1", "0%")
                    .attr("x2", "100%")
                    .attr("y2", "0%")
                    .attr("spreadMethod", "pad");

                // Define the gradient colors
                this.mainAreaGradient.append("svg:stop")
                    .attr("offset", "0%")
                    .attr("stop-color", "#78A22E")
                    .attr("stop-opacity", 1);

                this.mainAreaGradient.append("svg:stop")
                    .attr("offset", "50%")
                    .attr("stop-color", "#78A22E")
                    .attr("stop-opacity", 0.4);

                this.mainAreaGradient.append("svg:stop")
                    .attr("offset", "80%")
                    .attr("stop-color", "#78A22E")
                    .attr("stop-opacity", 0.2);

                this.mainAreaGradient.append("svg:stop")
                    .attr("offset", "98%")
                    .attr("stop-color", "#F6F5C5")
                    .attr("stop-opacity", 0.1);
              }

              /**
               * Setup the Graident for the secondary deviation Area
               * @return {gradient Filetter #areaTwoGradient} 
               * @note gradient set with CSS
               */
              ExpectedChart.prototype.setupSecondaryAreaGraident = function () {
                this.secondaryAreaGradient = this.secondaryAreaGradient || this.outerSVG.append("svg:defs").append("svg:linearGradient");

                this.secondaryAreaGradient
                    .attr("id", "areaTwoGradient")
                    .attr("x1", "0%")
                    .attr("y1", "0%")
                    .attr("x2", "100%")
                    .attr("y2", "0%")
                    .attr("spreadMethod", "pad");

                // Define the gradient colors
                this.secondaryAreaGradient.append("svg:stop")
                    .attr("offset", "0%")
                    .attr("stop-color", "#c5dd83")
                    .attr("stop-opacity", 1);

                this.secondaryAreaGradient.append("svg:stop")
                    .attr("offset", "50%")
                    .attr("stop-color", "#c5dd83")
                    .attr("stop-opacity", 0.4);

                this.secondaryAreaGradient.append("svg:stop")
                    .attr("offset", "80%")
                    .attr("stop-color", "#F6F5C5")
                    .attr("stop-opacity", 0.1);
              }


              /**
               * Setup the Graident for the Handle
               * @return {gradient Filetter #handleGradient} 
               * @note gradient set with CSS
               */
              ExpectedChart.prototype.setupHandleGradient = function () {
                this.handleGradient = this.handleGradient || this.outerSVG.append("svg:defs").append("svg:linearGradient");

                this.handleGradient
                  .attr('id', 'handleGradient')
                  .attr("x1", "0%")
                  .attr("y1", "0%")
                  .attr("x2", "0%")
                  .attr("y2", "100%")
                  .attr("spreadMethod", "pad");

                this.handleGradient.append("svg:stop")
                  .attr("offset", "0%")
                  .attr("stop-color", "#f5f5f5")
                  .attr("stop-opacity", 1);

                this.handleGradient.append("svg:stop")
                  .attr("offset", "80%")
                  .attr("stop-color", "#f5f5f5")
                  .attr("stop-opacity", 1);    

                this.handleGradient.append("svg:stop")
                  .attr("offset", "100%")
                  .attr("stop-color", "#d4dde2")
                  .attr("stop-opacity", 1);
              }




              return ExpectedChart;
        } //End Function Run Chart



})();
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
/*
|--------------------------------------------------------------------------
| Clear Survey Cookie Directive
|--------------------------------------------------------------------------
|
| clears the survey cookie and reloads the page. 
*/
(function() {
    'use strict';

    angular
        .module('assetbuilder.survey')
        .directive('clearSurveyCookie', clearSurveyCookie);

   clearSurveyCookie.$inject = ['surveyService', '$window', 'common'];

    /* @ngInject */
    function clearSurveyCookie (surveyService, $window, common) {
        // Usage:
        // <a clear-survey-cookie></a>
        var directive = {
            link: link,
            restrict: 'A',
        };
        return directive;

        function link(scope, element, attrs) {
			jq(element[0]).on('click', function (e) {
                e.preventDefault();
				surveyService.removeSurveyCookie();
                $window.location = common.portfolioUrl;	
			});    
        }
    }

    
})();
/*
|--------------------------------------------------------------------------
| Currency Input Directive
|--------------------------------------------------------------------------
|
| Handels Currency input for a text input box
| Add min, max, and precision values
| 
|
*/
(function() {
    'use strict';

    angular
        .module('assetbuilder.survey')
        .directive('currencyInput', currencyInput);

    currencyInput.$inject = ['common'];

    /* @ngInject */
    function currencyInput (common) {
        // Usage:
        // <input currency-input type="text" min="" max="">
        
        var directive = {
            link: link,
            restrict: 'A',
            require: "ngModel",
        };
        
        return directive;

        function link(scope, element, attrs, ngModel) {
            var min, max, precision, lastValidValue, preRoundValue;

            /**
             * Using Parsers to validate the ngModel
             * @param  {int} value
             * @return {array}   
             * @note will return last value if non int is entered.
             */
            ngModel.$parsers.push(function (value) {
                if (angular.isUndefined(value)) { value = ''; }
                var empty = ngModel.$isEmpty(value);

                if (common.isNumber(value)) {
                    lastValidValue = (value === null) ? null : (empty ? formatView(value) : parseInt(value));
                } else if (!empty) {
                    ngModel.$setViewValue(formatView(lastValidValue)); 
                    ngModel.$render();
                } else {
                   return undefined;
                }
                

                ngModel.$setValidity('number', true);
                return lastValidValue;

                return value
            }); 


            /**
            * After Parsing the information from above add the format of commas and decimal points;
            * @note should run last.
            */
            ngModel.$formatters.push(formatView);

          
            /**
             * Grab the min attributes and validate the input
             * @param  {int} value 
             * @return {int}        
             */
            if (angular.isDefined(attrs.min)) {
                attrs.$observe('min', function(value) {
                    min = parseInt(value || 0);
                    minValidator(ngModel.$modelValue);
                });

                ngModel.$parsers.push(minValidator);
                ngModel.$formatters.push(minValidator);
            }

            
            /**
             * Grab the max attributes and validate the input
             * @param  {int} value)  
             * @return {validator}        
             */
            if (angular.isDefined(attrs.max)) {
                attrs.$observe('max', function (val) {
                    max = parseInt(val);
                    maxValidator(ngModel.$modelValue);
                })

                ngModel.$parsers.push(maxValidator);
                ngModel.$formatters.push(maxValidator);
            }       

            /**
             * Round off the number based on precision attribute
             * @param  {int} value
             * @return {mixed}        
             */
            if (angular.isDefined(attrs.precision)) {
                attrs.$observe('precision', function (value) {
                    var parsed = parseInt(value);
                    precision = !isNaN(parsed) ? parsed : 2;
                });     
            }

            /**
             * Format the Value
             * @param  {int} value
             * @return formatted Values
             */
            ngModel.$formatters.push(function (value) {
                return value ? formatPrecision(value) : value;
            })

            
            /** 
             * Set the Last Valid Value
             * @param  {int} value)
             * @return {int} 
             */
            ngModel.$parsers.push(function (value) {
                if (value && value >= attrs.min || value === 0) {
                    lastValidValue = round(value);
                    return lastValidValue;
                } else {
                    return undefined;
                }
            });


            /**
             * Format Input on Blur
             * @param  {ngModel} 
             * @return {int} 
             */
            jq(element).on('blur', function () {
                var value = ngModel.$modelValue;
                if (value) {
                    ngModel.$viewValue = formatPrecision(value);
                    ngModel.$render();
                }
            });


            jq(element).on('focus', function () {
                var value = ngModel.$modelValue;
                if (value) {
                    ngModel.$viewValue = '';
                    ngModel.$render();
                }
            });

            

            /*
            |--------------------------------------------------------------------------
            | In Link Helper
            |--------------------------------------------------------------------------
            |
            | Helper functions that will work on the model
            | Do not remove from link function.
            | 
            |
            */


            /**
             * Add Decimal Points to Value
             * @param  {int} value 
             * @return {float}       
             */
            function formatView(value) {
                var val =  ngModel.$isEmpty(value) ? '' : '' + common.addCommas(value);
                return val;
            }

           
             /**
             * Check to see if input is less than min
             * @param  {int} value [input value]
             * @return {validator} 
             */
            function minValidator(value) {
                if (!ngModel.$isEmpty(value) && value < min) {
                    ngModel.$setValidity('min', false);
                    return undefined;
                } else {
                    ngModel.$setValidity('min', true);
                    return value;
                }
            }

            /**
             * Check to see if input is more than max
             * @param  {int} value [Input value]
             * @return {validator}      
             */
            function maxValidator(value) {
                if (!ngModel.$isEmpty(value) && value > max) {
                    ngModel.$setValidity('max', false);
                    return undefined;
                } else {
                    ngModel.$setValidity('max', true);
                    return value;
                }
            }

             /**
             * Get a rounded number based on the precision setup. 
             * @param  {Int} num  [Number to be Rounded]
             * @return {int} Rounded Number 
             */
            function round(num) {
                var d = Math.pow(10, precision);
                return Math.round(num * d) / d;
            }

            /**
             * REturn a string that respresents the rounded number
             * @param  {Int} value [Number to be rounded]
             * @return {String} 
             */
            function formatPrecision(value) {
                var val =  value.toFixed(precision);
                val = common.addCommas(val);
                return val;
            }


            
        
        } //End Link
    } //End Directive


})();
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
(function() {
    'use strict';

    angular
        .module('assetbuilder.survey')
        .directive('openAccountButton', openAccountButton);

    openAccountButton.$inject = ['surveyService', '$window'];

    /* @ngInject */
    function openAccountButton (surveyService, $window) {
        // Usage:
        // <div open-account-button></div>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	portfolio: "="
            }
        };
        return directive;

        function link(scope, element, attrs) {
        	//Add name to cookie 
        	jq(element).on('click', function (e) {
        		e.preventDefault();
        		surveyService.storeSelectedPortfolio(scope.portfolio);
                $window.location = '/open-account';
            });
        
        }
    }

    
})();
/*
|--------------------------------------------------------------------------
| Survey Form Directive
|--------------------------------------------------------------------------
|
| Build the Survey Form. Uses range-slider and currency input directives.
|
*/
(function() {
    'use strict';

    angular
        .module('assetbuilder.survey')
        .directive('surveyForm', surveyForm);

    
    /* @ngInject */
    function surveyForm () {
        // Usage:
        // <div survey-form investment-type></div>
        var directive = {
            bindToController: true,
            controller: surveyFormController,
            controllerAs: 'vd',
            replace:true,
            templateUrl: '/ngViews/survey/survey-form.html',
            restrict: 'A',
            scope: {
            	investmentType: "="
            }
        };
        
        return directive;
    }


    surveyFormController.$inject = ['$scope', '$window', 'surveyService', 'common'];

    /* @ngInject */
    function surveyFormController ($scope, $window, surveyService, common) {
    	var vd = $scope.vd;
    	vd.monthly_change_text = 'add';

    	
    	var button = document.getElementById('submitSurvey');
    	button.addEventListener('touchend', function () {
    	    submitSurvey();
    	})

		    	//Survey Inputs
		    	vd.inputs =  {
		    		initialInvestment : null,
		    		addMonthly: null,
		    		investmentTimeline: 13,
		    		investmentRisk: 2,
		    		investmentType: vd.investmentType,
		    		date: new Date(),
		    		expire: setExpire()
					}

		    	//Time Range Slider Options  
					vd.timeSlider = {
		          from: 2,
		          to: 25,
		          step: 1,
		          dimension: 'Years',
		          smooth: true,
		          round: 1,
		          scale: [2, '|', 5, "|", 10, "|", 15, "|", 20 ,"|", 25],  //Needs to be changed back to withdrawal for 1 when the equations is completed.
		          callback: function (value, released) {
		              if (released) {
                          //Uncomment when Equation for Compounding STD on Withdrawl.
		                  //changeAdditionalInput(value);    
		              }
		          }
		      };

		      //Risk Range Slider Options  
		      vd.riskSlider =  {
		          from: 1,
		          to: 3,
		          step: 1,
		          scale: ['Conservative',  "Moderate",  "Aggressive"],
		          realtime: true,
		          smooth: true, 
		          modelLabels: {
		              1: 'Conservative', 
		              2: 'Moderate', 
		              3: 'Aggressive'
		          }
		      };


		      jq('#initialAmount').on('focusout', function () {
		          window.dataLayer = window.dataLayer || [];
		          window.dataLayer.push({
		              'survey-initialInvestment': vd.inputs.initialInvestment
		          });
		      });

		      /** Methods */
		      vd.submitSurvey = submitSurvey;

		      /** Run this shiznit */
		      activate();

		  /*
      |--------------------------------------------------------------------------
      | Data Methods
      |--------------------------------------------------------------------------
      |
      */    
      
      function activate() {
      	if (surveyService.isSurveyComplete()) {
      		fillInputsFromCookie();
          if (vd.inputs.investmentTimeline < 2) {
            vd.monthly_change_text = "withdrawl";
          }
      	} else {
      		//Do Nothing. 
      		//...Don't look at me like that
      		//You do something.  
      	}


      }

      /**
       * Get Data from the Cookie and Change out inputs
       * @return {object} 
       * TODO: Expire Cookie after expiration Date;
       */
      function fillInputsFromCookie() {
      	var cookie = surveyService.getSurveyCookie();
      	vd.inputs = cookie;
      }


      /*
      |--------------------------------------------------------------------------
      | Submission Methods
      |--------------------------------------------------------------------------
      |
      */
     

      /**
       * Submit the Survey and Redirect to Our Portfolios
       * @return {location} 
       */
      function submitSurvey() {
        surveyService.storeSurveyCookie(vd.inputs);

        if (vd.inputs.initialInvestment === null) {
            return;
        }

        cleanSurveyInputs();
		$window.location = common.portfolioUrl;
      }
     

     	/**
       * Prepare the Survey Inputs for API
       * @return {object} 
       */
      function cleanSurveyInputs() {
         /** @type {Int} Remove Commas and Decimal Places */
         vd.inputs.initialInvestment = common.removeCommas(vd.inputs.initialInvestment);
         var num = common.removeCommas(vd.inputs.addMonthly);
         
		/** check for withdrawl or addition */
		if (vd.monthly_change_text === "withdrawl") {
            num = -Math.abs(num);
         } else {
            num = Math.abs(num);
         }

         vd.inputs.addMonthly = num;
      }



      /*
      |--------------------------------------------------------------------------
      | Helper Methods
      |--------------------------------------------------------------------------
      |
      */
     
    	/**
       * Get the Date Time for a 90 expiration on the Survey Information
       * @return {Date String}
       */
      function setExpire() {
        var today = new Date();
        var expire = new Date();
        expire.setDate(today.getDate() + 90);
        return expire;
      }


      /**
         * Add and Remove the Addition and Widthdrawl inputs on Slider Change
         * @param  {int} value 
         * @return {boolean}       
         */
        function changeAdditionalInput(value) {
            if (value <= 2) {
                vd.monthly_change_text = "withdrawl";
                vd.timeSlider.dimension = 'Year';
            } else {
                vd.monthly_change_text = "add";
                vd.timeSlider.dimension = 'Years';
            }
        }


    }


})();
(function() {
    'use strict';

    angular
        .module('assetbuilder.survey')
        .factory('surveyUtilities', surveyUtilities);

    surveyUtilities.$inject = ['common'];

    /* @ngInject */
    function surveyUtilities(common) {
        var service = {
            formatReturn : formatReturn,
           	printCurrency :	printCurrency,
            tween : tween
        };
        
        return service;

        ////////////////

				/**
				 * Format the Return Values for Y Axis
				 * @param  {int} num 
				 * @return {string}     
				 */
				function formatReturn(num) {
				    num = num.toFixed(0);

				    if (num.length <= 6) {
				        num = formatHundreds(num)
				    } else  if (num.length > 6) {
				        num = formatMillions(num); 
				    }

				    return num;
				}

					/**
				 * Tween the properties
				 * @param  {Objbect}   b        data to be tweened
				 * @param  {Function} callback  function to tween to
				 * @return {Function}            
				 */
				function tween(b, callback) {
				    return function (a) {
				        var i = d3.interpolateArray(a, b);
				        return function (t) {
				            return callback(i(t));
				        }
				    }
				}

				/**
				 * Print int into a currency
				 * @param  {int} amount 
				 * @return {string}        
				 */
				function printCurrency(amount) {
					return '$' + common.addCommas(amount);
				}


/*
|--------------------------------------------------------------------------
| Private Methods
|--------------------------------------------------------------------------
|
*/


				/**
				 * Format for the 10 thousands (ie.  50,000 to 50K)
				 * @param  {int} num 
				 * @return {string}     
				 */
				function formatTens(num) {
				    var str = num.toString();
				    return '$' + str + 'k';
				}

				/**
				 * Format for the 100 thousands (ie.  500,000 to 500K)
				 * @param  {int} num 
				 * @return {string}     
				 */
				function formatHundreds(num) {
					  num = num/1000;
					  var str = num.toString();
				    return '$' + str + 'k';
				}   


				/**
				 * Format for the 100 thousands (ie.  5,000,000 to 5M)
				 * @param  {int} num 
				 * @return {string}     
				 */
				function formatMillions(num) {
					  num = num/1000000;
					  var str = num.toString();
				    return '$' + str + 'M';
				}

				function formatTenMillions(num) {
					  num = num/1000000;
					  var str = num.toString();

				}


			
    }
})();
(function() {
    'use strict';

    angular
        .module('global.modal')
        .controller('AlertModalController', AlertModalController);

    AlertModalController.$inject = ['$scope', 'modalService'];

    /* @ngInject */
    function AlertModalController($scope, modalService) {
        var vm = this;
        vm.title = 'AlertModalController';

        // Modal Prameters
        vm.title = ( modalService.params().title || "Whoa!" );
       	vm.message = ( modalService.params().message || "Whoa!" );
        vm.action = ( modalService.params().action || "Whoa!" );

        //Close the Modal
        vm.close = modalService.resolve;
    }


})();

(function() {
    'use strict';

    angular
        .module('global.modal')
        .controller('ConfirmModalController', ConfirmModalController);

    ConfirmModalController.$inject = ['$scope', 'modalService'];

    /* @ngInject */
    function ConfirmModalController($scope, modalService) {
        var vm = this;
        var params = modalService.params();
        
    	vm.title = ( params.title || "" );
        vm.message = ( params.message || "" );
    	vm.confirmButton = ( params.confirmButton || "Confirm" );
    	vm.denyButton = ( params.denyButton || "Deny" );

    	vm.confirm = modalService.resolve;
    	vm.deny = modalService.reject;
    }
})();
/*
|--------------------------------------------------------------------------
| HTML Modal Controller
|--------------------------------------------------------------------------
|
| Controller to Insert HTML into a Modal
|
*/

(function() {
    'use strict';

    angular
        .module('global.modal')
        .controller('HTMLModalController', HTMLModalController);

    HTMLModalController.$inject = ['$scope', 'modalService'];

    /* @ngInject */
    function HTMLModalController($scope, modalService) {
        var vm = this;
        vm.title = 'HTMLModalController';

        vm.code;
        vm.close = modalService.resolve;

        activate();

        ////////////////

        function activate() {
            return modalService.getTemplate(modalService.params().htmlTemplate)
                .then(function (data) {
                    vm.code = data;
                    return vm.code;
                })
        }

        
    }
})();
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
(function() {
    'use strict';

    angular
        .module('global.modal')
        .directive('alertModal', alertModal);

    alertModal.$inject = ['$rootScope', 'modalService'];

    /* @ngInject */
    function alertModal ($rootScope, modalService) {
        // Usage:
        // <div alert-modal title="" message="" action=""></div>
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
        	var promise;
        	var params =  {
        		title: attrs.title,
        		message: attrs.message,
        		action: attrs.action
        	};
 
        	

            // scope.alertModal = function () {
                 
            // }

            angular.element(element).bind('click', function () {
                promise = modalService.open('alert', params);

                promise.then(function handleResolve(response) {
                    
                }, function handleReject(error) {
                    
                });                   
            })

        	/**
        	 * Resolve or Reject the Promise;
        	*/
        	
        }
    
    }

    
})();
(function() {
    'use strict';

    angular
        .module('global.modal')
        .directive('abModal', abModal);

    abModal.$inject = ['$rootScope', 'modalService']

    /* @ngInject */
    function abModal ($rootScope, modalService) {
        // Usage:
        // <div ab-modal>
        var directive = {
            link: link,
            templateUrl: '/ngViews/global/modal.html'
        };
        
        return directive;

        
        function link(scope, element, attrs) {
        	scope.subview = null;


            //click on background to reject
            jq('.m-modal__background').on("click", function handleClickEvent( event ) {
				cope.$apply( modalService.reject );
			});

            
			
			//Modal Open - Blur Background throw approriate modal
			$rootScope.$on("modalService.open", function handleModalOpenEvent( event, modalType ) {
				scope.subview = modalType;
                scope.$apply( scope.subview );
                jq('body').addClass('m-modal-open');
			});

			//Clost the modal
			$rootScope.$on("modalService.close", function handleModalCloseEvent( event ) {
				scope.subview = null;
                jq('body').removeClass('m-modal-open');
			});
        }
    }

})();
(function() {
    'use strict';

    angular
        .module('global.modal')
        .service('modalService', modalService);

    modalService.$inject = ['$rootScope', '$q'];

    /* @ngInject */
    function modalService($rootScope, $q) {
        var modal = {
					deferred: null,
					params: null
				};

				this.open = open;
				this.params = params;
				this.proceedTo = proceedTo;
				this.reject = reject;
				this.resolve = resolve;

        ////////////////

        function open( type, params, pipeResponse ) {
					var previousDeferred = modal.deferred;
					
					modal.deferred = $q.defer();
					modal.params = params;

					if ( previousDeferred && pipeResponse ) {
						modal.deferred.promise.then( previousDeferred.resolve, previousDeferred.reject );
					} else if ( previousDeferred ) {
						previousDeferred.reject();
					}

					$rootScope.$emit( "modalService.open", type );
					return modal.deferred.promise;
				}


				
				function params() {
					return ( modal.params || {} );
				}


				function proceedTo( type, params ) {
					return open(type, params, true) ;
				}


				
				function reject( reason ) {
					if ( ! modal.deferred ) {return; }
					modal.deferred.reject( reason );
					modal.deferred = modal.params = null;

					$rootScope.$emit( "modalService.close" );
				}


				
				function resolve( response ) {
					if (!modal.deferred) {return; }
					
					modal.deferred.resolve(response);
					modal.deferred = modal.params = null;

					$rootScope.$emit( "modalService.close" );
				}

    }
})();






/*
|--------------------------------------------------------------------------
| Loading Directive
|--------------------------------------------------------------------------
|
| Adds placeholder to div while loading
|
*/

(function() {
    'use strict';

    angular
        .module('global.loading')
        .directive('loading', loading);

    loading.$inject = ['$rootScope'];

    /* @ngInject */
    function loading ($rootScope) {
        // Usage:
        // <div loading></div>
        var directive = {
            link: link,
            restrict: 'A',
            replace:true,
            templateUrl: '/ngViews/global/loading.html',
        };
        
        return directive;

        function link(scope, element, attrs) {
        	setSize();

        	/**
        	 * Set the size of the element to the size of the parent;
        	 */
        	function setSize() {
        		var h = jq(element).parent().height();
        		var w = jq(element).parent().width();

        		jq(element).css({height: h, width: w});
        	}


        	/** When Loading opacity 1 */
        	$rootScope.$on('cfpLoadingBar:loading', function handleLoading() {
        		jq(element).css({opacity: 1, display: 'block'});
        	});

        	/** When Loading opacity 0 */
        	$rootScope.$on('cfpLoadingBar:completed', function handleLoad() {
        		jq(element).css({opacity: 0, display: 'none'});
        	});
        }
    }

})();