<!DOCTYPE html>
<html lang="en">
<head>
	<title>@yield('title')</title>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
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
<body ng-app="myApp">
	@yield('content')
</body>
</html>