/** Registering a Factory hich will store all data */
demoApp.factory('SimpleFactory', function(){
    var customers = [
        {name:'John Smith',city:'Kolkata'}, 
        {name:'John Doe',city:'Cuttack'}, 
        {name:'Jane Doe',city:'Khadagpur'} 
    ];
    var factory = {};
    factory.getCustomers = function() {
        return customers;
    }
    return factory;
});