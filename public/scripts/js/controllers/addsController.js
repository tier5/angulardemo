/** Register a Controller */
demoApp.controller('AddsController', function($scope, $rootScope, SimpleFactory, SimpleService, $timeout) {
    $scope.customers = [];
    $scope.temp="";
    $rootScope.showPop = false;
    //to show or hide navigation in particular page
    //$rootScope.showNavigation = false;
    init();
    function init(){
        $scope.customers = SimpleFactory.getCustomers(); 
    }
    var response = SimpleService.addCustomerFirst($scope.newCustomer.name, $scope.newCustomer.city);
    console.log(response.msg);
    var status = SimpleService.addCustomerLast($scope.newCustomer.name, $scope.newCustomer.city);
    delete $scope.newCustomer;

     $rootScope.showPopUp(true, "Success!");     
        $timeout(function(){
            $rootScope.hidePop();
        }, 6000);

        delete $scope.newCustomer;

    // /** Function to add customer at the start of customers array */
    // $scope.addCustomerFirst = function (){
    //         $scope.customers.unshift(
    //             {
    //                 name: $scope.newCustomer.name, 
    //                 city: $scope.newCustomer.city
    //             }
    //         ); // Returns New Array Length
    //         $rootScope.showPopUp(true, "Success!");

    //         $timeout(function(){
    //             $rootScope.hidePop();
    //         }, 6000);

    //         delete $scope.newCustomer;
    // };

    // /** Function to add customer at the end of customers array */
    // $scope.addCustomerLast = function (){
    //     $scope.temp = $scope.customers.push(
    //         {
    //             name: $scope.newCustomer.name, 
    //             city: $scope.newCustomer.city
    //         }
    //     ); // Returns New Array Length
    //     $rootScope.showPopUp(true, "Success!");

    //         $timeout(function(){
    //             $rootScope.hidePop();
    //         }, 6000);
    //     delete $scope.newCustomer;
    //     delete $scope.temp;
    // };
});