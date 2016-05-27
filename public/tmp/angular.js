
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
            'mcdaniel.blog',
            'mcdaniel.pages',
            'mcdaniel.faq',
            'mcdaniel.forms',
            'mcdaniel.getstarted',
            'mcdaniel.templates'
        ]);
})();
(function() {
    'use strict';

    angular.module('mcdaniel.api', []);
})();
(function() {
    'use strict';

    angular.module('mcdaniel.blog', []);
})();
(function() {
   'use strict';

    angular.module('mcdaniel.faq', []); 

 })();
(function() {
    'use strict';

    angular .module('mcdaniel.forms', []); 

  })();
(function() {
    'use strict';

    angular.module('mcdaniel.getstarted', []);
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
            'ngMessages',  'ngCookies', 'ngAnimate', 'ngTouch', 'ngSanitize',

            /** Globals */
            'global.flash', 'global.errors', 'global.modal', 'global.share', 'global.sidemenu',  'global.loading',

            /** Third Party */
            'angular-loading-bar', 'LocalStorageModule'
        ]);
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

    angular
        .module('global.errors', []);
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

        /**
         * Get the Preview Articles
         * @param  {int} number 
         * @return {object}        
         */
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


       /**
        * Seach the Posts
        * @param  {object} data 
        * @return {object}      
        */
       function searchArticles(data) {
            return $http.post(apiUrl + '/search', data)
                .then(articlesComplete)
                .catch(function (message) {
                    errors.catcher('Sorry we were not able to search the articles at this time')(message);
                });

                function articlesComplete(data, status, headers, config) {
                    console.dir(data.data);
                    return data.data;
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

    cookieService.$inject = ['$http', '$location', '$cookies'];

    /* @ngInject */
    function cookieService($http, $location, $cookies) {
        var cookieName = 'mcdanielNutrition';
        var now = new Date();

        var service = {
        	haveCookie : haveCookie,
            getCookie: getCookie,
            storeCookie : storeCookie,
            storeMailChimp : storeMailChimp,
            storeService : storeService,
            removeCookie : removeCookie
        };
        
        return service;

        ////////////////

        /**
         * Check to see if there is a cookie. 
         * @return {boolean} 
         */
        function haveCookie() {
        	if ($cookies.get(cookieName) != undefined || $cookies.get(cookieName) != null) {
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
         * Store the Mail Chimp
         * @return {null}
         */
        function storeMailChimp() {
            var data = getCookie();
            data.subscribedToMailChimp = true;
            var json = JSON.stringify(data);
            return $cookies.put(cookieName, json);
        }

        /**
         * Store the Services
         * @param  {string} service 
         * @return {null}         
         */
        function storeService(service) {
            var data = getCookie();
            data.lastInterestedService = service;
            var json = JSON.stringify(data);
            return $cookies.put(cookieName, json);
        }


        /**
         * Store the last read article
         * @param  {string} articleTitle 
         * @return {null}
         */
        function storeLastArticle(articleTitle) {
            var data = getCookie();
            data.lastReadArticle = true;
            var json = JSON.stringify(data);
            return $cookies.put(cookieName, json);
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
        var apiUrl = common.apiUrl + '/faqs';

        var service = {
            getFaqs: getFaqs,
            getStaredFaqs : getStaredFaqs,
            searchFaqs : searchFaqs 
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


        /**
         * Get the stared FAQS
         * @return {object} 
         */
        function getStaredFaqs() {
            return $http.get(apiUrl + '/stared')
                .then(faqComplete)
                .catch(function (message) {
                    errors.catcher('Sorry but we cannot connect to the FAQ servics')(message);
                });

                function faqComplete(data, status, headers, config) {
                    return data.data;
                }
        }

        
        /**
         * Seach the FAQS
         * @return {object} 
         */
        function searchFaqs(data) {
            return $http.post(apiUrl + '/search', data)
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
        var apiUrl = common.apiUrl + "/contact/formSubmit";
        
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
                    errors.catcher('Mail cannot be sent at this time.')(message);
                });

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
(function() {
    'use strict';

    angular
        .module('mcdaniel.api')
        .factory('productService', productService);

     productService.$inject = ['$http', 'common', 'errors'];

    /* @ngInject */
    function productService($http, common,  errors) {
        var apiUrl = common.apiUrl + '/download/product/';
        
        var service = {
            productUrl : productUrl 
        };
        return service;

        ////////////////

        /**
         * Get url for Download StoreController@downloadProducts;
         * @param  {int} id 
         * @return {object}    
         */
        function productUrl (id) {
        	return $http.get(apiUrl + id)	
        		.then(urlComplete)
        		.catch(function (message) {
        			errors.catcher('Cannot Download Product right now.  Please contact us')(message);
        		});

        		function urlComplete(data, status, headers, config) {
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
(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$rootScope', 'articleService'];

    /* @ngInject */
    function SearchController($rootScope, articleService) {
        var vm = this;
        vm.title = 'SearchController';
        vm.formData =  {
        	query: null,
        }

        activate();

        ////////////////

        function activate() {
        	
        }

        function searchArticles() {
        	articleService.searchArticles(vm.formData).then(function (data) {

        	});
        }


        function clearSpaceAndReplace() {
        	
        }


        $rootScope.$on('article.search', function (event, query) {
        	//if (query === 'null') 
        	vm.formData.query = query;
        	searchArticles();

        })



    }
})();
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

    FaqController.$inject = ['$rootScope', 'faqService'];

    /* @ngInject */
    function FaqController($rootScope, faqService) {
        var vm = this;
        vm.title = 'FaqController';
        vm.Faqs =[];
        vm.loading = false;
        vm.formData = {
            query: null
        }

        activate();

        ////////////////

        /**
         * Activate the Controller and wait for Promise
         * @return {object} 
         */
        function activate() {
        	vm.loading = true;
            return getFaqData().then(function () {
               vm.loading = false;
        	});
        }


        /**
         * Get FAQ Data 
         * @return {object} 
         */
        function getFaqData () {
        	return faqService.getStaredFaqs().then(function (data) {
        		vm.Faqs = data.faqs;
                vm.loading = false;
                return vm.Faqs;
        	});
        }



        /**
         * Seach all the Faqs
         * @return {object}
         */
        function searchFaqs() {
            return faqService.searchFaqs(vm.formData).then(function (data) {
                vm.Faqs = data.faqs;
                vm.loading = false;
                return vm.Faqs;
            });
        }



        /**
         * Wait for FAQ search event and then load new search
         * @param  {event}  event       
         * @param  {string} query
         * @return {null}
         */
        $rootScope.$on("faqSearch", function handleSearchEvent( event, query ) {
            vm.loading = true;
            
            if (query === '') {
                getFaqData();
                return;
            }

            vm.formData.query = query;
            searchFaqs();
        });





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

    ContactFormController.$inject = ['$scope', '$rootScope', 'mailService', 'flash', 'common', 'localStorageService'];

    /* @ngInject */
    function ContactFormController($scope, $rootScope, mailService, flash, common, localStorageService) {
        var vm = this;
        vm.title = 'ContactFormController';
        
        /** @type {Vars} Scope Vars */
        vm.loading = false;
        vm.success = false;
        vm.service = 'all'

        /** @type {Methods} Scope Methods */
        vm.submitForm = submitForm;
        vm.updatePrice = updatePrice;

        /** @type {String} Success Message */
        vm.successMessage = "Thanks for Contacting Us. Your email is important to us and we will get back to you in 1 to 2 business days.";


        /**
         * Data for All contact Forms.  Just add to here if not in form already. 
         * @type {Object}
         */
        vm.formData = {
        	customerName: null,
        	email: null, 
        	phone: null,
        	bestContactTime: null,
        	subject: null,
        	contactMessage: null,
            formType: null,
            question: null,
            interestedService: null,
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
            vm.formData.interestedService = localStorageService.get('interestedService');
            vm.service = localStorageService.get('interestedService');

            if (vm.formData.interestedService == null) vm.service = 'all';
            if (vm.formData.interestedService == 'weight-loss') vm.formData.interestedService = 'sustain';
            if (vm.formData.interestedService == null) vm.formData.interestedService = 'sustain';
            
        }

        
        function updatePrice() {
            var price = jq("#interestedService").find(':selected').attr('data-item-price');
            $rootScope.$emit('updatePrice', price);
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
        function submitForm() {
            
            vm.loading = 'loading'

            vm.formData.subject = setupEmailSubject();
            vm.formData.interestedService = vm.formData.interestedService.replace("-", " ");
            
            
            
            mailService.sendToMailer(vm.formData)
                .then(function (data) {
                    mailSent(data);
                });

            function mailSent(data) {
                if (data.status == 200) {
                    clearForm();
                    vm.success = true;
                }
            }
        }


        /**
         * Change the subject out based on the formType
         * @return {string} subject
         */
        function setupEmailSubject() {
            switch (vm.formData.formType) {
                case "get-started-page":
                    return 'The Get Started Contact Page was submitted';
                    break;
                case "faqForm":
                    return 'A Question has been submitted';
                    break;
                case "contactForm":
                    return 'A customer has submitted a Contact Request';
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
                customerName: null,
                email: null, 
                phone: null,
                bestContactTime: null,
                subject: null,
                contactMessage: null,
                formType: null,
                question: null,

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
                customerName: 'Bob Dole',
                email: 'bobd@2721west.com', 
                phone: '972.535.4040',
                bestContactTime: {
                    'afternoon' : true,
                    'morning' : true
                },
                subject: "Big Gulp Huh?",
                contactMessage: 'alright\' ... we\'ll see you later',
                formType: null,
                question: 'Big Gulps Huh?',
                interestedService: 'teach-and-taste'
            }
        }


    }
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.getstarted')
        .controller('GetStartedController', GetStartedController);

    GetStartedController.$inject = ['$rootScope', 'localStorageService'];

    /* @ngInject */
    function GetStartedController($rootScope, localStorageService) {
        var vm = this;
        vm.title = 'GetStartedController';
        vm.price = null;
        vm.service = localStorageService.get('interestedService');

        activate();

        ////////////////
        
        

        function activate() {
            console.dir(vm.service);
            switch (vm.service) {
                case 'lunch-and-learn' :
                    vm.price = '$300.00';
                    break;
                case 'teach-and-taste' : 
                    vm.price = '$400.00';
                    break;
                case 'weight-loss-sustain' : 
                    vm.price = "$150.00";
                    break;
                case 'weight-loss-sustain-premium' : 
                    vm.price = "$450.00";
                    break;
                case 'sports-nutrition' :
                    vm.price = "$180.00";
                    break;
                case 'maternal-nutrition' :
                    vm.price = "$150.00";
                    break;
                case 'rmr-testing' :
                    vm.price = "$75.00"
            }
        }

        $rootScope.$on('updatePrice', function handlePrice(event, price) {
            if (price !== "null") {
                vm.price = "$" + price  + '.00';    
            }
            
        });
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
        var dev = false;
        var testing = false;


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
	shared.config(configure)

  configure.$inject = ['$logProvider', '$httpProvider', '$interpolateProvider', 'localStorageServiceProvider', '$compileProvider'];

	/** @ngInject */
	function configure($logProvider,  $httpProvider, $interpolateProvider, localStorageServiceProvider, $compileProvider) {
		
    //Turn debugging off/on (no info or warn);
		if ($logProvider.debugEnabled) {
			$logProvider.debugEnabled(true);
		}

    $interpolateProvider.startSymbol("{!");
    $interpolateProvider.endSymbol("!}");

    localStorageServiceProvider.setPrefix('mcdanielNutrition');
    localStorageServiceProvider.setStorageCookie(180, '<path>');
    localStorageServiceProvider.setStorageCookieDomain('https://mcdanielnutrition.com');
    /** Debug */
    localStorageServiceProvider.setNotify(true, true);

    $compileProvider.debugInfoEnabled(false);

    $httpProvider.defaults.headers.post['Content-Type'] = config.header;
    $httpProvider.defaults.headers.post['X-CSRF-TOKEN'] = jq('meta[name="csrf-token"]').attr('content')
    // $httpProvider.defaults.transformRequest = [function(data) {
    //   return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    // }];
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
(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('footerRollup', footerRollup);

    footerRollup.$inject = ['localStorageService'];

    /* @ngInject */
    function footerRollup (localStorageService) {
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
          if (localStorageService.get('subscribedToMailChimp')) {
            el.addClass('off');
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

    FooterRollupController.$inject = ['$scope', '$element', '$attrs', 'mailChimpService', 'localStorageService'];

    function FooterRollupController($scope, $element, $attrs, mailChimpService, localStorageService) {
        var vd = $scope.vd;

        vd.formData = {
          email : '',
        }

        vd.loading = false;
        vd.success = false;
        vd.message = false;

        vd.submitMailChimp = submitMailChimp;

        console.dir(localStorageService.get('subscribedToMailChimp'));

        ///////
        

        function submitMailChimp() {
          vd.loading = 'sending',

          mailChimpService.sendToMailChimp(vd.formData)
            .then(function (data) {
              vd.loading = false;
              vd.success = true;
              vd.message = data;

              vd.data = {
                subscribe: true,
                email: vd.formData.email
              };

              localStorageService.set('subscribedToMailChimp', vd.data)

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
        .module('mcdaniel.faq')
        .directive('keyupSearchInput', keyupSearchInput);

    keyupSearchInput.$inject = ['$rootScope'];

    /* @ngInject */
    function keyupSearchInput ($rootScope) {
        // Usage:
        // <input type="text" name="search" faq-search-input>
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
        	/** @type {DOM} element  */
        	var el = jq(element[0]);

            
        	/**
        	 * On Key up search
        	 * @param  {event}
        	 * @return {function} 
        	 */
        	el.on('keyup', function (e) {
        		if (timer) clearTimeout(timer);
        		var timer = setTimeout(broadcastSearch, 400);
        	});


        	/**
        	 * Broadcast to the Root
        	 * @param  {string} query 
        	 * @return {null}       
        	 */
        	function broadcastSearch() {
        		var query = el.val();
        		$rootScope.$emit('article.search', query)
        	}
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('searchInput', searchInput);

    /* @ngInject */
    function searchInput () {
        // Usage:
        // <div data-search-input></div>
        var directive = {
            bindToController: true,
            controller: SearchInputController,
            controllerAs: 'vd',
            link: link,
            restrict: 'A',
            replace: true,
            templateUrl: '/templates/blog/search-input.html',
            scope: {
                alwaysOpen: "@"
            }
        };
        
        return directive;


        function link(scope, element, attrs) {
            
        }
    }

    SearchInputController.$inject =  ['$scope', '$element', '$attrs', '$location'];

    /* @ngInject */
    function SearchInputController ($scope, $element, $attrs, $location) {
        var vd = $scope.vd,
            el = jq($element[0]),
            input = jq('#q'),
            form = jq('#searchForm');

        if (vd.alwaysOpen) {
            el.addClass('always-open');
        }
        
        jq('body').click(function (e) {
            if (jq(e.target).closest(el).length === 0) {
                el.removeClass('open')
            }
        });


        el.on('click', function (e) {
            e.preventDefault();
            el.addClass('open');
            input.focus();
        })


        jq(document).keypress(function (e) {
            if (e.which === 13) {
                if (el.hasClass('open')) {
                    form.submit();
                }
            }
        });

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
				tiny = jq('meta[name="tiny"]').attr('content'),
                url = 'http://mcdanielnutrition.com/p/' + tiny,
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
(function() {
    'use strict';

    angular
        .module('mcdaniel.faq')
        .directive('faqBlock', faqBlock);

    /* @ngInject */
    function faqBlock () {
        // Usage:
        // <div faq-block></div>
        var directive = {
            bindToController: true,
            controller: FaqBlockController,
            controllerAs: 'vd',
            link: link,
            restrict: 'A',
            templateUrl: '/templates/faqs/faq-block.html',
            scope: {
                faqs: "="
            }
        };
        return directive;

        function link(scope, element, attrs) {
            
        }
    }

    FaqBlockController.$inject = ['$scope', '$element', '$attrs'];

    /* @ngInject */
    function FaqBlockController ($scope, $element, $attrs) {
        var vd = $scope.vd;

        vd.openAnswer = openAnswer;



        //Open the Answers
        function openAnswer($event) {
            var self = jq($event.currentTarget),
                answer = self.children('.faq__answer');

            if (self.hasClass('open')) {
                answer.slideUp(200);
                self.toggleClass('open');
            } else {
                answer.slideDown(200);
                self.toggleClass('open');
            }
        }
    }

})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.faq')
        .directive('faqSearchInput', faqSearchInput);

    faqSearchInput.$inject = ['$rootScope'];

    /* @ngInject */
    function faqSearchInput ($rootScope) {
        // Usage:
        // <input type="text" name="search" faq-search-input>
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
        	/** @type {DOM} element  */
        	var el = jq(element[0]);

        	/**
        	 * On Key up search
        	 * @param  {event}
        	 * @return {function} 
        	 */
        	el.on('keyup', function (e) {
        		if (timer) clearTimeout(timer);
        		
        		var timer = setTimeout(broadcastSearch, 400);
        	});


        	/**
        	 * Broadcast to the Root
        	 * @param  {string} query 
        	 * @return {null}       
        	 */
        	function broadcastSearch() {
        		var query = el.val();
        		$rootScope.$emit('faqSearch', query)
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
                tiny = jq('meta[name="tiny"]').attr('content'),
                url = 'http://mcdanielnutrition.com/p/' + tiny,
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
        .directive('mcdanielFlash', mcdanielFlash);

    mcdanielFlash.$inject = ['$rootScope', '$timeout', 'mailService', 'flash', 'errors'];

    /* @ngInject */
    function mcdanielFlash ($rootScope, $timeout, mailService, flash, errors) {
        // Usage:
        // <div ab-flash></div>
        var directive = {
            bindToController: true,
            controller: Controller,
            controllerAs: 'vd',
            link: link,
            templateUrl: '/templates/global/flash.html',
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
					       name: 'Zack Davis',
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
        .module('mcdaniel.navigation')
        .directive('blogNavigation', blogNavigation);

    /* @ngInject */
    function blogNavigation () {
        // Usage:
        //  <div blog-navigation></div>
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
        	var el = element[0];
        	
        	var sticky = new Waypoint({
      			element: el,
      			handler: function () {
              		jq('body').toggleClass('nav-fixed');
      			},
      			offset: -100
      		});
			        	

        	var lastScrollPosition = 0;
        	
        	//Detect Scroll Position
        	jq(window).scroll(function (e) {
        		var scrollTop = jq(this).scrollTop();
        		if (scrollTop > lastScrollPosition) {
        			//Scrolling Down
        			jq(element[0]).removeClass('visible');
        		} else {
        			//Scrolling Up
        			jq(element[0]).addClass('visible');
        		}

        		lastScrollPosition = scrollTop;
        	});
        }
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
          var el = element[0],
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
        .directive('servicesButton', servicesButton);

   	servicesButton.$inject = ['localStorageService'];

    /* @ngInject */	
    function servicesButton (localStorageService) {
        // Usage:
        // <div class="button" data-services-button data-service="weight-loss"></div>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	service: "@"
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
   			    var el = jq(element[0]);
            var clicked = false;
  			     
            el.on('click', function (e) {
                e.preventDefault();
                localStorageService.set('interestedService', scope.service);
                window.location = el.attr('href');
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
(function() {
    'use strict';

    angular
        .module('mcdaniel.shared')
        .directive('downloadProduct', downloadProduct);

    downloadProduct.$inject = ['productService'];   

    /* @ngInject */
    function downloadProduct (productService) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	productId: "@"
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
        	var el = jq(element[0]);

        	el.on('click', function (e) {
        		e.preventDefault();
        		var newWindow = window.open();
        		var url = getURL(wind);
        		newWindow.location = data[url];

        	});

        	/**
        	 * Get the Product URL and download it.
        	 * @return {[type]} [description]
        	 */
        	function getURL(wind) {
        		return productService.productUrl(scope.productId).then(function (data) {
        			
        			if (data.status === 200) {
        				return data.data;
        			} else {
                        
                    }
        		});
			}
        }
    }

    
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.shared')
        .directive('fixedAsset', fixedAsset);
	
	  /* @ngInject */
    function fixedAsset () {
        // Usage:
        // <div fixed-asset></div>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
              wrapper: "@"  
            }
        };
        return directive;

        function link(scope, element, attrs) {
        	var el = element[0];
              
          /**
      		 * Fixed Navigation
      		 * Waypoints http://imakewebthings.com/waypoints/ 
      		 */
      		var fixed = new Waypoint({
      			element: el,
      			handler: function () {
            		jq(el).toggleClass('fixed');
      			},
      			offset: 120
      		});


         
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
            templateUrl: '/templates/global/loading.html',
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