'use strict';
/*angular.module('blogList').controller('BlogListController',function($scope){
	console.log('i am here');
	$scope.title="Title"
	$scope.clicks=0
	$scope.someclicks=function(){
		$scope.clicks+=1;
		$scope.title="Title "+$scope.clicks+' times clicked'
	}
})*/

angular.module('blogList').component('blogList',{
	templateUrl:'./templates/blog-list.html',
	controller:function($scope){
		$scope.title="Title"
		$scope.clicks=0

		$scope.someclicks=function(){
		$scope.clicks+=1;
		$scope.title="Title "+$scope.clicks+' times clicked'
		}
	}


})