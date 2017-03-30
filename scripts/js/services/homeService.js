demoApp.service('HomeService', function($http, $q){
    var data =this;
    data.list = {}; // Store team name in an array

    /** Function to Get Data */
    data.getData = function(){

        var defer = $q.defer();
        $http.get('http://laravel.api/api/auth/get-data')
        .success(function(response){
            //console.log(response);
            data.list = response;
            defer.resolve(response)
        })
        .error(function(error, status){
            defer.reject(error);
        });  

        return defer.promise;
    }

     /** Function to Add New Data */
    data.addData = function(data){
        var defer = $q.defer();
        $http.post('http://laravel.api/api/auth/add-data', data)
        .success(function(response){
            defer.resolve(response)
        })
        .error(function(error, status){
            defer.reject(error);
        });  

        return defer.promise;
    }

    /** Function to Check Validation of Data */
    data.checkData = function(data){
        var defer = $q.defer();
        $http.post('http://laravel.api/api/auth/check-data', data)
        .success(function(response){
            defer.resolve(response)
        })
        .error(function(error, status){
            defer.reject(error);
        });  

        return defer.promise;
    }

     /** Function to Delete Existing Data */
    data.deleteData = function(id){

        var defer = $q.defer();
        $http.delete('http://laravel.api/api/auth/delete-data/' + id)
        .success(function(response){
            defer.resolve(response)
        })
        .error(function(error, status){
            defer.reject(error);
        });  

        return defer.promise;
    }

    return data;
});