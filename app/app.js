require('angular');
require('angular-ui-router');

var app = angular.module('app', ['ui.router']);

app.run(['$rootScope', '$state', '$stateParams',
	function($rootScope, $state, $stateParams)
 {
 	$rootScope.$on("$stateChangeError", console.log.bind(console));
 	$rootScope.$state = $state;
 	$rootScope.$stateParams = $stateParams;
 }
])

app.config(['$stateProvider', '$urlRouterProvider',

	function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/')

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: './templates/home.html',
			controller: 'MainController'
		}) 
		.state('about', {
			url: '/about',
			templateUrl: './templates/about.html'
		})
		.state('suggest', {
			url: '/suggest',
			templateUrl: ''
		})
}]);


app.controller('MainController', function($scope) {
	$scope.message = 'Angular is working now, with browser sync, and live reload works!'
})