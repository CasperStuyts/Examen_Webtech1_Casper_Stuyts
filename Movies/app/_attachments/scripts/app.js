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
    	personSearch.findPlayer().then(function(data) {
            $scope.answer = data;
        });
    })

}])
	
.service('personSearch', function ($http) {

    this.findPlayer = function() {
    	var url = 'theimdbapi.org/api/find/person?name=steve+mcqueen'
        $http({
        method: 'GET',
        url : url,
            }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            return response.data;

            }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            return response;

        });

    };

});	
   