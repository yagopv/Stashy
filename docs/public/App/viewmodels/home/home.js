define(['durandal/app','lib/pagelayout','plugins/router'], function (app, pagelayout,router) {
    var activePage = ko.observable(),    
    hash = "",
    oc;
    
    return {
        compositionComplete : function() {
            var that = this;
            oc = Stashy.OffCanvas("#home", { enableTouch : true });
            pagelayout.offcanvasLayout(oc);
            Stashy.Utils.ScrollTo('#' + that.hash);
        },
        activePage : activePage,  
        activate: function (page) {
            var that = this;
            
            if (page != undefined) {                
                that.hash = page;            
                Stashy.Utils.ScrollTo('#home #' + that.hash);                
            }
            ga('send', 'pageview');
        },
        router : router
    };
});