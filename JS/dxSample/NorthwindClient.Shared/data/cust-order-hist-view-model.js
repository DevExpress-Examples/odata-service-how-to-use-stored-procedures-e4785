(function () {
    NorthwindClient.CustOrderHistViewModel = function (data) {
        this.ProductName = ko.observable(),
        this.Total = ko.observable()
        if (data)
            this.fromJS(data);
    };

    $.extend(NorthwindClient.CustOrderHistViewModel.prototype, {
        toJS: function () {
            return {
                ProductName: this.ProductName(),
                Total: this.Total()
            };
        },

        fromJS: function (data) {
            if (data) {
                this.ProductName(data.ProductName);
                this.Total(data.Total);
            }
        }
    });
})()
