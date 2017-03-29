/** Register a Controller */
demoApp.controller('HomeController', function($scope, $rootScope){
    $rootScope.showPop = false;
    $rootScope.showViewNavigation = false;
    $rootScope.showHomeNavigation = true;
    // hide popup method
    $rootScope.hidePop = function(){
        $rootScope.showPop = false;
    };

    // Show popup
    $rootScope.showPopUp = function(status, msg){
        $rootScope.showPop = true;
        $rootScope.msg = msg;
        $rootScope.status = status;
    };
});
