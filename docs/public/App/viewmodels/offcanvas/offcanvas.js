define(['durandal/app','lib/pagelayout', 'lib/prettify'], function (app, pagelayout,prettify) {
    var activePage = ko.observable(),    
    hash = "",
    oc;
    
    return {
        compositionComplete : function() {
            var that = this;
            oc = Stashy.OffCanvas("#offcanvas", { enableTouch : true });
            pagelayout.offcanvasLayout(oc);
            prettyPrint();          
            Stashy.Utils.ScrollTo('#' + that.hash);
        },                  
        activePage : activePage,
        activate: function (page) {
            var that = this;
            
            if (page != undefined) {                
                that.hash = page;            
                Stashy.Utils.ScrollTo('#offcanvas #' + that.hash);                               
            }
            ga('send', 'pageview');
        }
    };
});