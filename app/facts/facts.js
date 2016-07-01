var appFacts = angular.module('app.facts', ['ui.router']);

appFacts.config(['$stateProvider', '$urlRouterProvider',

	function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('facts', {
				abstract: true,
				url: '/fact',
				templateUrl: '/facts/facts.html',
				resolve: {
					facts: ['facts',
						function(facts) {
							return facts.all();
						}]
				},
				controller: ['$scope', '$state', 'facts', 'utils',
					function($scope, $state, facts, utils) {
						$scope.facts = facts;

						$scope.goToRandom = function() {
							var randInt = utils.newRandomKey($scope.facts, 'id', $state.params.factId);
							$state.go('facts.detail', {factId: randId});
						};
				}]
			})
			.state('facts.list', {
				url: '',
				templateUrl: '/facts/facts.list.html',
			})
			.state('facts.detail', {
				url: '/{factId:[0-9]{1-4}}',
				views: {
					'': {
						templateUrl: '/facts/fact.detail',
						controller: ['$state', '$stateParams', 'utils',
							function($state, $stateParams, utils) {
								$scope.fact = utils.findById($scope.facts, $stateParams.factId);
						}]
					}
				}
			})
	}
]);

//controller: FactController
//This controller should containa an AJAX call to the back end
//That backend should return a random fact with an ID
//So the URL should be /fact:id
//That way the specific fact can be linked to
//And the back button will return the user to that specific fact