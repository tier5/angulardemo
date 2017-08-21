var myAppModule = angular.module('myApp', ['ngRoute'], function($interpolateProvider){
	$interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
    //console.log("hey");
});

myAppModule.controller('indexController', function($scope, $rootScope, $http){
	$scope.base_url 		= "api/employee-listings";
	$scope.saveEmployee 	= "api/save-employee";
	$scope.updateEmployeeUrl= "api/update-employee";
	$scope.deleteEmployeeUrl= "api/delete-employee";
	$scope.response_code 	= 404;
	$scope.status 			= false;
	$scope.total_body 		= {};
	$scope.FormData 		= {};
	$scope.editUserData 	= {};
	$scope.editData 		= false;
	$scope.deletion_conf 	= false;
	$scope.delete_user		= {};

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
	     		window.location = "#/";
	     	} else {
	     		console.error('Unable to save record. Please try again later!');
	     	}
	   	});
   	}
   	//edit employee
   	$scope.editUserProfile = function(row_data) {
   		//console.log(JSON.stringify(row_data, null, 4));
   		$scope.editUserData = row_data;
   		$scope.editData 	= true;
   		// window.location = "#/update-employee/";
   		
   		// console.log($scope.editUserData);
   	};


   	// go back to the list view
   	$scope.goBack = function () {
   		$scope.editData = false;
   	};

   	$scope.updateEmployee = function() {
   		//console.log($scope.editUserData);
   		$http.post($scope.updateEmployeeUrl, $scope.editUserData).success(function(data){
   			$scope.status = data.status;
			$scope.response_code = data.status_code;
	     	// console.log($scope.status);
	     	// console.log($scope.response_code);
	     	if ($scope.status == true && $scope.response_code == 200) {
	     		$scope.total_body = data.response;
	     		//console.log($scope.total_body);
	     		$scope.getProfile();
	     		$scope.editData = false;
	     	} else {
	     		console.error('Unable to save record. Please try again later!');
	     	}
   		});
   	}
   	$scope.deleteUserProfile = function(id) {
   		$scope.deletion_conf 	= confirm('Are You Sure?');
   		$scope.delete_user 		= {id:id};
   		//console.log();
   		if ($scope.deletion_conf) {
   			$http.post($scope.deleteEmployeeUrl, $scope.delete_user).success(function(data){
   				$scope.status = data.status;
				$scope.response_code = data.status_code;
		     	// console.log($scope.status);
		     	// console.log($scope.response_code);
		     	if ($scope.status == true && $scope.response_code == 200) {
		     		$scope.total_body = data.response;
		     		//console.log($scope.total_body);
		     		$scope.getProfile();
		     	} else {
		     		console.error('Unable to delete record. Please try again later!');
		     	}
   			});
   		} 
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
	}).when('/update-employee',{
		controller : 'indexController',
		templateUrl : 'partials/edit.html'
	}).otherwise({redirectTo: '/'});
});