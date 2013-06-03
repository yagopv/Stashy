define(['durandal/app','lib/pagelayout', 'stashy/Stashy.OffCanvas','stashy/Stashy.Utils'], function (app, pagelayout, offcanvas, utils) {
    var activePage = ko.observable(),    
    hash = "",
    oc;
    
    return {
        viewAttached : function() {
            var that = this;
            oc = offcanvas("#home", { enableTouch : true });
            pagelayout.offcanvasLayout(oc);
            utils.ScrollTo('#' + that.hash);
        },              
        activePage : activePage,  
        activate: function (args) {
            var that = this;
            
            if (args.page != undefined) {                
                that.hash = args.page;            
                utils.ScrollTo('#home #' + that.hash);                
            }
            ga('send', 'pageview');
        }        
    };
});