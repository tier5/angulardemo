demoApp.service('DataService', function($http, $q){
    var data =this;
    data.list = {};

    /** Function to Get Data */
    data.getData = function(){

        var defer = $q.defer();
        $http.get('http://laravel.api/api/get-data')
        .success(function(response){
            data.list = response;
            defer.resolve(response)
        })
        .error(function(error, status){
            defer.reject(error);
        });  

        return defer.promise;
    }

     /** Function to Add Data */
    data.addData = function(data){

        var defer = $q.defer();
        $http.post('http://laravel.api/api/add-data', data)
        .success(function(response){
            defer.resolve(response)
        })
        .error(function(error, status){
            defer.reject(error);
        });  

        return defer.promise;
    }

     /** Function to Delete Data */
    data.deleteData = function(id){

        var defer = $q.defer();
        $http.delete('http://laravel.api/api/delete-data/' + id)
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