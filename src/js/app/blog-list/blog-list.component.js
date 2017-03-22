'use strict';
angular.module('blogList').controller('BlogListController',function($scope){
	console.log('i am here');
	$scope.title="Title"
	$scope.clicks=0
	$scope.someclicks=function(){
		$scope.clicks+=1;
		$scope.title="Title "+$scope.clicks+' times clicked'
	}
})