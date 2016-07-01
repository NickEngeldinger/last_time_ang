var appFactsService = angular.module('app.facts.service', [])

appFactsService.factory('facts', ['$http', 'utils', function($http, utils) {
	var path = './assets/facts.json';
	
	var facts = $http.get(path).then(function(resp) {
		return resp.data.facts;
	});

	var factory = {};
	
	factory.all = function() {
		return facts;
	};

	factory.get = function(id) {
		return facts.then(function() {
			return utils.findById(facts, id);
		})
	};

	return factory;
}]);

//EVENTUALLY REPLACE WITH A RESTFUL API THAT RETURNS THIS JSON OBJECT
//POPULATED WITH DATE FROM THE DB