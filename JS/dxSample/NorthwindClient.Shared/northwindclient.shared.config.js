
// NOTE object below must be a valid JSON
window.NorthwindClient = $.extend(true, window.NorthwindClient, {
    "config": {
        "endpoints": {
            "db": {
                "local": "http://localhost:14215/DataService.svc",
                "production": "http://localhost:14215/DataService.svc"
            }
        },
        "services": {
            "db": {
                "entities": {
					"Customers": { 
						key: "CustomerID", 
						keyType: "String" 
					},
                }
            }
        }
    }
});
