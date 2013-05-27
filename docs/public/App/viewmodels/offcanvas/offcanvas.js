define(['durandal/app','lib/pagelayout','stashy/Stashy.Utils','stashy/Stashy.OffCanvas', 'lib/prettify'], function (app, pagelayout, utils, offcanvas,prettify) {
    var activePage = ko.observable(),    
    hash = "",
    oc;
    
    return {
        viewAttached : function() {
            var that = this;
            oc = offcanvas("#offcanvas");
            pagelayout.offcanvasLayout(oc);
            prettyPrint();          
            utils.ScrollTo('#' + that.hash);
        },
        closeLayout : function() {
            pagelayout.closeOffcanvas(oc);
            return true;
        },                   
        activePage : activePage,
        activate: function (args) {
            var that = this;
            
            if (args.page != undefined) {                
                that.hash = args.page;            
                utils.ScrollTo('#offcanvas #' + that.hash);                               
            }
            ga('send', 'pageview');
        }
    };
});