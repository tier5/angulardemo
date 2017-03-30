/** Register a Controller */
demoApp.controller('AddsController', function($scope, $rootScope, DataService, $timeout) {
    $scope.customers = [];
    $rootScope.showPop = false;
    $rootScope.showViewNavigation = true;
    $rootScope.showHomeNavigation = false;
    //to show or hide navigation in particular page
    //$rootScope.showNavigation = false;

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
    $scope.addCustomer = function(newCustomer){     
        DataService.addData($scope.newCustomer)
        .then(function(response){
            delete $scope.newCustomer;
            $scope.getCustomers();
            $rootScope.showPopUp(response.statusIs, response.message);     
            $timeout(function(){
                $rootScope.hidePop();
            }, 5000);
        }, function(error){
            delete $scope.newCustomer;
            $rootScope.showPopUp(false, "Enter Proper Data!");     
            $timeout(function(){
                $rootScope.hidePop();
            }, 5000);
        });
/*        } else {
        $rootScope.showPopUp(false, "Enter Proper Data!");     
            $timeout(function(){
                $rootScope.hidePop();
            }, 5000);
    }*/
    }
   
   // Calling Initial Method
    $scope.init();


    // var response = SimpleService.addCustomerFirst($scope.newCustomer.name, $scope.newCustomer.city);
    // console.log(response.msg);
    // var status = SimpleService.addCustomerLast($scope.newCustomer.name, $scope.newCustomer.city);
    // delete $scope.newCustomer;
//-----------------------------------------------------------
     // $rootScope.showPopUp(true, "Success!");     
     //    $timeout(function(){
     //        $rootScope.hidePop();
     //    }, 6000);

     //    delete $scope.newCustomer;
//------------------------------------------------------------
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


});