/** Register a Controller */
demoApp.controller('ViewsController', function($scope, $rootScope, SimpleFactory) {
    $scope.customers = [];
    $rootScope.showPop = false;

    //  initial method   
    function init(){
        $scope.customers = SimpleFactory.getCustomers(); 
    }
    
    init();
});