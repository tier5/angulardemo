demoApp.config(function($routeProvider) {
    $routeProvider
        .when('/view1',
        {
            controller: 'SimpleController',
            templateUrl: 'partials/view1.html'
        })
        .when('/view2',
        {
            controller: 'SimpleController',
            templateUrl: 'partials/view2.html'
        })
        .otherwise( { redirectTo: '/view1' } );
});