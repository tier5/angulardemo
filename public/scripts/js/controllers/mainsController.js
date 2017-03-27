/** Register a Controller */
demoApp.controller('MainsController', function($scope, $rootScope, SimpleFactory){
    $rootScope.showPop = false;
    // // hide popup method
    $rootScope.hidePop = function(){
        $rootScope.showPop = false;
    };
    // Show popup
    $rootScope.showPopUp = function(success, msg){
        $rootScope.showPop = true;
        $rootScope.msg = msg;
        $rootScope.success = success;
    };
});
demoApp.run(function($rootScope) {
    $rootScope.color = 'blue';
});