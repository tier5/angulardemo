/** All registered Routes for the website */
demoApp.config(function($routeProvider) {
    $routeProvider
        .when('/view-customer',
        {
            controller: 'ViewsController',
            templateUrl: 'partials/viewCustomer.html'
        })
        .when('/sign-in',
        {
            controller: 'HomeController',
            templateUrl: 'partials/signIn.html'
        })
        .when('/sign-up',
        {
            controller: 'HomeController',
            templateUrl: 'partials/signUp.html'
        })
        .when('/add-customer',
        {
            controller: 'AddsController',
            templateUrl: 'partials/addCustomer.html'
        })
        .otherwise( { redirectTo: '/sign-in' } );
});