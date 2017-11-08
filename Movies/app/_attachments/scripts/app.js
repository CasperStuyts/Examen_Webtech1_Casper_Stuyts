'use strict'


angular.module('movieApp', ['ngRoute'])

	.config(function($routeProvider) {
	    $routeProvider
	        .when('/home', {
	            templateUrl: 'assets/views/home.html',
	            controller: 'homeCtrl'
	        });
	})

	.controller('homeCtrl', ['personSearch', '$scope', function (personSearch, $scope) {
		$('#searchButton').on('click', function (e) {
    	personSearch.findPlayer().then(function($q) {
            $scope.answer = $q;
        });
			//console.log("hello")
    })

}])
	
.service('personSearch', function ($http,$q) {

    this.findPlayer = function(name) {
    	var q = $q.defer();
    	var url = 'theimdbapi.org/api/find/person?name='+encodeURIComponent(name)+'';
    	$http.get(url)
		.then(function(data){
			q.resolve(data.filmography.actor);
		}, function error(err) {
			q.reject(err);
		});
		
		return q.promise;
	};

    });

   