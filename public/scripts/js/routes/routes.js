/** All registered Routes for the website */
demoApp.config(function($routeProvider) {
    $routeProvider
        .when('/view-customer',
        {
            controller: 'ViewsController',
            templateUrl: 'partials/viewCustomer.html'
        })
        .when('/add-customer',
        {
            controller: 'AddsController',
            templateUrl: 'partials/addCustomer.html'
        })
        .when('/delete-customer',
        {
            controller: 'DeletesController',
            templateUrl: 'partials/deleteCustomer.html'
        })
        .otherwise( { redirectTo: '/view-customer' } );
});