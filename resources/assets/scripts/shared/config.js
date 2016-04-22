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