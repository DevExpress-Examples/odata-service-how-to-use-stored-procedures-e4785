
(function() {
    var endpointSelector = new DevExpress.EndpointSelector(NorthwindClient.config.endpoints);

    var serviceConfig = $.extend(true, {}, NorthwindClient.config.services, {
        db: {
            url: endpointSelector.urlFor("db"),
			// To enable JSONP support, uncomment the following line
            //jsonp: !window.WinJS,

            errorHandler: handleServiceError
        }
    });

    function handleServiceError(error) {
        if(window.WinJS) {
            try {
                new Windows.UI.Popups.MessageDialog(error.message).showAsync();
            } catch(e) {
                // Another dialog is shown
            }
        } else {
            alert(error.message);
        }
    }

   
    NorthwindClient.db = new DevExpress.data.ODataContext(serviceConfig.db);

}());
