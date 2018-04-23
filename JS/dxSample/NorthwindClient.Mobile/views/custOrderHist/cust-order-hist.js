NorthwindClient.CustOrderHist = function (params) {
    var viewModel = {
        dataSource: ko.observableArray(),

        viewShown: function () {
            NorthwindClient.db.get('CustOrderHist', { customerID: params.id }).done(function (data) {
                viewModel.dataSource.removeAll();
                viewModel.dataSource($.map(data, function (item) { return new NorthwindClient.CustOrderHistViewModel(item) }));
            });
        }
    };
    return viewModel;
};