/** Register a Controller */
demoApp.controller('ViewsController', function($scope, $rootScope, DataService) {
    $scope.customers = [];
    $rootScope.showPop = false;
    $rootScope.showViewNavigation = true;
    $rootScope.showHomeNavigation = false;

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

    /** Function to delete a spcific customer */
    $scope.deleteCustomer = function(id){
        DataService.deleteData(id)
        .then(function(response){
            $scope.getCustomers();
            $rootScope.showPopUp(response.statusIs, response.message);     
            $timeout(function(){
                $rootScope.hidePop();
            }, 5000);
        }, function(error){
            //
        });
    }
 
    // Calling Initial Method
    $scope.init();
});