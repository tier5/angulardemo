/** All registered Routes for the website */
demoApp.config(function($routeProvider) {
    $routeProvider
        .when('/view-customer',
        {
            controller: 'SimpleController',
            templateUrl: 'partials/viewCustomer.html'
        })
        .when('/add-customer',
        {
            controller: 'SimpleController',
            templateUrl: 'partials/addCustomer.html'
        })
        .when('/delete-customer',
        {
            controller: 'SimpleController',
            templateUrl: 'partials/deleteCustomer.html'
        })
        .otherwise( { redirectTo: '/view-customer' } );
});