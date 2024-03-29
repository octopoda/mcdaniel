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