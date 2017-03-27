/** Register a Controller */
demoApp.controller('DeletesController', function($scope, SimpleFactory) {
    $scope.customers = [];
    $scope.temp="";
    //to show or hide navigation in particular page
    //$rootScope.showNavigation = false;
    init();
    function init(){
        $scope.customers = SimpleFactory.getCustomers(); 
    }

    /** Function to delete customer */
    $scope.deleteCustomer = function ($index){
        var element = document.getElementById("row"+$index);
        element.style.setProperty("text-decoration", "line-through"); 
        var name = $scope.customers[$index].name;
        var city = $scope.customers[$index].city;
        $scope.customers.splice($index, 1);
        alert("[ "+name +" & "+ city +" ] Deleted"); // Display recently deleted data
    };
});