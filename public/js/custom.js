var myAppModule = angular.module('myApp', ['ngRoute'], function($interpolateProvider){
	$interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
    //console.log("hey");
});
myAppModule.controller('indexController', function($scope, $http){
	$scope.base_url = "api/employee-listings";
	$scope.saveEmployee = "api/save-employee";
	$scope.response_code = 404;
	$scope.status = false;
	$scope.total_body = {};
	$scope.FormData = {};
	//ajax to get all the request
	$scope.getProfile =  function() {
		$http.get($scope.base_url).success( function(data) {
			//console.log(data);
			$scope.status = data.status;
			$scope.response_code = data.status_code;
	     	// console.log($scope.status);
	     	// console.log($scope.response_code);
	     	if ($scope.status == true && $scope.response_code == 200) {
	     		$scope.total_body = data.response;
	     		//console.log($scope.total_body);
	     	} else {
	     		console.error('Unable to fetch record. Please try again later!');
	     	}
	   	});
	}
	
	$scope.getProfile();

   	//add employee
   	$scope.addEmployee = function(){
   		// console.log($scope.FormData);
   		// return;
   		$http.post($scope.saveEmployee, $scope.FormData).success( function(data) {
			$scope.status = data.status;
			$scope.response_code = data.status_code;
	     	// console.log($scope.status);
	     	// console.log($scope.response_code);
	     	if ($scope.status == true && $scope.response_code == 200) {
	     		$scope.total_body = data.response;
	     		console.log($scope.total_body);
	     		$scope.getProfile();
	     	} else {
	     		console.error('Unable to save record. Please try again later!');
	     	}
	   	});
   	}
});

//routes
myAppModule.config(function($routeProvider){
	$routeProvider.when('/add-employee', {
		controller : 'indexController',
		templateUrl: 'partials/add-employee.html'
	}).when('/', {
		controller : 'indexController',
		templateUrl: 'partials/index.html'
	}).otherwise({redirectTo: '/'});
});