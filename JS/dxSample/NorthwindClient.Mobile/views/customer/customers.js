
NorthwindClient.Customers = function(params) {
    return {
        dataSource: {
            store: NorthwindClient.db.Customers,
            map: function(item) {
                return new NorthwindClient.CustomerViewModel(item);
            }
        }
    };   
};
