
$(function() {
    
    NorthwindClient.app = new DevExpress.framework.html.HtmlApplication({
        ns: NorthwindClient,
        viewPortNode: document.getElementById("viewPort"),
        defaultLayout: NorthwindClient.config.defaultLayout,
        navigation: NorthwindClient.config.navigation
    });

    NorthwindClient.app.router.register(":view/:id", { view: "Customers", id: undefined });
    NorthwindClient.app.router.register(":view/:id", { view: "About", id: undefined });
});
