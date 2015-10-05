var travelApp=angular.module('travelApp',['ui.router']);


travelApp.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('First', { 
		views: { 
		'step1': {
			templateUrl: 'step1.html'
		}
		}
		})
		
		.state('Second', { 
		views: { 
		'step2': {
			templateUrl: 'step2.html'
		}
		}
		})
		
		.state('Third', { 
		views: { 
		'step3': {
			templateUrl: 'step3.html'
		}
		}
		})
});


