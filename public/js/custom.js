var myApp = angular.module('myApp', ['ngRoute'], function($interpolateProvider){
	$interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});