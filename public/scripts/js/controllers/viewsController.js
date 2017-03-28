/** Register a Controller */
demoApp.controller('ViewsController', function($scope, $rootScope, DataService) {
    $scope.customers = [];
    $rootScope.showPop = false;

    /** Initial Method */   
    $scope.init = function (){
        $scope.getCustomers();
    }

    /** Function to get list of all customers from DataService */
    $scope.getCustomers = function(){
        DataService.getData()
        .then(function(response){
            $scope.customers = DataService.list;
        }, function(error){
            //
        });
    }

    /** Function to add a new customer */
    $scope.addCustomers = function(newCustomer){
        DataService.addData($scope.newCustomer)
        .then(function(response){
            $scope.customers = DataService.list;
        }, function(error){
            //
        });
    }

    /** Function to delete a spcific customer */
    $scope.deleteCustomer = function(id){
        DataService.deleteData(id)
        .then(function(response){
            $scope.getCustomers();
        }, function(error){
            //
        });
    }

   
    $scope.init();
});