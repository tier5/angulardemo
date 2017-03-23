demoApp.factory('SimpleFactory', function(){
    var customers = [
        {name:'Jon Smith',city:'Kolkata'}, 
        {name:'Jon Doe',city:'Cuttack'}, 
        {name:'Jane Doe',city:'Khadagpur'} 
    ];
    var factory = {};
    factory.getCustomers = function() {
        return customers;
    }
    return factory;
});