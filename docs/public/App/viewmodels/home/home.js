define(['durandal/app','lib/pagelayout'], function (app, pagelayout) {
    var activePage = ko.observable(),    
    hash = "",
    oc;
    
    return {
        viewAttached : function() {
            var that = this;
            oc = Stashy.OffCanvas("#home", { enableTouch : true });
            pagelayout.offcanvasLayout(oc);
            Stashy.Utils.ScrollTo('#' + that.hash);
        },              
        activePage : activePage,  
        activate: function (args) {
            var that = this;
            
            if (args.page != undefined) {                
                that.hash = args.page;            
                Stashy.Utils.ScrollTo('#home #' + that.hash);                
            }
            ga('send', 'pageview');
        }        
    };
});