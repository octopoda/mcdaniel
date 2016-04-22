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