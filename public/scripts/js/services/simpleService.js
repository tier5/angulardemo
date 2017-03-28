demoApp.service('SimpleService', function(SimpleFactory){
    /** Function to add customer at the start of customers array */
    this.addCustomerFirst = function (name, city){
            factory.customers.unshift(
                {
                    name: name, 
                    city: city
                }
            ); // Returns New Array Length
            this.status = true;
            this.msg = "Success!";            
    };

    /** Function to add customer at the end of customers array */
    this.addCustomerLast = function (name, city){
        factory.customers.push(
            {
                name: name, 
                city: city
            }
        ); // Returns New Array Length
        this.status = true;
        this.msg = "Success!";     
    };
});