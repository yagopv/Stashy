define(['durandal/app','lib/pagelayout','lib/prettify'], function (app, pagelayout, prettify) {
    var activePage = ko.observable(),    
    hash = "",
    oc,
    menu;
    
    return {
        compositionComplete : function() {
            var that = this;
            oc = Stashy.OffCanvas("#menu", { enableTouch : true });
            pagelayout.offcanvasLayout(oc);
            prettyPrint();
            Stashy.Utils.ScrollTo('#' + that.hash);
        },
        
        activePage : activePage,
        
        attached : function(view) {
            menu = Stashy.Menu(".st-menu");
        },
        
        activate: function (page) {
            var that = this;
            
            if (page != undefined) {                
                that.hash = page;            
                Stashy.Utils.ScrollTo('#menu #' + that.hash);
            }
            ga('send', 'pageview');            
        },
        startMenuLayout : function() {
            menu.on();
        }
    };
});