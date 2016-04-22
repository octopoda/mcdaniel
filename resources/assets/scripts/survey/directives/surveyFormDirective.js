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