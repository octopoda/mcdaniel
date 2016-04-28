
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
            // 'mcdaniel.pages',
            'mcdaniel.faq',
            // 'mcdaniel.forms',
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

    angular.module('mcdaniel.blog', []);
})();
(function() {
   'use strict';

    angular.module('mcdaniel.faq', []); 

 })();
(function() {
    'use strict';

    angular .module('assetbuilder.forms', []); 

  })();
(function() {
    'use strict';

    angular.module('mcdaniel.navigation', []);
})();
(function() {
    'use strict';

    angular.module('assetbuilder.pages', []);
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
            'global.flash', 'global.errors', 'global.modal', 'global.share', 'global.sidemenu', 'global.rangeslider', 'global.loading',

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

    angular
        .module('global.errors', []);
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

    angular.module('global.rangeslider', []);
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
        var apiUrl = common.apiUrl + 'MailChimp';

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
        function sendToMailChimp(email) {
        	return $http.get(apiUrl + '/' +email)
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
        .module('assetbuilder.forms')
        .controller('ContactFormController', ContactFormController);

    ContactFormController.$inject = ['$scope', 'mailService', 'surveyService',  'flash', 'common'];

    /* @ngInject */
    function ContactFormController($scope, mailService, surveyService, flash, common) {
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
            survey: getSurveyData()
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

        function getSurveyData() {
            if (surveyService.isSurveyComplete()) {
                return surveyService.getSurveyCookie();
            } 

            return false;
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
                survey: getSurveyData() 
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
                survey: {
                    initialInvestment : 200000,
                    addMonthly: 100,
                    investmentTimeline: 13,
                    investmentRisk: 2,
                    investmentType: 'assetbuilder',
                    date: new Date(),
                    expire: new Date()
                }
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

    /* @ngInject */
    function footerRollup () {
        // Usage:
        // <div footer-rollup></div>
        var directive = {
            link: link,
            restrict: 'A',
            replace:true,
            templateUrl: '/templates/blog/footer-rollup.html',
        };
        
        return directive;

        function link(scope, element, attrs) {
        	var el = jq(element);
        	
          
					
					/**
      		 * Fix to bottom of page
      		 * Waypoints http://imakewebthings.com/waypoints/ 
      		 */
      		var sticky = new Waypoint({
      			element: document.querySelector('body'),
      			handler: function () {
      				el.toggleClass('fixed');
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
      				el.toggleClass('fixed');
      			},
      			offset:'100%'
      		});


        }
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
| U.S. CitizenShip Checkbox Directive	
|--------------------------------------------------------------------------
|
| Validates and returns US Citizenship checkbox
|
*/

(function() {
    'use strict';

    angular
        .module('assetbuilder.forms')
        .directive('citizenship', citizenship);

    /* @ngInject */
    function citizenship () {
        // Usage:
        // <input citizenship type="checkbox" ng-model="">
        var directive = {
            link: link,
            restrict: 'A',
            require: 'ngModel'
        };
        
        return directive;

        function link(scope, element, attrs, ngModel) {
        		
        		ngModel.$parsers.push(checkCitizenship);
        		ngModel.$formatters.push(checkCitizenship);

        		/**
        		 * Check Value of citizen ship and return validity
        		 * @param  {boolean} value 
        		 * @return {boolean}       
        		 */
        		function checkCitizenship(value) {
        			if (angular.isUndefined(value)) { value = false; }
 							if (value === true) {
 								ngModel.$setValidity('citizenship', true);
 								return value;
 							} else {
 								ngModel.$setValidity('citizenship', false);	
 								return value;
 							}
 	       		}
        }
    }

    
})();
(function() {
    'use strict';

    angular
        .module('assetbuilder.forms')
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
| Form Directive to go to next fieldset
|--------------------------------------------------------------------------
|
| Used in open an account form
|
*/
(function() {
    'use strict';

    angular
        .module('assetbuilder.forms')
        .directive('nextFieldset', nextFieldset);

    /* @ngInject */
    function nextFieldset (common) {
        // Usage:
        // <div next-fieldset target-id="" class="button"><a href="#"">Button Text</a></div>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	targetId: "@"
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
				var el = jq(element);
        		var tar = jq('#' + scope.targetId);
        		
        		
						/**
        		 * When element is clicked add/remove open to target_id
        		 * @return {DOM} 
        		 */
        		el.on('click', function (e) {
        		    e.preventDefault();
        		   if (el.hasClass('disabled')) return false;

        			if (tar.hasClass('open')) {
        				tar.removeClass('open');
        				scrollToFormTop();
        				return;
        			} 

        			scrollToFormTop();
        			tar.addClass('open');
        			
        			
        			/**  Scroll to Top of Form  */
        			function scrollToFormTop() {
        				jq('html, body').animate({
        					scrollTop: tar.offset().top
        				}, 400);	
        			};

        		});

        }
    }
    nextFieldset.$inject = ["common"];




})();




/*
|--------------------------------------------------------------------------
| Open Account Long Form Directive
|--------------------------------------------------------------------------
|
| Handles the AssetBuilder Regular Model Open Account Form
| For Mobile or ETF Look at other directives.
| 
|
*/

(function() {
    'use strict';

    angular
        .module('assetbuilder.forms')
        .directive('openAccountForm', openAccountForm);

    /* @ngInject */
    function openAccountForm () {
        // Usage:
        // <div open-account-form></div>
        var directive = {
            bindToController: true,
            controller: OpenAccountController,
            controllerAs: 'vd',
            replace:true,
            link: link,
            templateUrl: 'ngViews/forms/open-account-medium.html',
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
        }
    }

		
		OpenAccountController.$inject = ['$scope', '$rootScope', 'surveyService', 'portfolioService', 'helperService', 'common', 'openAccountService', 'flash', '$location']; 

    
    /* @ngInject */
    function OpenAccountController ($scope, $rootScope, surveyService, portfolioService, helperService, common, openAccountService, flash, $location) {
					var vd = $scope.vd;
					vd.loading = false;
					vd.Portfolios = [];
					vd.SelectedPortfolio;
					vd.States = {};

					vd.successMessage =  "Thanks's for opening an account with AssetBuilder.  One of our team members will contact you within 1-2 business days with further instructions.";

					vd.formData =  {
						first_name: null,
						middle_initial: null,
						last_name: null,
						email: '',
						birth_date: null,
						address_1: null,
						address_2: null,
						city: null,
						state: null,
						zipcode: null,
						main_phone: null,
						us_citizen: true,
						secondary_phone: null,
						employmentStatus: null, 
						employerName: null, 
						employer_address_1:null, 
						employer_address_2:null, 
						employer_city: null,
						employer_state: null,
						employer_zipcode: null, 
						portfolio: {
						    Name: getSelectedPortfolio(),
                        }, 
						initialInvestment: getInitialInvestment(), 
						custodian: 'none', 
						accountTypes: {
							traditional_ira: null,
							roth_ira:null, 
							sep_ira:null, 
							individual: null, 
							trust: null, 
							joint: null, 
						},
						notes:null
					}

					if (common.isTesting) {
						fillForm();
					}



					//Methods
					vd.submitForm = submitForm;
					vd.formatFormDataKey = formatFormDataKey;
					

					activate();

					/////////////////////

					/**
					 * Activate the Controller
					 * @return {[type]} [description]
					 */
					function activate() {
					    //common.setupOptimizely(3707392123);

						return getPortfolios().then(function () {
						    getSurveyData();
						});
					};

					/**
					 * Get Portfolios For Dropdonw
					 * @return {object} 
					 */
					function getPortfolios() {
						return portfolioService.getPortfolioForGroupTicker('ABP').then(function (data) {
							vd.Portfolios = data;
							return vd.Portfolios;
						});
					};

				

					/**
					 * Get the Survey Data
					 * @return {[type]} [description]
					 */
					function getSurveyData() {
					    if (surveyService.isSurveyComplete()) {
					        var surveyData = surveyService.getSurveyCookie();
					    }
					};

                    
                    /**
                     * GEt the Initial Investment if survey is complete
                     * @return num
                     */
					function getInitialInvestment() {
					    if (surveyService.isSurveyComplete()) {
					        return surveyService.getSurveyCookie().initialInvestment
					    }

					    return 50000;
					}

                    
					function getSelectedPortfolio() {
					    if (surveyService.isSurveyComplete) {
					        return surveyService.getSelectedPortfolio();
					    }

					    return 'Portfolio 8';
					}

					
					/**
					 * Submit The Form to Client Service 
					 * @return {} [description]
					 */
					function submitForm() {
					    vd.loading = 'loading';
					    var name = vd.formData.portfolio.Name;
					    vd.formData.portfolio = name;

					    console.dir(vd.formData);
					    openAccountService.sendOpenAccountRequest(vd.formData)
							.then(function (data) {
							    accountOpen(data)
							  
							});


					    function accountOpen(data) {
					        if (data.status == 200) {
					             window.location = "/welcome-to-assetbuilder";
					             //flash.success(vd.successMessage);
					             vd.loading = false;
					        }
					    }
					};


					/*
					|--------------------------------------------------------------------------
					| Scope Methods
					|--------------------------------------------------------------------------
					|
					*/

					/**
					 * If employment is selected show employment information
					*/
					$scope.$watch('vd.formData.employmentStatus', function () {
						if (vd.formData.employmentStatus === 'employeed') {
							jq('#employmentSection').slideDown(500);
							return;
						}
						jq('#employmentSection').slideUp(500);
					});



					/*
					|--------------------------------------------------------------------------
					| Helpers
					|--------------------------------------------------------------------------
					|
					*/
				
					function formatFormDataKey(key) {
						if (!key) return key;
						
						key = key.replace("_", " ");
						return common.toTitleCase(key);
					}

					/**
					 * Fills the Form For Testing Purposes
					 * @return {[type]} [description]
					 */
					function fillForm() {
						vd.formData =  {
							first_name: 'John ',
							middle_initial: 'F',
							last_name: 'Doe',
							email: 'johnd@assetbuilder.com',
							birth_date: '07.15.1975',
							address_1: '1234 Oak St ',
							address_2: 'Suite 200',
							city: 'Plano',
							state: 'TX',
							zipcode: '75075',
							main_phone: '972.535.4040',
							us_citizen: true,
							secondary_phone: '970.555.4040',
							employmentStatus: 'employeed', 
							employerName: 'assetbuilder inc', 
							employer_address_1:'1255 W 15th St', 
							employer_address_2:'suite 1000', 
							employer_city: 'Plano',
							employer_state: 'TX',
							employer_zipcode: '75076', 
							portfolio: {
								Name: 'Portfolio 10', 
							}, 
							initialInvestment: 250000, 
							custodian: 'Fidelity_Investments', 
							accountTypes: {
								traditional_ira: true,
								roth_ira:null, 
								sep_ira: true, 
								individual: null, 
								trust: null, 
								joint: null, 
							},
							notes: "Yeah I called her up, she gave me a bunch of crap about me not listenin' to her enough, or somethin'. I don't know, I wasn't really payin' attention."
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
        .module('assetbuilder.forms')
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
| Build a state select box in a form
|--------------------------------------------------------------------------
|
|
*/
(function() {
    'use strict';

    angular
        .module('assetbuilder.forms')
        .directive('stateSelect', stateSelect);

    /* @ngInject */
    function stateSelect (helperService) {
        // Usage:
        // <div state-select></div>
        var directive = {
            bindToController: true,
            controller: StateSelectController,
            controllerAs: 'vd',
            link: link,
            restrict: 'A',
            replace:true,
            required: true,
            templateUrl: '/ngViews/forms/state-select.html',
            scope: {
            	name: "&",
            	selectedState: "="
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
        	
        }
    }
    stateSelect.$inject = ["helperService"];


     /* @ngInject */
    function StateSelectController (helperService) {
      var vd = this;

       activate();
            
        /**
         * Activate the directive
         * @return {promise} 
         */
        function activate() {
          return getStates().then(function () {
            
          });
        }

        /**
         * Get the States from the Helper Service
         * @return {object} 
         */
        function getStates() {
            return helperService.getStates().then(function (data) {
                vd.states = data.States;
                return vd.states;
            });
        }
    }
    StateSelectController.$inject = ["helperService"];


})();




(function() {
    'use strict';

    angular
        .module('assetbuilder.forms')
        .directive('zipcode', zipcode);

    zipcode.$inject = ['common'];    

    /* @ngInject */
    function zipcode (common) {
        // Usage:
        // <input zipcode type="text" ng-model="">
        var directive = {
            link: link,
            restrict: 'A',
        		require: "ngModel"
        };
        
        return directive;

        function link(scope, element, attrs, ngModel) {
        		
			    ngModel.$parsers.push(checkZipCode)
        	 	ngModel.$formatters.push(checkZipCode)


        	 	/**
        	 	 * Check to make sure Zip Code
        	 	 * @param  {string} value 
        	 	 * @return {boolean}   
        	 	 */
        	  function checkZipCode(value) {
        	  	var reg = /^\d{5}(?:[-\s]\d{4})?$/;
        	  	if (reg.test(value)) {
        	  		ngModel.$setValidity('zipcode', true);
        	  		return value;
        	  	} else {
        	  		ngModel.$setValidity('zipcode', false);
        	  		return undefined;
        	  	}
        	  }
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
            template: '<a href="#"><i class="fa fa-facebook"></i></a>'
        };
        
        return directive;

        function link(scope, element, attrs) {
        	var url = $location.absUrl(),
                fbLink = buildLink(url);
                
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
    function buildLink(url) {
    	//TODO: add description 
    	return 'https://www.facebook.com/sharer/sharer.php?u=' + url + '&display=popup';
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
| Twitter Share Directive
|--------------------------------------------------------------------------
|
| Builds twitter share button and URL to shre the article on twitter
|
*/
(function() {
    'use strict';

    angular
        .module('global.share')
        .directive('twitterShare', twitterShare);

    twitterShare.$inject = ['$location'];

    /* @ngInject */
    function twitterShare ($location) {
        // Usage:
        // <li twitter-share tweet=""></li>
        // Creates:
        //
        var directive = {
            link: link,
            template: '<a href="{{ vd.twitterLink }}"><i class="fa fa-twitter"></i></a>',
            restrict: 'A',
        };
        return directive;

        function link(scope, element, attrs) {
        	var url = $location.absUrl(),
                twitterLink = buildLink(url);

            jq(element).on('click', function (e) {
                popup(twitterLink, 700, 500);
                _ga('send', 'event', 'knowledge-center', 'share', 'facebook', 0);
            });    
        }
    }

    /**
     * Build Twitter Sharer Link
     * @param  {string} url 
     * @return {string}     
     */
    function buildLink(url) {
    	//TODO: add social card; and description  &text=
    	return 'http://twitter.com/share?url='+ url + ' - @assetbuilder';
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
(function () {
  'use strict';

  angular
    .module('global.rangeslider')
    .directive('rangeSlider', rangeSlider);

    rangeSlider.$inject = ['$compile', '$templateCache', '$timeout', '$window', 'sliderObject']    

    /** @ngInject */
    function rangeSlider($compile, $templateCache, $timeout, $window, sliderObject) {    
      // Usage: 
      // <input range-slider type="text" ng-model="" options="">
      var directive = {
          restrict : 'A',
          require: '?ngModel',
          scope: { 
            options:'=', 
          },
          priority: 1,
          link: link
        }
       
      return directive;    

      function link (scope, element, attrs, ngModel) {

        /** No Ng Model */
        if(!ngModel) return;

        /** No Options */
        if (!scope.options)
          throw new Error('You must provide a value for "options" attribute.');

        /** Options in String from */
        if (angular.isString(scope.options)) {
          scope.options = angular.toJson(scope.options);
        }

        /** @type {String} Set up the Class  !! Lets Remove this shit !! */
        scope.mainSliderClass = 'jslider';
        
        /** @type {object} Handle Limits and visibilty */
        scope.options.limits = angular.isDefined(scope.options.limits) ? scope.options.limits : true;

        /** Get the template and compile it. */
        element.after($compile($templateCache.get('range-slider/range-slider.html'))(scope, function(clonedElement, scope) {
          scope.tmplElt = clonedElement;
        }));

        
        /** @type {Boolean} Flag to initialize only once */
        var initialized = false;

        /**
         * Initialize the Directive
         * @return {[type]} [description]
         */
        var init = function() {
          /** @type {Object} Setup Options */
          scope.from = ''+scope.options.from;
          scope.to = ''+scope.options.to;
          
          if (scope.options.calculate && typeof scope.options.calculate === 'function') {
            scope.from = scope.options.calculate(scope.from);
            scope.to = scope.options.calculate(scope.to);
          }            

          /** @type {Object} !! Remove a lot of these */
          var OPTIONS = {
            from: !scope.options.round ? parseInt(scope.options.from, 10) : parseFloat(scope.options.from),
            to: !scope.options.round ? parseInt(scope.options.to, 10) : parseFloat(scope.options.to),
            step: scope.options.step,
            smooth: scope.options.smooth,
            limits: scope.options.limits,
            round: scope.options.round || false,
            value: ngModel.$viewValue,
            dimension: "",
            scale: scope.options.scale,
            modelLabels: scope.options.modelLabels,              
            vertical: scope.options.vertical,
            css: scope.options.css,
            className: scope.options.className,
            realtime: scope.options.realtime,
            cb: forceApply,
            threshold: scope.options.threshold
          };

          OPTIONS.calculate = scope.options.calculate || undefined;
          OPTIONS.onstatechange = scope.options.onstatechange || undefined;

          /** @type {Slider} Setup the Slider Object */
          scope.slider = !scope.slider ? slidering(element, scope.tmplElt, OPTIONS) : scope.slider.init(element, scope.tmplElt, OPTIONS);

          /** Setup window listener */
          if (!initialized) {
            initListener();
          }

          /**  Setup Scale */
          var scaleDiv = scope.tmplElt.find('div')[7];
          angular.element(scaleDiv).html(scope.slider.generateScale());
          scope.slider.drawScale(scaleDiv);

          initialized = true;
       
        };

        
        /**
         * Listen for Window Reszie
         * @return {EventListener} 
         */
        function initListener() {
          angular.element($window).bind('resize', function(event) {
            scope.slider.onresize();
          });
        }

        // model -> view
        ngModel.$render = function () {
          //elm.html(ctrl.$viewValue);
          var singleValue = false;

          if (!ngModel.$viewValue && ngModel.$viewValue !== 0) {
            return;
          }

          if (typeof(ngModel.$viewValue) === 'number') {
            ngModel.$viewValue = ''+ngModel.$viewValue;
          }

          if( !ngModel.$viewValue.split(";")[1]) {
            scope.mainSliderClass += ' jslider-single';
          }

          if (scope.slider) {
            scope.slider.getPointers()[0].set(ngModel.$viewValue.split(";")[0], true);
            if (ngModel.$viewValue.split(";")[1]) {
              scope.slider.getPointers()[1].set(ngModel.$viewValue.split(";")[1], true);
            }
          }
        };

        /**
         * Forcefully run the digest loop on the callback in Options
         * @param  {ngModel} value    
         * @param  {function} released
         * @return {callabck}          
         */
        var forceApply = function(value, released) {
          if (scope.disabled) return;
          
          scope.$apply(function() {
            ngModel.$setViewValue(value);
          });
          
          if (scope.options.callback){
            scope.options.callback(value, released);
          }
        };

        /** Watch Options for Changes then rerun init.   
         * @note -Timeout set to 0 to help changes Load. 
        **/
        scope.$watch('options', function(value) {
          $timeout(function(){
            init();
          });
        }, true);

       
        
        /**
         * Setup the Model Label Array
         * @note this will change the value of a label to a string
         * @param  {array} value 
         * @return {string}       
         */
        scope.limitValue = function(value) {
          if (scope.options.modelLabels) {
            if (angular.isFunction(scope.options.modelLabels)) {
              return scope.options.modelLabels(value);
            }              
            return scope.options.modelLabels[value] !== undefined ? scope.options.modelLabels[value] : value;              
          }
          return value;
        };

        
        /**
         * Setup the Slider
         * @param  {dom} inputElement 
         * @param  {templatecache} element
         * @param  {object} settings     [OPTIONS]
         * @return {object}              
         */
        var slidering = function( inputElement, element, settings) {
          return new sliderObject(inputElement, element, settings);
        };
      }
      
    } //End RangeSlider Function

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
        .module('assetbuilder.pages')
        .directive('randomReturnBlock', randomReturnBlock);

    /* @ngInject */
    function randomReturnBlock () {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: RandomReturnBlock,
            controllerAs: 'vb',
            link: link,
            restrict: 'A',
            templateUrl: '/ngViews/pages/random-returns-block.html',
            scope: {
            	returns : "=",
            	assetClass : "="
            }
        };
        return directive;

        function link(scope, element, attrs) {
     		var vb = scope.vb;
     			vb.returnNumber = vb.returns[1];
     			vb.assetClassName = vb.assetClass.css[vb.returns[0]];

     			

     		jq(element[0]).on('mouseover', function () {
     			highlight();
     		});

     		jq(element[0]).on('mouseout', function () {
     			unhighlight();
     		})


     		function highlight() {
     			jq('.'+ vb.assetClass.css[vb.returns[0]]).addClass('active');
     			jq('#randomReturnsWrapper').addClass('white-out');
     			addTooltip();
     		}

     		function unhighlight() {
				jq('.'+ vb.assetClass.css[vb.returns[0]]).removeClass('active');
     			jq('#randomReturnsWrapper').removeClass('white-out');
     			jq(element[0]).children('.asset-tooltip').remove();
     		}


     		function addTooltip() {
 			 var html = '<div class="asset-tooltip">';
    		 	 html += '<span class="tooltip_name">' + vb.assetClass.friendly[vb.returns[0]] + '</span>'
    		 	 html += '<span class="tooltip_full_name">' + vb.assetClass.names[vb.returns[0]] + '</span>'
    		 	 html += '</div>'

        		jq(element[0]).append(html);
     		}
        }
    }

    /* @ngInject */
    function RandomReturnBlock () {

    }
})();
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
        		clientId: '	0d31d74e63da4ef28a15986302562504'
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
/*
|--------------------------------------------------------------------------
| Range Slider Constants 
|--------------------------------------------------------------------------
|
| Replaces Scope options and sets default when options are null
|
*/
(function(){
  'use strict';
  angular
    .module('global.rangeslider')
    .constant('sliderConstants', {
      SLIDER: {
        settings: {
          from: 1,
          to: 40,
          step: 1,
          smooth: true,
          limits: false,
          round: false,	
          value: "3",
          dimension: "",
          vertical: false,
          calculate: false,
          onstatechange: false,
          callback: false,
          realtime: false
        },
        className: "jslider",
        selector: ".jslider-",
        css: {
          visible : { visibility: "visible" },
          hidden : { visibility: "hidden" }
        }
      },
      EVENTS: {
        
      }
  });

}());
(function(angular){
  'use strict';

  angular.module('global.rangeslider')
    .factory('sliderDraggable', ['sliderUtils', function(sliderUtils) {

    function Draggable(){
      this._init.apply( this, arguments );
    }

    Draggable.prototype.oninit = function(){
    };

    Draggable.prototype.events = function(){
    };

    Draggable.prototype.onmousedown = function(){
      this.pointer.css({ position: "absolute" });
    };

    Draggable.prototype.onmousemove = function( evt, x, y ){
      this.pointer.css({ left: x, top: y });
    };

    Draggable.prototype.onmouseup = function(){};

    Draggable.prototype.isDefault = {
      drag: false,
      clicked: false,
      toclick: true,
      mouseup: false
    };

    Draggable.prototype._init = function() {
      if( arguments.length > 0 ){
        this.pointer = arguments[0];
        this.parent = arguments[2];

        if (!this.pointer)
          return;
        //this.outer = $(".draggable-outer");

        this.is = {};
        angular.extend( this.is, this.isDefault );
        var offset = sliderUtils.offset(this.pointer);

        this.d = {
          left: offset.left,
          top: offset.top,
          width: this.pointer[0].clientWidth,
          height: this.pointer[0].clientHeight 
        };

        this.oninit.apply( this, arguments );

        this._events();
      }
    };

    Draggable.prototype._getPageCoords = function( event ){
      if( event.targetTouches && event.targetTouches[0] ){
        return { x: event.targetTouches[0].pageX, y: event.targetTouches[0].pageY };
      } else
      return { x: event.pageX, y: event.pageY };
    };

    Draggable.prototype._bindEvent = function( ptr, eventType, handler ){
      var self = this;

      if( this.supportTouches_ )
        ptr[0].addEventListener( this.events_[ eventType ], handler, false );

      else
        ptr.bind( this.events_[ eventType ], handler );
    };

    Draggable.prototype._events = function(){
      var self = this;

      this.supportTouches_ = 'ontouchend' in document;
      this.events_ = {
        "click": this.supportTouches_ ? "touchstart" : "click",
        "down": this.supportTouches_ ? "touchstart" : "mousedown",
        "move": this.supportTouches_ ? "touchmove" : "mousemove",
        "up"  : this.supportTouches_ ? "touchend" : "mouseup",
        "mousedown"  : this.supportTouches_ ? "mousedown" : "mousedown"
      };

      var documentElt = angular.element(window.document);

      this._bindEvent(documentElt, "move", function(event) {        
        if(self.is.drag) {
          event.stopPropagation();
          event.preventDefault();
          if (!self.parent.disabled) {
            self._mousemove(event);            
          }  
        }
      });
      this._bindEvent(documentElt, "down", function(event) {
        if(self.is.drag) {
          event.stopPropagation();
          event.preventDefault();
        }
      });
      this._bindEvent(documentElt, "up", function(event) {        
        self._mouseup(event);        
      });

      this._bindEvent( this.pointer, "down", function(event) {
        self._mousedown( event );
        return false;
      });
      this._bindEvent( this.pointer, "up", function(event) {
        self._mouseup( event );
      });      
     
      // TODO see if needed
      this.events();
    };

    Draggable.prototype._mousedown = function( evt ){
      this.is.drag = true;
      this.is.clicked = false;
      this.is.mouseup = false;   

      var coords = this._getPageCoords( evt );
      this.cx = coords.x - this.pointer[0].offsetLeft;
      this.cy = coords.y - this.pointer[0].offsetTop;

      angular.extend(this.d, {        
        left: coords.x,
        top: coords.y,
        width: this.pointer[0].clientWidth,
        height: this.pointer[0].clientHeight
      });

      if( this.outer && this.outer.get(0) ){
        this.outer.css({ height: Math.max(this.outer.height(), $(document.body).height()), overflow: "hidden" });
      }

      this.onmousedown( evt );
    };

    Draggable.prototype._mousemove = function( evt ){
      this.is.toclick = false;
      var coords = this._getPageCoords( evt );
      this.onmousemove( evt, coords.x - this.cx, coords.y - this.cy );
    };    

    Draggable.prototype._mouseup = function( evt ){
      var oThis = this;

      if( this.is.drag ){
        this.is.drag = false;

        var browser = sliderUtils.browser();

        if( this.outer && this.outer.get(0) ) {

          if( browser === 'mozilla' ){
            this.outer.css({ overflow: "hidden" });
          } else {
            this.outer.css({ overflow: "visible" });
          }

          // TODO finish browser detection and this case, remove following line
          this.outer.css({ height: "auto" });
          // if( browser === 'ie' && $.browser.version == '6.0' ){
          //   this.outer.css({ height: "100%" });
          // } else {
          //   this.outer.css({ height: "auto" });
          // }
          
        }

        this.onmouseup( evt );
      }
    };

    return Draggable;
  }]);
}(angular));
(function(angular){
  'use strict';

  angular.module('global.rangeslider')
          .factory('SliderPointer', ['sliderDraggable', 'sliderUtils', function(sliderDraggable, sliderUtils) {

    function SliderPointer() {
      sliderDraggable.apply(this, arguments);
    }

    SliderPointer.prototype = new sliderDraggable();

    SliderPointer.prototype.oninit = function( ptr, id, vertical, _constructor ) {
      this.uid = id;
      this.parent = _constructor;
      this.value = {};
      this.vertical = vertical;
      this.settings = angular.copy(_constructor.settings);   
      this.normalOrder = this.parent.settings.from < this.parent.settings.to;
      this.threshold = this.parent.settings.threshold;   
    };

    SliderPointer.prototype.onmousedown = function( evt ) {
      var off = sliderUtils.offset(this.parent.domNode);

      var offset = {
        left: off.left,
        top: off.top,
        width: this.parent.domNode[0].clientWidth,
        height: this.parent.domNode[0].clientHeight
      };

      this._parent = {
        offset: offset,
        width: offset.width,
        height: offset.height
      };      

      this.pointer.addClass("jslider-pointer-hover"); 
      
    };

    SliderPointer.prototype.onmousemove = function( evt, x, y ){
      var coords = this._getPageCoords( evt );      
      this._set(!this.vertical ? this.calc( coords.x ) : this.calc( coords.y ));
      if( this.settings.realtime && this.settings.cb && angular.isFunction(this.settings.cb) && this.allowed)
        this.settings.cb.call( this.parent, this.parent.getValue(), !this.is.drag  );
      
    };

    SliderPointer.prototype.onmouseup = function(evt){
      if( this.settings.cb && angular.isFunction(this.settings.cb) && this.allowed)
        this.settings.cb.call( this.parent, this.parent.getValue(), !this.is.drag );

      if (!this.is.drag)
        this.pointer.removeClass("jslider-pointer-hover");
      
    };

    SliderPointer.prototype.limits = function( x ){
      return this.parent.limits(x, this);
    };

    SliderPointer.prototype.calc = function( coords ){
      return !this.vertical ? 
        this.limits(((coords-this._parent.offset.left)*100)/this._parent.width)
        :
        this.limits(((coords-this._parent.offset.top)*100)/this._parent.height);
    };

    SliderPointer.prototype.set = function( value, opt_origin ){
      this.value.origin = this.parent.round(value);
      this._set(this.parent.valueToPrc(value,this), opt_origin);
    };

    SliderPointer.prototype._set = function( prc, opt_origin ){
      this.allowed = true;      
      this.value.origin = this.parent.prcToValue(prc);      
      // check threshold      
      if (this.threshold && this.parent.o.pointers[1]) {        
        var v1 = this.parent.o.pointers[0].value.origin,
            v2 = this.parent.o.pointers[1].value.origin;
        this.allowed =  (this.normalOrder ? v2 - v1 : v1 - v2) >= this.threshold;              
      }
      // if(!opt_origin)
              
      if (!this.allowed){        
        var otherPtr = this.parent.o.pointers[this.uid === 0 ? 1:0];
        if (this.uid === 0)        
          this.value.origin = this.normalOrder ? otherPtr.value.origin - this.threshold : otherPtr.value.origin + this.threshold;
        else
          this.value.origin = this.normalOrder ? otherPtr.value.origin + this.threshold : otherPtr.value.origin - this.threshold;
        return;
      }
      this.value.prc = prc;

      if (!this.vertical)
        //Set the Placement of the Pointer
        this.pointer.css({left:prc+"%"});
      else
        this.pointer.css({top:prc+"%", marginTop: -5});
      this.parent.redraw(this);
    };

    return SliderPointer;
  }]);
}(angular));
(function(angular){
  'use strict';

  angular.module('global.rangeslider')
          .factory('sliderObject', ['SliderPointer', 'sliderConstants', 'sliderUtils', function(SliderPointer, sliderConstants, sliderUtils) {

    function Slider(){
      return this.init.apply(this, arguments);
    }

    Slider.prototype.init = function( inputNode, templateNode, settings ){   
      this.settings = settings;            
      this.inputNode = inputNode;
      this.inputNode.addClass("ng-hide");

      this.settings.interval = this.settings.to-this.settings.from;
      
      if(this.settings.calculate && angular.isFunction(this.settings.calculate))
        this.nice = this.settings.calculate;

      if(this.settings.onstatechange && angular.isFunction(this.settings.onstatechange))
        this.onstatechange = this.settings.onstatechange;

      this.css = sliderConstants.SLIDER.css;
      this.is = {init: false};
      this.o = {};
      this.initValue = {};
      this.isAsc = settings.from < settings.to;

      this.create(templateNode);
      
      return this;
    };

    Slider.prototype.create = function( templateNode ){
      // set skin class
      //   if( this.settings.skin && this.settings.skin.length > 0 )
      //     this.setSkin( this.settings.skin );

      var self = this;

      this.domNode = templateNode;

      var divs = this.domNode.find('div'),
          is = this.domNode.find('i'),
          
          angElt = angular.element,
          angExt = angular.extend,
          angForEach = angular.forEach,
          
          pointer1 = angElt(divs[1]),
          pointer2 = angElt(divs[2]),
          pointerLabel1 = angElt(divs[5]),
          pointerLabel2 = angElt(divs[6]),
          
          indicatorLeft = angElt(is[0]),
          indicatorRight = angElt(is[1]),
          
          range = angElt(is[2]),
          
          indicator1 = angElt(is[3]),
          indicator2 = angElt(is[4]),
          indicator3 = angElt(is[5]),
          indicator4 = angElt(is[6]),
          
          pointers = [pointer1, pointer2],          
          
          off = sliderUtils.offset(this.domNode),
          offset = {
            left: off.left,
            top: off.top,
            width: this.domNode[0].clientWidth,
            height: this.domNode[0].clientHeight
          },          
          
          values = self.settings.value.split(';');

      this.sizes = { 
        domWidth: this.domNode[0].clientWidth,
        domHeight: this.domNode[0].clientHeight,
        domOffset: offset 
      };

      // find some objects
      angExt(this.o, {
        pointers: {},
        labels: { 0: { o : pointerLabel1 }, 1: { o : pointerLabel2 } },
        limits: { 0: angular.element(divs[3]), 1: angular.element(divs[4]) },
        indicators: { 0: indicator1, 1: indicator2, 2: indicator3, 3: indicator4 }
      });

      angExt(this.o.labels[0], {
        value: this.o.labels[0].o.find("span")
      });

      angExt(this.o.labels[1], {
        value: this.o.labels[1].o.find("span")
      });
      
      // single pointer
      this.settings.single = !self.settings.value.split(";")[1];       

      if (this.settings.single) {
        range.addClass('ng-hide');
      }

      angForEach(pointers, function(pointer, key) {
        self.settings = angular.copy(self.settings);

        var value = values[key],
            prev,
            prevValue,
            test,
            value1,
            offset;

        if(value) {
          self.o.pointers[key] = new SliderPointer(pointer, key, self.settings.vertical, self);

          prev = values[key-1];
          prevValue = prev ? parseInt(prev, 10 ) : undefined;

          value = self.settings.round ? parseFloat(value) : parseInt(value, 10);

          if( prev && self.isAsc ? value < prevValue : value > prevValue ) {
            value = prev;
          }

          // limit threshold adjust
/*          test = self.isAsc ? value < self.settings.from : value > self.settings.from,
          value1 = test ? self.settings.from : value;              */

          test = self.isAsc ? value > self.settings.to : value < self.settings.to;        
          value1 = test ? self.settings.to : value;

          self.o.pointers[key].set( value1, true );
          
          // reinit position d
          offset = sliderUtils.offset(self.o.pointers[key].pointer);

          self.o.pointers[key].d = {
            left: offset.left,
            top: offset.top
          };          
        }        
      });

      self.domNode.bind('mousedown', self.clickHandler.apply(self));

      this.o.value = angElt(this.domNode.find("i")[2]);      
      this.is.init = true;

      // CSS SKIN
      if (this.settings.css) {        
        indicatorLeft.css(this.settings.css.background ? this.settings.css.background : {});
        indicatorRight.css(this.settings.css.background ? this.settings.css.background : {});
        if (!this.o.pointers[1]) {
          indicator1.css(this.settings.css.before ? this.settings.css.before : {});          
          indicator4.css(this.settings.css.after ? this.settings.css.after : {});
        }

        indicator2.css(this.settings.css.default ? this.settings.css.default : {});  
        indicator3.css(this.settings.css.default ? this.settings.css.default : {});
        
        range.css(this.settings.css.range ? this.settings.css.range : {});
        pointer1.css(this.settings.css.pointer ? this.settings.css.pointer : {});
        pointer2.css(this.settings.css.pointer ? this.settings.css.pointer : {});
      }

      angForEach(this.o.pointers, function(pointer, key){
        self.redraw(pointer);
      });

    };

    Slider.prototype.clickHandler = function() {
      var self = this;      

      // in case of showing/hiding
      var resetPtrSize = function( ptr ) {
        var ptr1 = self.o.pointers[0].ptr,
            ptr2 = self.o.pointers[1].ptr,
            offset1 = sliderUtils.offset(ptr1),
            offset2 = sliderUtils.offset(ptr2);

        self.o.pointers[0].d = {
          left: offset1.left,
          top: offset1.top,
          width: ptr1[0].clientWidth,
          height: ptr1[0].clientHeight
        };

        self.o.pointers[1].d = {
          left: offset2.left,
          top: offset2.top,
          width: ptr2[0].clientWidth,
          height: ptr2[0].clientHeight
        };
      };

      return function(evt) {
        if (self.disabled)
          return;        
        var vertical = self.settings.vertical,
            targetIdx = 0,
            _off = sliderUtils.offset(self.domNode),
            firstPtr = self.o.pointers[0],
            secondPtr = self.o.pointers[1] ? self.o.pointers[1] : null,
            tmpPtr,
            targetPtr,
            evtPosition = evt.originalEvent ? evt.originalEvent: evt,
            mouse = vertical ? evtPosition.pageY : evtPosition.pageX,
            offset,
            css = vertical ? 'top' : 'left';

        if (!self.isAsc && secondPtr) {
          tmpPtr = secondPtr;
          secondPtr = firstPtr;
          firstPtr = tmpPtr;
        }        

        offset = { left: _off.left, top: _off.top, width: self.domNode[0].clientWidth, height: self.domNode[0].clientHeight };              
        targetPtr = self.o.pointers[targetIdx];
        
        if (secondPtr) {
          if (!secondPtr.d.width) {
            resetPtrSize();
          }         
          var middleGap = (secondPtr.d[css] - firstPtr.d[css]) / 2,
              ptr = firstPtr.d[css],
              mousePosBetween = mouse - ptr,
              test = mousePosBetween > middleGap;

          if (test) {
            targetPtr = self.isAsc ? secondPtr : firstPtr;
          }
        }
        targetPtr._parent = {offset: offset, width: offset.width, height: offset.height};
        var coords = firstPtr._getPageCoords( evt );          
        targetPtr.cx = coords.x - targetPtr.d.left;
        targetPtr.cy = coords.y - targetPtr.d.top;      
        targetPtr.onmousemove( evt, coords.x, coords.y);
        targetPtr.onmouseup();        
        angular.extend(targetPtr.d, {
           left: coords.x,
           top: coords.y          
        });        
        
        self.redraw(targetPtr);
        return false;
      };
    };


    Slider.prototype.disable = function( bool ) {   
      this.disabled = bool;
    };    

    Slider.prototype.nice = function( value ){
      return value;
    };

    Slider.prototype.onstatechange = function(){};

    Slider.prototype.limits = function( x, pointer ){
      // smooth
      if(!this.settings.smooth){
        var step = this.settings.step*100 / ( this.settings.interval );
        x = Math.round( x/step ) * step;
      }

      if (pointer) {
        var another = this.o.pointers[1-pointer.uid];
        if(another && pointer.uid && x < another.value.prc) x = another.value.prc;
        if(another && !pointer.uid && x > another.value.prc) x = another.value.prc;
      }
      // base limit
      if(x < 0) x = 0;
      if(x > 100) x = 100;

      return Math.round(x*10) / 10;
    };    

    Slider.prototype.getPointers = function(){
      return this.o.pointers;
    };

    Slider.prototype.generateScale = function(){
      if (this.settings.scale && this.settings.scale.length > 0){
        var str = "",
            s = this.settings.scale,
        // FIX Big Scale Failure #34
        // var prc = Math.round((100/(s.length-1))*10)/10;
            prc,
            label,
            duplicate = {},
            position = this.settings.vertical ? 'top' : 'left',
            i=0;
        for(; i < s.length; i++) {
          if (!s[i].val) {
             prc = (100/(s.length-1)).toFixed(2);
             str += '<span style="'+ position + ': ' + i*prc + '%">' + ( s[i] != '|' ? '<ins>' + s[i] + '</ins>' : '' ) + '</span>';
          }

          if (s[i].val <= this.settings.to && s[i].val >= this.settings.from &&  ! duplicate[s[i].val]) {            
            duplicate[s[i].val] = true;
            prc = this.valueToPrc(s[i].val);
            label = s[i].label ? s[i].label : s[i].val;
            str += '<span style="'+ position + ': ' + prc + '%">' + '<ins>' + label + '</ins>' + '</span>';
          }
        }
        return str;
      }

      return "";
    };

    Slider.prototype.onresize = function(){
      var self = this;

      this.sizes = {
        domWidth: this.domNode[0].clientWidth,
        domHeight: this.domNode[0].clientHeight,
        domOffset: {
          left: this.domNode[0].offsetLeft,
          top: this.domNode[0].offsetTop,
          width: this.domNode[0].clientWidth,
          height: this.domNode[0].clientHeight
        }
      };

      angular.forEach(this.o.pointers, function(ptr, key) {
        self.redraw(ptr);
      });
    };

    Slider.prototype.update = function(){
      this.onresize();
      this.drawScale();
    };    

    Slider.prototype.drawScale = function( scaleDiv ){
      angular.forEach(angular.element(scaleDiv).find('ins'), function(scaleLabel, key) {
        scaleLabel.style.marginLeft = - scaleLabel.clientWidth / 2;
      });
    };    

    Slider.prototype.redraw = function( pointer ){      
      if(!this.is.init) {
        // this.settings.single
        if(this.o.pointers[0] && !this.o.pointers[1]) {
          this.originValue = this.o.pointers[0].value.prc;
          this.o.indicators[0].css(!this.settings.vertical ? {left:0, width:this.o.pointers[0].value.prc + "%"} : {top:0, height:this.o.pointers[0].value.prc + "%"});
          this.o.indicators[1].css(!this.settings.vertical ? {left:this.o.pointers[0].value.prc + "%"} : {top:this.o.pointers[0].value.prc + "%"});
          this.o.indicators[3].css(!this.settings.vertical ? {left:this.o.pointers[0].value.prc + "%"} : {top:this.o.pointers[0].value.prc + "%"});
        } else {
          this.o.indicators[2].css(!this.settings.vertical ? {left:this.o.pointers[1].value.prc + "%"} : {top:this.o.pointers[1].value.prc + "%"});
          this.o.indicators[0].css(!this.settings.vertical ? {left:0, width:"0"} : {top:0, height:"0"});
          this.o.indicators[3].css(!this.settings.vertical ? {left:"0", width:"0"} : {top:"0", height:"0"});
        }

        return false;
      }

      this.setValue();

      var newPos,
          newWidth;

      // redraw range line      
      if(this.o.pointers[0] && this.o.pointers[1]) {
        newPos = !this.settings.vertical ? 
          { left: this.o.pointers[0].value.prc + "%", width: ( this.o.pointers[1].value.prc - this.o.pointers[0].value.prc ) + "%" }
          :
          { top: this.o.pointers[0].value.prc + "%", height: ( this.o.pointers[1].value.prc - this.o.pointers[0].value.prc ) + "%" };
        
        this.o.value.css(newPos);

        // both pointer overlap on limits
        if (this.o.pointers[0].value.prc === this.o.pointers[1].value.prc) {
          this.o.pointers[1].ptr.css("z-index", this.o.pointers[0].value.prc === 0 ? '3' : '1');
        }

      }
      
      if(this.o.pointers[0] && !this.o.pointers[1]) {
        newWidth = this.o.pointers[0].value.prc - this.originValue;
        if (newWidth >= 0) {
          this.o.indicators[3].css(!this.settings.vertical ? {width: newWidth + "%"} : {height: newWidth + "%"});
        }
        else {
          this.o.indicators[3].css(!this.settings.vertical ? {width: 0} : {height: 0});
        }

        if (this.o.pointers[0].value.prc < this.originValue) {
         this.o.indicators[0].css(!this.settings.vertical ? {width: this.o.pointers[0].value.prc + "%"} : {height: this.o.pointers[0].value.prc + "%"});
        }
        else {
          this.o.indicators[0].css(!this.settings.vertical ? {width: this.originValue + "%"} : {height: this.originValue + "%"});
        }        

      }      

      var value = this.nice(pointer.value.origin);
      if (this.settings.modelLabels) {
        if (angular.isFunction(this.settings.modelLabels)) {
          value = this.settings.modelLabels(value);
        }
        else {
          value = this.settings.modelLabels[value] !== undefined ? this.settings.modelLabels[value] : value;
        }
      }
      
      this.o.labels[pointer.uid].value.html(value);            

      // redraw position of labels
      this.redrawLabels( pointer );
    };

    

    Slider.prototype.redrawLabels = function( pointer ) {

      /** Set the position of the value Label */
      function setPosition( label, sizes, prc ) {
        sizes.margin = -sizes.label/2;
        var domSize = !self.settings.vertical ? self.sizes.domWidth : self.sizes.domHeight;

        if (self.sizes.domWidth) {
          // left limit
          var label_left = sizes.border + sizes.margin;
          if(label_left < -100)
            sizes.margin -= label_left;

          // right limit
          if(self.sizes.domWidth > 0 && sizes.border+sizes.label / 2 > domSize+100){
            sizes.margin = 0;
            sizes.right = true;
          } else
          sizes.right = false;  
        }        

        if (!self.settings.vertical)        
          label.o.css({ left: prc + "%", marginLeft: sizes.margin+"px", right: "auto"});
        else
          label.o.css({ top: prc + "%", marginLeft: "20px", marginTop: sizes.margin, bottom: "auto" });
        if(sizes.right && self.sizes.domWidth > 0) {
          if (!self.settings.vertical)
            label.o.css({ left: "auto", right: 0 });
          else
            label.o.css({ top: "auto", bottom: 0 });
        }
        return sizes;
      }

      var self = this,
          label = this.o.labels[pointer.uid],
          prc = pointer.value.prc,
          // case hidden
          labelWidthSize = label.o[0].offsetWidth === 0 ? (label.o[0].textContent.length)*7 : label.o[0].offsetWidth;
      
      this.sizes.domWidth = this.domNode[0].clientWidth;
      this.sizes.domHeight = this.domNode[0].clientHeight;      

      var sizes = {
        label: !self.settings.vertical ? labelWidthSize : label.o[0].offsetHeight,
        right: false,
        border: (prc * (!self.settings.vertical ? this.sizes.domWidth: this.sizes.domHeight)) / 100
      };

      var anotherIdx = pointer.uid === 0 ? 1:0,
          anotherLabel,
          anotherPtr;          

      if (!this.settings.single && !this.settings.vertical){
        // glue if near;        
        anotherLabel = this.o.labels[anotherIdx];
        anotherPtr = this.o.pointers[anotherIdx];          
        

        var label1 = this.o.labels[0],
            label2 = this.o.labels[1],
            ptr1 = this.o.pointers[0],
            ptr2 = this.o.pointers[1],
            gapBetweenLabel = ptr2.ptr[0].offsetLeft - ptr1.ptr[0].offsetLeft,
            value = this.nice(anotherPtr.value.origin);

        label1.o.css(this.css.visible);
        label2.o.css(this.css.visible);

        value = this.getLabelValue(value);
        
        if (gapBetweenLabel + 10 < label1.o[0].offsetWidth+label2.o[0].offsetWidth) {
          anotherLabel.o.css(this.css.hidden);
          
          anotherLabel.value.html(value);
          prc = (anotherPtr.value.prc - prc) / 2 + prc;
          if(anotherPtr.value.prc != pointer.value.prc){
            value = this.nice(this.o.pointers[0].value.origin);
            var value1 = this.nice(this.o.pointers[1].value.origin);
            value = this.getLabelValue(value);
            value1 = this.getLabelValue(value1);             
            
            label.value.html(value + "&nbsp;&ndash;&nbsp;" + value1);
            sizes.label = label.o[0].offsetWidth;
            sizes.border = (prc * domSize) / 100;
          }
        }
        else {          
          anotherLabel.value.html(value);
          anotherLabel.o.css(this.css.visible);
        }              
      }

      //Let the Label Position
      sizes = setPosition(label, sizes, prc);

      var domSize = !self.settings.vertical ? self.sizes.domWidth : self.sizes.domHeight;

      /* draw second label */
      if(anotherLabel){
        // case hidden
        var labelWidthSize2 = label.o[0].offsetWidth === 0 ? (label.o[0].textContent.length/2)*7 : label.o[0].offsetWidth,
            sizes2 = {
          label: !self.settings.vertical ? labelWidthSize2: anotherLabel.o[0].offsetHeight,
          right: false,
          border: (anotherPtr.value.prc * this.sizes.domWidth) / 100
        };
        sizes = setPosition(anotherLabel, sizes2, anotherPtr.value.prc);
      }
      
      this.redrawLimits();
    };    

    Slider.prototype.redrawLimits = function() {
      if (this.settings.limits) {

        var limits = [true, true],
            i = 0;

        for(var key in this.o.pointers){

          if(!this.settings.single || key === 0){

            var pointer = this.o.pointers[key],
                label = this.o.labels[pointer.uid],
                label_left = label.o[0].offsetLeft - this.sizes.domOffset.left,
                limit = this.o.limits[0];

            if(label_left < limit[0].clientWidth) {
              limits[0] = false;
            }

            limit = this.o.limits[1];
            if(label_left + label.o[0].clientWidth > this.sizes.domWidth - limit[0].clientWidth){
              limits[1] = false;  
            }
              
          }
        }

        for(; i < limits.length; i++){
          if(limits[i]){ // TODO animate
            angular.element(this.o.limits[i]).addClass("animate-show");          
          }
          else{
            angular.element(this.o.limits[i]).addClass("animate-hidden");
          }  
        }
      }
    };

    Slider.prototype.setValue = function(){
      var value = this.getValue();
      this.inputNode.attr("value", value);
      this.onstatechange.call(this, value, this.inputNode);
    };

    Slider.prototype.getValue = function(){
      if(!this.is.init) return false;
      var $this = this;

      var value = "";
      angular.forEach(this.o.pointers, function(pointer, key){
        if(pointer.value.prc !== undefined && !isNaN(pointer.value.prc)) 
          value += (key > 0 ? ";" : "") + $this.prcToValue(pointer.value.prc);
      });
      return value;
    };

    Slider.prototype.getLabelValue = function(value){
      if (this.settings.modelLabels) {
        if (angular.isFunction(this.settings.modelLabels)) {                
          return this.settings.modelLabels(value);
        }
        else {
          return this.settings.modelLabels[value] !== undefined ? this.settings.modelLabels[value] : value;
        }
      }  
      
      return value;
    };

    Slider.prototype.getPrcValue = function(){
      if(!this.is.init) return false;
      var $this = this;

      var value = "";
      // TODO remove jquery and see if % value is nice feature
      /*$.each(this.o.pointers, function(i){
        if(this.value.prc !== undefined && !isNaN(this.value.prc)) value += (i > 0 ? ";" : "") + this.value.prc;
      });*/
      return value;
    };

    Slider.prototype.prcToValue = function( prc ){
      var value;
      if (this.settings.heterogeneity && this.settings.heterogeneity.length > 0){
        var h = this.settings.heterogeneity,
            _start = 0,
            _from = this.settings.from,
            i = 0;

        for (; i <= h.length; i++){
          var v;
          if( h[i]) 
            v = h[i].split("/");
          else
            v = [100, this.settings.to];        

          if (prc >= _start && prc <= v[0]) {
            value = _from + ((prc-_start) * (v[1]-_from)) / (v[0]-_start);
          }

          _start = v[0];
          _from = v[1];
        }
      } 
      else {
        value = this.settings.from + (prc * this.settings.interval) / 100;
      }   

      return this.round(value);
    };

    Slider.prototype.valueToPrc = function( value, pointer ){
      var prc;
      if (this.settings.heterogeneity && this.settings.heterogeneity.length > 0){
        var h = this.settings.heterogeneity,
            _start = 0,
            _from = this.settings.from,
            i = 0;

        for (; i <= h.length; i++) {
          var v;
          if(h[i])
            v = h[i].split("/");
          else
            v = [100, this.settings.to];        

          if(value >= _from && value <= v[1]){
            if (pointer) {
              prc = pointer.limits(_start + (value-_from)*(v[0]-_start)/(v[1]-_from));
            } else {
              prc = this.limits(_start + (value-_from)*(v[0]-_start)/(v[1]-_from));
            }
          }

          _start = v[0]; _from = v[1];
        }

      } else {
        if (pointer) {
          prc = pointer.limits((value-this.settings.from)*100/this.settings.interval);
        } else {
          prc = this.limits((value-this.settings.from)*100/this.settings.interval);
        }
      }

      return prc;
    };

    Slider.prototype.round = function( value ){
      value = Math.round(value / this.settings.step) * this.settings.step;

      if(this.settings.round) 
        value = Math.round(value * Math.pow(10, this.settings.round)) / Math.pow(10, this.settings.round);
      else 
        value = Math.round(value);
      return value;      
    };

    return Slider;

  }]);
}(angular));
/*
|--------------------------------------------------------------------------
| Range Slider Template
|--------------------------------------------------------------------------
|
| The template to inject in the rangeslider
| Not included in regular templates because it 
| needs be injected into sliderDirective
*/

(function() {
  'use strict';

  angular
    .module('global.rangeslider')
    .run(rangeSliderTemplate);

    rangeSliderTemplate.$inject = ['$templateCache'];

    function rangeSliderTemplate ($templateCache) {
       $templateCache.put('range-slider/range-slider.html',
        '<span ng-class="mainSliderClass" id="{{sliderTmplId}}">' +
          '<table><tr><td>' +
            '<div class="jslider-bg">' +
              '<i class="left"></i>'+
              '<i class="right"></i>'+
              '<i class="range"></i>'+
              '<i class="before"></i>'+
              '<i class="default"></i>'+
              '<i class="default"></i>'+
              '<i class="after"></i>'+          
            '</div>' +
            '<div class="jslider-pointer"></div>' +
            '<div class="jslider-pointer jslider-pointer-to"></div>' +
            '<div class="jslider-label" ng-show="options.limits"><span ng-bind="limitValue(options.from)"></span>{{options.dimension}}</div>' +
            '<div class="jslider-label jslider-label-to" ng-show="options.limits"><span ng-bind="limitValue(options.to)"></span>{{options.dimension}}</div>' +
            '<div class="jslider-value"><span></span>{{options.dimension}}</div>' +
            '<div class="jslider-value jslider-value-to"><span></span>{{options.dimension}}</div>' +
            '<div class="jslider-scale" id="{{sliderScaleDivTmplId}}"></div>' +
          '</td></tr></table>' +
        '</span>');
    }  
})();

/*
|--------------------------------------------------------------------------
| Utility Factory for Range Slider
|--------------------------------------------------------------------------
|
| Needs to be moved into shared/common.hs
|
*/

(function() {
    'use strict';

    angular
        .module('global.rangeslider')
        .factory('sliderUtils', sliderUtils);

    sliderUtils.$inject = ['$window'];

    /* @ngInject */
    function sliderUtils($window) {
        var service = {
            offset: offset,
            browser : browser
        };
        
        return service;

        ////////////////

        /**
         * Return offset of element
         * @note should be replaced with JQuery
         * @param  {dom} element 
         * @return {offset.left, offset.top}         
         */
        function offset(element) {
          var rawDom = element[0]; 
          var _x = 0; 
          var _y = 0; 
          var body = document.documentElement || document.body; 
          var scrollX = window.pageXOffset || body.scrollLeft; 
          var scrollY = window.pageYOffset || body.scrollTop; 
          _x = rawDom.getBoundingClientRect().left + scrollX; 
          _y = rawDom.getBoundingClientRect().top + scrollY; 
          return { left: _x, top:_y };
        }

        /**
         * Browser Detection
         * @note angularAwesomeSlider author daul not finished yet
         * @return {string} 
         */
        function browser() {
          var userAgent = $window.navigator.userAgent;        
          var browsers = {mozilla: /mozilla/i, chrome: /chrome/i, safari: /safari/i, firefox: /firefox/i, ie: /internet explorer/i};
          for(var key in browsers) {
            if (browsers[key].test(userAgent)) {
              return key;
            }
          }
          return 'unknown';
        }
    }
})();