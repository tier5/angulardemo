/** Register a Controller */
demoApp.controller('SimpleController', function($scope, SimpleFactory) {
    $scope.customers = [];
    $scope.temp="";
    init();
    function init(){
        $scope.customers = SimpleFactory.getCustomers(); 
    }
    /** Function to add customer at the end of customers array */
    $scope.addCustomerLast = function (){
        $scope.temp = $scope.customers.push(
            {
                name: $scope.newCustomer.name, 
                city: $scope.newCustomer.city
            }
        ); // Returns New Array Length
        alert($scope.customers[$scope.temp-1].name + " & " + $scope.customers[$scope.temp-1].city + " Added"); // Display newly added data
    };
    /** Function to add customer at the start of customers array */
    $scope.addCustomerFirst = function (){
        $scope.customers.unshift(
            {
                name: $scope.newCustomer.name, 
                city: $scope.newCustomer.city
            }
        ); // Returns New Array Length
        alert($scope.customers[0].name + " & " + $scope.customers[0].city + " Added"); // Display newly added data
    };
    /** Function to delete customer from the start of customers array */
    $scope.deleteFirstCustomer = function (){
        $scope.temp = $scope.customers.shift(); // Returns Shifted Element
        // console.log($scope.temp.name);
        // console.log($scope.temp.city);
        alert($scope.temp.name + "&" + $scope.temp.city + " Deleted"); // Display recently deleted data
    };
    /** Function to delete customer from the end of customers array */
    $scope.deleteLastCustomer = function (){
        $scope.temp = $scope.customers.pop(); // Returns poped Element
       // console.log($scope.temp.name);
       // console.log($scope.temp.city);
       alert($scope.temp.name + "&" + $scope.temp.city + " Deleted"); // Display recently deleted data
        };
});