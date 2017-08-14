<!DOCTYPE html>
<html lang="en">
<head>
	<title>@yield('title')</title>
	@yield('page_wise_style')
	<style type="text/css">
	.Inputspacex {
		float: right; margin-bottom: 2%;
	}
	.spacex {
		margin-bottom: 3% !important;
	}
	</style>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
	<!-- jQuery library -->
	<script src="http://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>

	<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

	<!--angular js -->
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.32/angular.min.js"></script>

	<!--angular js route-->
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0rc1/angular-route.min.js"></script>
	<!--custom js-->
	<script type="text/javascript" src="{{url('/')}}/js/custom.js"></script>
</head>
<body ng-app="myApp" ng-view="" class="container" style="background: #DCDCDC;">
</body>
</html>